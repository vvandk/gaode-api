import { FormSchema } from '@/types/form'
import { TableColumn } from '@/types/table'
import { reactive } from 'vue'

export const columns = reactive<TableColumn[]>([
  {
    type: 'index',
    field: 'index',
    label: '',
    show: true,
    disabled: false,
    span: 24
  },
  {
    field: 'name',
    label: '店铺名称',
    show: true,
    disabled: true,
    span: 24
  },
  {
    field: 'tel',
    label: '电话号',
    show: true,
    span: 24
  },
  {
    field: 'rating',
    label: '评分',
    show: false,
    width: '100px',
    span: 24
  },
  {
    field: 'address',
    label: '地址',
    show: true,
    minWidth: '120px',
    span: 24
  },
  {
    field: 'type',
    label: '经营类型',
    show: true,
    minWidth: '120px',
    span: 24
  },
  {
    field: 'photos',
    label: '门店信息',
    show: true,
    minWidth: '120px',
    span: 24
  }
])

export const searchSchema = reactive<FormSchema[]>([
  {
    field: 'adcode',
    label: '市县名称',
    component: 'SelectV2',
    componentProps: {
      filterable: true,
      options: [],
      style: {
        width: '300px'
      },
      placeholder: '请选择市县名称，也可以直接输入筛选'
    }
  },
  {
    field: 'poi',
    label: '类别',
    component: 'SelectV2',
    componentProps: {
      filterable: true,
      options: [],
      style: {
        width: '300px'
      },
      placeholder: '请选择类别，也可以直接输入筛选'
    }
  }
])

export const excelColumns = reactive<Recordable[]>([
  {
    key: 'name',
    title: '店铺名称',
    type: 'text'
  },
  {
    key: 'tel',
    title: '电话号',
    type: 'text'
  },
  {
    key: 'rating',
    title: '评分',
    type: 'text'
  },
  {
    key: 'address',
    title: '地址',
    type: 'text'
  },
  {
    key: 'type',
    title: '经营类型',
    type: 'text'
  },
  {
    key: 'photos',
    title: '门店信息',
    type: 'text'
  }
])
