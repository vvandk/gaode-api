<script lang="ts">
export default {
  name: 'AmapKey'
}
</script>

<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Table } from '@/components/Table'
import {
  getKeysListApi,
  addKeysListApi,
  delKeysListApi,
  putKeysListApi,
  getKeysApi
} from '@/api/sadmin/amap/keys'
import { useTable } from '@/hooks/web/useTable'
import { columns, searchSchema } from './components/keys.data'
import { ref, watch, nextTick, unref } from 'vue'
import { ElRow, ElCol, ElButton, ElSwitch, ElMessage } from 'element-plus'
import { RightToolbar } from '@/components/RightToolbar'
import { Search } from '@/components/Search'
import { useI18n } from '@/hooks/web/useI18n'
import { useCache } from '@/hooks/web/useCache'
import { useRouter } from 'vue-router'
import Write from './components/Write.vue'
import { Dialog } from '@/components/Dialog'
import { useDictStore } from '@/store/modules/dict'
import { selectDictLabel } from '@/utils/dict'

const { wsCache } = useCache()
const { t } = useI18n()

const { register, elTableRef, tableObject, methods } = useTable({
  getListApi: getKeysListApi,
  delListApi: delKeysListApi,
  response: {
    data: 'data',
    count: 'count'
  }
})

const { getList, setSearchParams } = methods

const tableSize = ref('default')

watch(tableSize, (val) => {
  tableSize.value = val
})

const { currentRoute } = useRouter()
const cacheTableHeadersKey = currentRoute.value.fullPath

watch(
  columns,
  async (val) => {
    wsCache.set(cacheTableHeadersKey, JSON.stringify(val))
    await nextTick()
    elTableRef.value?.doLayout()
  },
  {
    deep: true
  }
)

const amapAuthMethod = ref()

const getOptions = async () => {
  const dictStore = useDictStore()
  const dictOptions = await dictStore.getDictObj(['sys_sadmin_amap_auth_method'])
  amapAuthMethod.value = dictOptions.sys_sadmin_amap_auth_method
}

getOptions()

const dialogVisible = ref(false)
const dialogTitle = ref('')
const actionType = ref('')
const loading = ref(false)

// 添加事件
const addAction = () => {
  dialogTitle.value = t('exampleDemo.add')
  tableObject.currentRow = null
  dialogVisible.value = true
  actionType.value = 'add'
}

// 编辑事件
const updateAction = async (row: any) => {
  const res = await getKeysApi(row.id)
  if (res) {
    dialogTitle.value = '编辑'
    tableObject.currentRow = res.data
    dialogVisible.value = true
    actionType.value = 'edit'
  }
}

// 删除事件
const delData = async (row: any) => {
  const { delListApi } = methods
  await delListApi(true, [row.id])
}

const writeRef = ref<ComponentRef<typeof Write>>()

const save = async () => {
  const write = unref(writeRef)
  await write?.elFormRef?.validate(async (isValid) => {
    if (isValid) {
      loading.value = true
      let data = await write?.getFormData()
      if (!data) {
        loading.value = false
        return ElMessage.error('未获取到数据')
      }
      try {
        const res = ref({})
        if (actionType.value === 'add') {
          res.value = await addKeysListApi(data)
          if (res.value) {
            dialogVisible.value = false
            getList()
          }
        } else if (actionType.value === 'edit') {
          res.value = await putKeysListApi(data)
          if (res.value) {
            dialogVisible.value = false
            getList()
          }
        }
      } finally {
        loading.value = false
      }
    }
  })
}

getList()
</script>

<template>
  <ContentWrap>
    <Search :schema="searchSchema" @search="setSearchParams" @reset="setSearchParams" />

    <div class="mb-8px flex justify-between">
      <ElRow>
        <ElCol :span="1.5">
          <ElButton type="primary" @click="addAction">新增key</ElButton>
        </ElCol>
      </ElRow>
      <RightToolbar
        @get-list="getList"
        v-model:table-size="tableSize"
        v-model:columns="columns"
        :cache-table-headers-key="cacheTableHeadersKey"
      />
    </div>

    <Table
      v-model:limit="tableObject.limit"
      v-model:page="tableObject.page"
      :columns="columns"
      :data="tableObject.tableData"
      :loading="tableObject.loading"
      :selection="false"
      :size="tableSize"
      :border="true"
      :pagination="{
        total: tableObject.count
      }"
      @register="register"
    >
      <template #auth_method="{ row }">
        <span>
          {{ selectDictLabel(amapAuthMethod, row.auth_method) }}
        </span>
      </template>

      <template #is_active="{ row }">
        <ElSwitch :value="row.is_active" size="small" disabled />
      </template>

      <template #is_auth="{ row }">
        <ElSwitch :value="row.is_auth" size="small" disabled />
      </template>

      <template #action="{ row }">
        <ElButton type="primary" link size="small" @click="updateAction(row)">
          {{ t('exampleDemo.edit') }}
        </ElButton>
        <ElButton type="danger" link size="small" @click="delData(row)">
          {{ t('exampleDemo.del') }}
        </ElButton>
      </template>
    </Table>

    <Dialog v-model="dialogVisible" :title="dialogTitle" width="700px" height="600px">
      <Write ref="writeRef" :current-row="tableObject.currentRow" />

      <template #footer>
        <ElButton type="primary" :loading="loading" @click="save">
          {{ t('exampleDemo.save') }}
        </ElButton>
        <ElButton @click="dialogVisible = false">{{ t('dialogDemo.close') }}</ElButton>
      </template>
    </Dialog>
  </ContentWrap>
</template>
