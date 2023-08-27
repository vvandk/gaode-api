#!/usr/bin/python
# -*- coding: utf-8 -*-
# @version        : 1.0
# @Create Time    : 2023/8/10 14:16
# @File           : poi.py
# @IDE            : PyCharm
# @desc           : 关于key的常见问题：https://lbs.amap.com/faq/quota-key/key


# 流量限制问题：https://lbs.amap.com/api/webservice/guide/tools/flowlevel

from db.db_base import BaseModel
from sqlalchemy import String, Boolean, ForeignKey, Integer
from sqlalchemy.orm import relationship, mapped_column, Mapped


class SadminAMapPOI(BaseModel):
    __tablename__ = "sadmin_amap_poi"
    __table_args__ = ({'comment': '高德地图搜索POI记录'})

    adcode: Mapped[str | None] = mapped_column(String(255), nullable=True, comment="市县")
    poi: Mapped[str | None] = mapped_column(String(255), nullable=True, comment="类别")
    is_success: Mapped[bool] = mapped_column(Boolean, default=True, comment="是否成功")
    key_record: Mapped[str | None] = mapped_column(String(255), nullable=True, comment="key")

    create_user_id: Mapped[int] = mapped_column(
        Integer,
        ForeignKey("vadmin_auth_user.id", ondelete='RESTRICT'),
        comment="创建人"
    )
    create_user = relationship("VadminUser", foreign_keys=create_user_id)

    key_id: Mapped[int] = mapped_column(
        Integer,
        ForeignKey("sadmin_amap_keys.id", ondelete='RESTRICT'),
        comment="使用 key"
    )
    key = relationship("SadminAMapKeys", foreign_keys=key_id)
