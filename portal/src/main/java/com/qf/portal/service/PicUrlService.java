package com.qf.portal.service;

import com.qf.portal.pojo.po.Hotel;
import com.qf.portal.pojo.po.Picurl;

import java.util.List;

public interface PicUrlService {
      List<Picurl> listUrlById(String id);

     // List<Picurl> testListRedis(String id);

    List<Hotel> ListByHotelId(String cityid);
}
