#!/usr/bin/python
# -*- coding: utf-8 -*-
# @version        : 1.0
# @Create Time    : 2021/10/18 22:19
# @File           : keys.py
# @IDE            : PyCharm
# @desc           : pydantic 模型，用于数据库序列化操作


from pydantic import BaseModel, ConfigDict
from core.data_types import DatetimeStr


class Keys(BaseModel):
    username: str | None = None
    password: str | None = None
    key: str
    is_active: bool = False
    is_auth: bool = False
    auth_method: str = None

    poi_search_number: int
    poi_search_residual_number: int | None = None

    desc: str | None = None


class KeysSimpleOut(Keys):
    model_config = ConfigDict(from_attributes=True)

    id: int
    create_datetime: DatetimeStr
    update_datetime: DatetimeStr
