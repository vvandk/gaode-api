#!/usr/bin/python
# -*- coding: utf-8 -*-
# @version        : 1.0
# @Create Time    : 2023/8/10 14:16
# @File           : keys.py
# @IDE            : PyCharm
# @desc           : 关于key的常见问题：https://lbs.amap.com/faq/quota-key/key

from sqlalchemy.orm import mapped_column, Mapped
from db.db_base import BaseModel
from sqlalchemy import String, Boolean, Integer, Text


class SadminAMapKeys(BaseModel):
    __tablename__ = "sadmin_amap_keys"
    __table_args__ = ({'comment': '高德地图可用key统计表'})

    username: Mapped[str | None] = mapped_column(String(255), nullable=True, comment="用户名")
    password: Mapped[str | None] = mapped_column(String(255), nullable=True, comment="密码")
    key: Mapped[str] = mapped_column(String(255), nullable=False, comment="key")
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, comment="是否可用")
    is_auth: Mapped[bool] = mapped_column(Boolean, default=False, comment="是否已认证")
    auth_method: Mapped[str | None] = mapped_column(String(8), comment="认证方式")

    poi_search_number: Mapped[int] = mapped_column(Integer, nullable=False, comment="POI搜索次数限制/日")
    poi_search_residual_number: Mapped[int] = mapped_column(Integer, nullable=False, comment="剩余POI搜索次数限制/日")

    desc: Mapped[str | None] = mapped_column(Text, comment="描述")
