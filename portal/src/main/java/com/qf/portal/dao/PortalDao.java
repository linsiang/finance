package com.qf.portal.dao;


import com.qf.portal.pojo.po.NormalUser;

public interface PortalDao{
    NormalUser checkUser(NormalUser user);

    int addUser(NormalUser user);

    NormalUser checkUname(NormalUser user);
}
