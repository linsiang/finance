package com.qf.portal.service;

import com.qf.portal.pojo.po.NormalUser;

public interface PortalService {


    NormalUser checkUser(NormalUser user);

    int adduser(NormalUser user);

    NormalUser checkUname(NormalUser user);
}
