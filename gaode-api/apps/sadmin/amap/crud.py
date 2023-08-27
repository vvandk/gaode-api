#!/usr/bin/python
# -*- coding: utf-8 -*-
# @version        : 1.0
# @Create Time    : 2022/2/24 10:21
# @File           : crud.py
# @IDE            : PyCharm
# @desc           : 增删改查
import re

from core.crud import DalBase
from sqlalchemy.ext.asyncio import AsyncSession
import requests
from core.exception import CustomException
from utils.excel.excel_manage import ExcelManage
from . import models, schemas


class KeysDal(DalBase):

    def __init__(self, db: AsyncSession):
        super(KeysDal, self).__init__(db, models.SadminAMapKeys, schemas.KeysSimpleOut)


class POIDal(DalBase):

    CITY_LIMIT = 'true'  # 仅返回指定城市数据
    PAGE_SIZE = 25  # 每页数据
    SHOW_FIELDS = "children,business,indoor,photos"  # 返回的字段
    API = "https://restapi.amap.com/v5/place/text"

    def __init__(self, db: AsyncSession):
        super(POIDal, self).__init__(db, models.SadminAMapPOI, schemas.POISimpleOut)

    async def export_poi_data_to_excel(self, adcode: str, poi: str, user):
        """
        导出类别所有数据到Excel（每25条数据消耗一次）
        """
        key_objs = await KeysDal(self.db).get_datas(
            is_active=True,
            poi_search_residual_number=(">", 0),
            v_return_objs=True
        )
        if not key_objs:
            raise CustomException("无可用的key，正在维护中，请稍等！")
        key_objs = iter(key_objs)
        if user.poi_search_restrict_method == '0':
            restrict_search_number = user.poi_search_residual_day_number
        elif user.poi_search_restrict_method == '1':
            restrict_search_number = user.poi_search_residual_total_number
        elif user.poi_search_restrict_method == '2':
            restrict_search_number = 9999
        else:
            raise CustomException("POI搜索限制方式错误！")
        if restrict_search_number < 1:
            raise CustomException("POI搜索次数不足！")

        params = {
            "key": '',
            "region": adcode,
            "types": poi,
            "city_limit": self.CITY_LIMIT,
            "page_size": self.PAGE_SIZE,
            "page_num": 0,
            "show_fields": self.SHOW_FIELDS
        }
        key_obj = next(key_objs)
        search_number = 0  # 本次使用了查询次数
        result = []
        count = 0
        for i in range(0, restrict_search_number):
            params['key'] = key_obj.key
            params['page_num'] = params['page_num'] + 1
            response = requests.get(self.API, params)
            response_json = response.json()
            if response_json["status"] == '0':
                print(response_json)
                print("请求失败", response_json["info"])
                try:
                    # 获得下一个值:
                    key_obj = next(key_objs)
                except StopIteration:
                    break
            else:
                search_number += 1
                count = count + int(response_json["count"])
                pois = response_json["pois"]
                for item in pois:
                    tel = str(item["business"].get("tel", ""))
                    regex = r'1(3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8[0-9]|9[0-9])\d{8}'
                    if not tel or not re.match(regex, tel):
                        continue
                    result.append(
                        [
                            item["name"],
                            str(item["business"].get("tel", "")),
                            str(item["business"].get("rating", "")),
                            item["pname"] + item["cityname"] + item["adname"] + str(item["address"]),
                            item["type"],
                            str(item.get("photos", []))
                        ]
                    )

                if int(response_json["count"]) < 25:
                    break

                key_obj.poi_search_residual_number = key_obj.poi_search_residual_number - 1
                await self.flush()
                if key_obj.poi_search_residual_number < 1:
                    try:
                        # 获得下一个值:
                        key_obj = next(key_objs)
                    except StopIteration:
                        break
        if count > 0 and result:
            em = ExcelManage()
            em.create_excel("高德商户")
            em.write_list(result, ["店铺名称", "电话号", "评分", "地址", "经营类型", "门店信息"])
            file_url = em.save_excel()
            em.close()
            await user.reduce_poi_search_number(self.db, search_number)
            return {"url": file_url, "filename": "高德商户.xlsx"}
        else:
            raise CustomException("无结果数据！")

    async def search_poi(self, adcode: str, poi: str, page: int, user):
        """
        搜索 POI
        """
        key_obj = await KeysDal(self.db).get_data(
            is_active=True, poi_search_residual_number=(">", 0), v_return_none=True
        )
        if not key_obj:
            raise CustomException("无可用的key，正在维护中，请稍等！")
        await user.reduce_poi_search_number(self.db, 1)
        params = {
            "key": key_obj.key,
            "region": adcode,
            "types": poi,
            "city_limit": self.CITY_LIMIT,
            "page_size": self.PAGE_SIZE,
            "page_num": page,
            "show_fields": self.SHOW_FIELDS
        }
        response = requests.get(self.API, params)
        response_json = response.json()
        is_success = False
        result = []
        count = 0
        if response_json["status"] == '0':
            print(response_json)
            print("请求失败", response_json["info"])
        else:
            is_success = True
            count = int(response_json["count"])
            if count == 25:
                count = count * page + 1
            else:
                count = 25 * (page - 1) + count
            pois = response_json["pois"]

            for item in pois:
                result.append(
                    {
                        "name": item["name"],
                        "tel": str(item["business"].get("tel", "")),
                        "rating": str(item["business"].get("rating", "")),
                        "address": item["pname"] + item["cityname"] + item["adname"] + str(item["address"]),
                        "type": item["type"],
                        "photos": str(item.get("photos", []))
                    }
                )

            key_obj.poi_search_residual_number = key_obj.poi_search_residual_number - 1
            await self.flush()

        data = schemas.POI(
            key_record=key_obj.key,
            adcode=adcode,
            poi=poi,
            is_success=is_success,
            create_user_id=user.id,
            key_id=key_obj.id
        )
        await self.create_data(data)
        return result, count
