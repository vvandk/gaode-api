#!/usr/bin/python
# -*- coding: utf-8 -*-
# @version        : 1.0
# @Create Time    : 2021/10/18 22:19
# @File           : poi.py
# @IDE            : PyCharm
# @desc           : pydantic 模型，用于数据库序列化操作


from pydantic import BaseModel, ConfigDict
from core.data_types import DatetimeStr


class POI(BaseModel):
    key_record: str | None = None
    adcode: str | None = None
    poi: str | None = None
    is_success: bool | None = None

    create_user_id: int
    key_id: int


class POISimpleOut(POI):
    model_config = ConfigDict(from_attributes=True)

    id: int
    create_datetime: DatetimeStr
    update_datetime: DatetimeStr


class SearchPOIResult(BaseModel):
    name: str | None = None
    tel: str | None = None
    rating: str | None = None
    address: str | None = None
    type: str | None = None
    photos: str | None = None
