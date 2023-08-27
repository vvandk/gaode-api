import request from '@/config/axios'

export const getKeysListApi = (params: any): Promise<IResponse> => {
  return request.get({ url: '/sadmin/amap/keys', params })
}

export const addKeysListApi = (data: any): Promise<IResponse> => {
  return request.post({ url: '/sadmin/amap/keys', data })
}

export const delKeysListApi = (data: any): Promise<IResponse> => {
  return request.delete({ url: '/sadmin/amap/keys', data })
}

export const putKeysListApi = (data: any): Promise<IResponse> => {
  return request.put({ url: `/sadmin/amap/keys/${data.id}`, data })
}

export const getKeysApi = (dataId: number): Promise<IResponse> => {
  return request.get({ url: `/sadmin/amap/keys/${dataId}` })
}
