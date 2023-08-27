#!/usr/bin/python
# -*- coding: utf-8 -*-
# @version        : 1.0
# @Create Time    : 2022/2/24 17:02
# @File           : views.py
# @IDE            : PyCharm
# @desc           : 简要说明

from fastapi import APIRouter, Depends
from utils.response import SuccessResponse
from . import schemas, crud
from core.dependencies import IdList
from apps.vadmin.auth.utils.current import FullAdminAuth
from apps.vadmin.auth.utils.validation.auth import Auth
from .params import KeysParams


app = APIRouter()


###########################################################
#    高德key管理
###########################################################
@app.get("/keys", summary="获取高德key列表")
async def get_keys(
        params: KeysParams = Depends(),
        auth: Auth = Depends(FullAdminAuth())
):
    datas = await crud.KeysDal(auth.db).get_datas(**params.dict())
    count = await crud.KeysDal(auth.db).get_count(**params.to_count())
    return SuccessResponse(datas, count=count)


@app.post("/keys", summary="创建高德key")
async def create_key(data: schemas.Keys, auth: Auth = Depends(FullAdminAuth())):
    data.poi_search_residual_number = data.poi_search_number
    return SuccessResponse(await crud.KeysDal(auth.db).create_data(data=data))


@app.delete("/keys", summary="批量删除高德key", description="软删除")
async def delete_keys(ids: IdList = Depends(), auth: Auth = Depends(FullAdminAuth())):
    await crud.KeysDal(auth.db).delete_datas(ids=ids.ids, v_soft=True, is_active=False)
    return SuccessResponse("删除成功")


@app.put("/keys/{data_id}", summary="更新高德key信息")
async def put_key(
        data_id: int,
        data: schemas.Keys,
        auth: Auth = Depends(FullAdminAuth())
):
    return SuccessResponse(await crud.KeysDal(auth.db).put_data(data_id, data))


@app.get("/keys/{data_id}", summary="获取高德key信息")
async def get_key(
        data_id: int,
        auth: Auth = Depends(FullAdminAuth())
):
    return SuccessResponse(await crud.KeysDal(auth.db).get_data(data_id, v_schema=schemas.KeysSimpleOut))


###########################################################
#    高德请求管理
###########################################################
@app.post("/search/poi/2/0", summary="搜索 POI 2.0版本")
async def create_key(adcode: str, poi: str, page: int, auth: Auth = Depends(FullAdminAuth())):
    datas, count = await crud.POIDal(auth.db).search_poi(adcode, poi, page, auth.user)
    return SuccessResponse(datas, count=count)


@app.post("/export/poi/data/to/excel", summary="导出类别所有数据到Excel（每25条数据消耗一次）")
async def create_key(adcode: str, poi: str, auth: Auth = Depends(FullAdminAuth())):
    return SuccessResponse(await crud.POIDal(auth.db).export_poi_data_to_excel(adcode, poi, auth.user))
