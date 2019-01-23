package com.qf.portal.dao;

import com.qf.portal.pojo.po.Picurl;
import com.qf.portal.pojo.po.PicurlExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface PicurlMapper {
    int countByExample(PicurlExample example);

    int deleteByExample(PicurlExample example);

    int deleteByPrimaryKey(Integer pid);

    int insert(Picurl record);

    int insertSelective(Picurl record);

    List<Picurl> selectByExample(PicurlExample example);

    Picurl selectByPrimaryKey(Integer pid);

    int updateByExampleSelective(@Param("record") Picurl record, @Param("example") PicurlExample example);

    int updateByExample(@Param("record") Picurl record, @Param("example") PicurlExample example);

    int updateByPrimaryKeySelective(Picurl record);

    int updateByPrimaryKey(Picurl record);

    List<Picurl> selectALL();

    List<Picurl> selectById(String id);
}