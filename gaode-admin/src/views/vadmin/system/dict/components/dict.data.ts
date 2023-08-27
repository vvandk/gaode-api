import { FormSchema } from '@/types/form'
import { TableColumn } from '@/types/table'
import { ElTag } from 'element-plus'
import { h, reactive } from 'vue'

export const columns = reactive<TableColumn[]>([
  {
    field: 'id',
    label: '字典编号',
    show: true,
    disabled: true
  },
  {
    field: 'dict_name',
    label: '字典名称',
    show: true,
    disabled: true
  },
  {
    field: 'dict_type',
    label: '字典类型',
    show: true,
    disabled: true
  },
  {
    field: 'disabled',
    label: '是否禁用',
    show: true,
    formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
      return h(
        ElTag,
        {
          type: cellValue ? 'danger' : ''
        },
        () => (cellValue ? '禁用' : '启用')
      )
    }
  },
  {
    field: 'remark',
    label: '备注',
    show: true
  },
  {
    field: 'create_datetime',
    label: '创建时间',
    show: true
  },
  {
    field: 'action',
    width: '150px',
    label: '操作',
    show: true
  }
])

export const schema = reactive<FormSchema[]>([
  {
    field: 'dict_name',
    label: '字典名称',
    colProps: {
      span: 24
    },
    component: 'Input'
  },
  {
    field: 'dict_type',
    label: '字典类型',
    colProps: {
      span: 24
    },
    component: 'Input'
  },
  {
    field: 'disabled',
    label: '是否禁用',
    colProps: {
      span: 24
    },
    component: 'Radio',
    componentProps: {
      style: {
        width: '100%'
      },
      options: [
        {
          label: '启用',
          value: false
        },
        {
          label: '禁用',
          value: true
        }
      ]
    },
    value: false
  },
  {
    field: 'remark',
    label: '备注',
    colProps: {
      span: 24
    },
    component: 'Input'
  }
])

export const searchSchema = reactive<FormSchema[]>([
  {
    field: 'dict_name',
    label: '字典名称',
    colProps: {
      span: 24
    },
    component: 'Input',
    componentProps: {
      clearable: false
    }
  },
  {
    field: 'dict_type',
    label: '字典类型',
    colProps: {
      span: 24
    },
    component: 'Input',
    componentProps: {
      clearable: false
    }
  }
])
