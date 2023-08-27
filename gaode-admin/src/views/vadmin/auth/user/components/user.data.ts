import { FormSchema } from '@/types/form'
import { TableColumn } from '@/types/table'
import { reactive } from 'vue'

export const columns = reactive<TableColumn[]>([
  {
    field: 'id',
    label: '编号',
    width: '90px',
    show: true,
    disabled: false
  },
  {
    field: 'name',
    label: '姓名',
    show: true,
    disabled: true
  },
  {
    field: 'nickname',
    label: '昵称',
    show: false
  },
  {
    field: 'telephone',
    label: '手机号',
    show: true,
    disabled: true
  },
  {
    field: 'poi_search_restrict_method',
    label: 'POI限制方式',
    show: true,
    disabled: false
  },
  {
    field: 'poi_search_day_number',
    label: 'POI次数/日',
    show: true,
    disabled: false
  },
  {
    field: 'poi_search_residual_day_number',
    label: '剩余POI次数/日',
    show: true,
    disabled: false
  },
  {
    field: 'poi_search_total_number',
    label: 'POI总次数',
    show: true,
    disabled: false
  },
  {
    field: 'poi_search_residual_total_number',
    label: '剩余POI总次数',
    show: true,
    disabled: false
  },
  {
    field: 'email',
    label: '邮箱',
    show: false,
    disabled: false
  },
  {
    field: 'gender',
    label: '性别',
    show: false
  },
  {
    field: 'is_active',
    label: '是否可用',
    show: true
  },
  {
    field: 'is_staff',
    label: '工作人员',
    show: true
  },
  {
    field: 'last_login',
    label: '最近登录时间',
    show: true,
    width: '190px'
  },
  {
    field: 'create_datetime',
    label: '创建时间',
    width: '190px',
    show: false
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
    field: 'name',
    label: '用户名称',
    colProps: {
      span: 12
    },
    component: 'Input',
    componentProps: {
      style: {
        width: '100%'
      }
    }
  },
  {
    field: 'nickname',
    label: '用户昵称',
    colProps: {
      span: 12
    },
    component: 'Input',
    componentProps: {
      style: {
        width: '100%'
      }
    }
  },
  {
    field: 'telephone',
    label: '手机号码',
    colProps: {
      span: 12
    },
    component: 'Input',
    componentProps: {
      style: {
        width: '100%'
      }
    }
  },
  {
    field: 'email',
    label: '邮箱',
    colProps: {
      span: 12
    },
    component: 'Input',
    componentProps: {
      style: {
        width: '100%'
      }
    }
  },
  {
    field: 'gender',
    label: '性别',
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
          label: '男',
          value: '0'
        },
        {
          label: '女',
          value: '1'
        }
      ]
    },
    value: '0'
  },
  {
    field: '',
    label: '默认密码',
    colProps: {
      span: 12
    },
    component: 'Text',
    componentProps: {
      style: {
        width: '100%'
      }
    },
    value: '手机号后六位',
    ifshow: (values) => values.id === undefined
  },
  {
    field: 'is_staff',
    label: '工作人员',
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
          label: '是',
          value: true
        },
        {
          label: '否',
          value: false
        }
      ]
    },
    value: true
  },
  {
    field: 'is_active',
    label: '状态',
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
          label: '正常',
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
    field: 'poi_search_restrict_method',
    label: 'POI限制方式',
    colProps: {
      span: 12
    },
    component: 'Select',
    componentProps: {
      style: {
        width: '100%'
      }
    },
    value: '0'
  },
  {
    field: 'poi_search_day_number',
    label: 'POI次数/天',
    component: 'InputNumber',
    colProps: {
      span: 12
    },
    componentProps: {
      style: {
        width: '100%'
      }
    },
    value: 0,
    ifshow: (values) => values.poi_search_restrict_method === '0'
  },
  {
    field: 'poi_search_total_number',
    label: 'POI总次数',
    component: 'InputNumber',
    colProps: {
      span: 12
    },
    componentProps: {
      style: {
        width: '100%'
      }
    },
    value: 0,
    ifshow: (values) => values.poi_search_restrict_method === '1'
  },
  {
    field: 'role_ids',
    label: '角色',
    colProps: {
      span: 24
    },
    component: 'Select',
    componentProps: {
      style: {
        width: '100%'
      },
      optionsAlias: {
        labelField: 'name',
        valueField: 'id'
      },
      multiple: true,
      collapseTags: true
    },
    value: [],
    ifshow: (values) => values.is_staff
  }
])

export const searchSchema = reactive<FormSchema[]>([
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    componentProps: {
      clearable: false,
      style: {
        width: '214px'
      }
    },
    formItemProps: {
      labelWidth: '47px'
    }
  },
  {
    field: 'telephone',
    label: '手机号',
    component: 'Input',
    componentProps: {
      clearable: false,
      style: {
        width: '214px'
      }
    }
  },
  {
    field: 'is_active',
    label: '状态',
    component: 'Select',
    componentProps: {
      style: {
        width: '214px'
      },
      options: [
        {
          label: '正常',
          value: true
        },
        {
          label: '停用',
          value: false
        }
      ]
    }
  },
  {
    field: 'is_staff',
    label: '工作人员',
    component: 'Select',
    componentProps: {
      style: {
        width: '214px'
      },
      options: [
        {
          label: '是',
          value: true
        },
        {
          label: '否',
          value: false
        }
      ]
    }
  }
])
