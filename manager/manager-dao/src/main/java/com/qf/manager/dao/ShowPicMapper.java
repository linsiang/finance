package com.qf.manager.dao;

import com.qf.manager.pojo.po.showPic;

import java.util.List;

public interface ShowPicMapper {
    void addPsrc(String psrc);

    List<showPic> fondUrl();
}

