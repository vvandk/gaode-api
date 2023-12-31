<script setup lang="ts">
import { Form } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { PropType, reactive, watch } from 'vue'
import { useValidator } from '@/hooks/web/useValidator'
import { getMenuTreeOptionsApi } from '@/api/vadmin/auth/menu'
import { ElButton, ElInput } from 'element-plus'
import { schema } from './menu.data'
import { propTypes } from '@/utils/propTypes'

const { required } = useValidator()

const props = defineProps({
  currentRow: {
    type: Object as PropType<Nullable<any>>,
    default: () => null
  },
  parentId: propTypes.number.def(undefined)
})

const rules = reactive({
  title: [required()],
  menu_type: [required()],
  disabled: [required()],
  hidden: [required()],
  path: [required()],
  noCache: [required()],
  order: [required()]
})

const { register, methods, elFormRef } = useForm({
  schema: schema
})

watch(
  () => props.currentRow,
  (currentRow) => {
    if (!currentRow) return
    const { setValues } = methods
    setValues(currentRow)
  },
  {
    deep: true,
    immediate: true
  }
)

const getMenuTreeOptions = async () => {
  const res = await getMenuTreeOptionsApi()
  if (res) {
    const { setSchema } = methods
    setSchema([
      {
        field: 'parent_id',
        path: 'componentProps.data',
        value: res.data
      }
    ])
    if (props.parentId) {
      const { setValue } = methods
      setValue('parent_id', props.parentId)
    }
  }
}

getMenuTreeOptions()

const toIconify = () => {
  window.open('https://iconify.design/')
}

defineExpose({
  elFormRef,
  getFormData: methods.getFormData
})
</script>

<template>
  <Form :rules="rules" @register="register" :labelWidth="100">
    <template #icon="form">
      <div style="display: flex; justify-content: space-between">
        <ElInput
          v-model="form['icon']"
          placeholder="支持 Iconify 中的所有图标，请登录网站自行搜索：https://iconify.design/"
          style="width: 500px"
        />
        <div style="margin-left: 10px">
          <ElButton type="primary" @click="toIconify">跳转</ElButton>
        </div>
      </div>
    </template>
  </Form>
</template>
