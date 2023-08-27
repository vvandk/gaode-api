import { FormSchema } from '@/types/form'
import { TableColumn } from '@/types/table'
import { reactive } from 'vue'

export const columns = reactive<TableColumn[]>([
  {
    field: 'id',
    label: '编号',
    show: true,
    disabled: false,
    width: '120px',
    span: 24
  },
  {
    field: 'key',
    label: 'key',
    width: '200px',
    show: true,
    disabled: true,
    span: 24
  },
  {
    field: 'username',
    label: '用户名',
    show: true,
    span: 24
  },
  {
    field: 'password',
    label: '密码',
    show: false,
    width: '100px',
    span: 24
  },
  {
    field: 'is_active',
    label: '是否可见',
    show: true,
    minWidth: '120px',
    span: 24
  },
  {
    field: 'is_auth',
    label: '是否已认证',
    show: true,
    minWidth: '120px',
    span: 24
  },
  {
    field: 'auth_method',
    label: '认证方式',
    show: true,
    minWidth: '120px',
    span: 24
  },
  {
    field: 'poi_search_number',
    label: 'POI次数/日',
    show: true,
    minWidth: '150px',
    span: 24
  },
  {
    field: 'poi_search_residual_number',
    label: '剩余POI次数/日',
    show: true,
    minWidth: '150px',
    span: 24
  },
  {
    field: 'create_datetime',
    label: '创建时间',
    show: true,
    width: '200px',
    span: 24
  },
  {
    field: 'action',
    label: '操作',
    show: true,
    disabled: false,
    width: '100px',
    span: 24
  }
])

export const schema = reactive<FormSchema[]>([
  {
    field: 'key',
    label: 'key',
    component: 'Input',
    colProps: {
      span: 24
    },
    componentProps: {
      style: {
        width: '100%'
      }
    }
  },
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    colProps: {
      span: 12
    },
    componentProps: {
      style: {
        width: '100%'
      }
    }
  },
  {
    field: 'password',
    label: '密码',
    component: 'Input',
    colProps: {
      span: 12
    },
    componentProps: {
      style: {
        width: '100%'
      }
    }
  },
  {
    field: 'is_active',
    label: '是否可用',
    colProps: {
      span: 12
    },
    component: 'Radio',
    componentProps: {
      style: {
        width: '100%'
      },
      options: [
        {
          label: '可用',
          value: true
        },
        {
          label: '停用',
          value: false
        }
      ]
    },
    value: true
  },
  {
    field: 'is_auth',
    label: '是否认证',
    colProps: {
      span: 12
    },
    component: 'Radio',
    componentProps: {
      style: {
        width: '100%'
      },
      options: [
        {
          label: '已认证',
          value: true
        },
        {
          label: '未认证',
          value: false
        }
      ]
    },
    value: true
  },
  {
    field: 'auth_method',
    label: '认证方式',
    component: 'Select',
    colProps: {
      span: 12
    },
    componentProps: {
      style: {
        width: '100%'
      }
    }
  },
  {
    field: 'poi_search_number',
    label: 'POI次数/天',
    component: 'InputNumber',
    colProps: {
      span: 12
    },
    componentProps: {
      style: {
        width: '100%'
      }
    }
  },
  {
    field: 'desc',
    label: '描述',
    colProps: {
      span: 12
    },
    component: 'Input'
  }
])

export const searchSchema = reactive<FormSchema[]>([])
