<script lang="ts">
export default {
  name: 'AmapPoi'
}
</script>

<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Table } from '@/components/Table'
import { getPOIListApi, exportPOIDataToExcelApi } from '@/api/sadmin/amap/poi'
import { useTable } from '@/hooks/web/useTable'
import { columns, searchSchema, excelColumns } from './components/poi.data'
import { ref, watch, nextTick, computed, unref } from 'vue'
import { ElRow, ElCol, ElButton, ElTooltip } from 'element-plus'
import { RightToolbar } from '@/components/RightToolbar'
import { Search } from '@/components/Search'
import { useCache } from '@/hooks/web/useCache'
import { useRouter } from 'vue-router'
import { useDictStore } from '@/store/modules/dict'
import { FormSetPropsType } from '@/types/form'
import table2excel from 'js-table2excel'
import { useAuthStore } from '@/store/modules/auth'

const { wsCache } = useCache()

const { register, elTableRef, tableObject, methods } = useTable({
  getListApi: getPOIListApi,
  response: {
    data: 'data',
    count: 'count'
  }
})

const searchSetSchemaList = ref([] as FormSetPropsType[])

const getOptions = async () => {
  const dictStore = useDictStore()
  const dictOptions = await dictStore.getDictObj(['sys_sadmin_poi_adcode', 'sys_sadmin_poi_poi'])
  searchSetSchemaList.value.push({
    field: 'adcode',
    path: 'componentProps.options',
    value: dictOptions.sys_sadmin_poi_adcode
  })
  searchSetSchemaList.value.push({
    field: 'poi',
    path: 'componentProps.options',
    value: dictOptions.sys_sadmin_poi_poi
  })
}

getOptions()

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

// 导出Excel
const exportExcel = () => {
  table2excel(excelColumns, tableObject.tableData, '高德')
}

const exportAllExcel = async () => {
  tableObject.loading = true
  const res = await exportPOIDataToExcelApi(unref(tableObject.params)).finally(() => {
    tableObject.loading = false
  })
  if (res) {
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = res.data.url
    a.target = '_blank'
    a.download = res.data.filename
    const event = new MouseEvent('click')
    a.dispatchEvent(event)
  }
}

// 刷新当前的次数
const reloadSearchNumber = async () => {
  await authStore.setUserInfo()
}

const authStore = useAuthStore()
const user = computed(() => authStore.getUser)

tableObject.loading = false
const limit = 25
</script>

<template>
  <ContentWrap>
    <Search
      :schema="searchSchema"
      :setSchemaList="searchSetSchemaList"
      @search="setSearchParams"
      @reset="setSearchParams"
    />

    <div class="mb-8px flex justify-between">
      <ElRow :gutter="10">
        <ElCol :span="1.5">
          <ElButton type="primary" @click="exportExcel">导出查询结果到Excel（不消耗次数）</ElButton>
        </ElCol>
        <ElCol :span="1.5">
          <ElButton type="primary" @click="exportAllExcel"
            >导出类别所有数据到Excel（每25条数据消耗一次）</ElButton
          >
        </ElCol>
        <ElCol :span="1.5">
          <ElButton type="primary" @click="reloadSearchNumber">刷新当前的次数</ElButton>
        </ElCol>
        <ElCol :span="1.5" v-if="user.poi_search_restrict_method === '0'">
          <span class="text-[14px]">今日剩余次数：{{ user.poi_search_residual_day_number }}</span>
        </ElCol>
        <ElCol :span="1.5" v-if="user.poi_search_restrict_method === '1'">
          <span class="text-[14px]">剩余次数：{{ user.poi_search_residual_total_number }}</span>
        </ElCol>
        <ElCol :span="1.5">
          <ElTooltip
            effect="dark"
            content="每查询一次都会消耗一次，并且每翻页一次同样会消耗一次"
            placement="top"
          >
            <Icon icon="ph:question-fill" />
          </ElTooltip>
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
      v-model:limit="limit"
      v-model:page="tableObject.page"
      :columns="columns"
      :data="tableObject.tableData"
      :loading="tableObject.loading"
      :selection="false"
      :size="tableSize"
      :border="true"
      :pagination="{
        total: tableObject.count,
        pageSizes: [25],
        layout: 'sizes, prev, pager, next, jumper, ->'
      }"
      @register="register"
    />
  </ContentWrap>
</template>
