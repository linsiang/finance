package com.qf.portal.dao;

import com.qf.portal.pojo.po.Hotel;
import com.qf.portal.pojo.po.HotelExample;
import java.util.List;

import com.qf.portal.pojo.po.Picurl;
import org.apache.ibatis.annotations.Param;

public interface HotelMapper {
    int countByExample(HotelExample example);

    int deleteByExample(HotelExample example);

    int insert(Hotel record);

    int insertSelective(Hotel record);

    List<Hotel> selectByExample(HotelExample example);

    int updateByExampleSelective(@Param("record") Hotel record, @Param("example") HotelExample example);

    int updateByExample(@Param("record") Hotel record, @Param("example") HotelExample example);

    List<Hotel> selectById(String cityid);
}