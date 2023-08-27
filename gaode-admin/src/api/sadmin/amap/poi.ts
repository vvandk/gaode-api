import request from '@/config/axios'

export const getPOIListApi = (params: any): Promise<IResponse> => {
  return request.post({ url: '/sadmin/amap/search/poi/2/0', params })
}

export const exportPOIDataToExcelApi = (params: any): Promise<IResponse> => {
  return request.post({ url: '/sadmin/amap/export/poi/data/to/excel', params })
}
