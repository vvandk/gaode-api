<script setup lang="ts">
import { Form } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { PropType, reactive, watch } from 'vue'
import { useValidator } from '@/hooks/web/useValidator'
import { schema } from './keys.data'
import { useDictStore } from '@/store/modules/dict'

const { required } = useValidator()

const props = defineProps({
  currentRow: {
    type: Object as PropType<Nullable<any>>,
    default: () => null
  }
})

const rules = reactive({
  key: [required()],
  is_active: [required()],
  is_auth: [required()],
  poi_search_number: [required()]
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

const getOptions = async () => {
  const dictStore = useDictStore()
  const dictOptions = await dictStore.getDictObj(['sys_sadmin_amap_auth_method'])
  const { setSchema } = methods
  setSchema([
    {
      field: 'auth_method',
      path: 'componentProps.options',
      value: dictOptions.sys_sadmin_amap_auth_method
    }
  ])
}

getOptions()

defineExpose({
  elFormRef,
  getFormData: methods.getFormData
})
</script>

<template>
  <Form :rules="rules" @register="register" />
</template>
