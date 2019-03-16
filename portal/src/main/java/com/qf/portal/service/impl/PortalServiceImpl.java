package com.qf.portal.service.impl;

import com.qf.portal.dao.PortalDao;
import com.qf.portal.pojo.po.NormalUser;
import com.qf.portal.service.PortalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PortalServiceImpl implements PortalService {
     @Autowired
     PortalDao portalDao;

    @Override
    public NormalUser checkUser(NormalUser user) {
        return portalDao.checkUser(user);
    }

    @Override
    public int adduser(NormalUser user) {
        return portalDao.addUser(user);
    }

    @Override
    public NormalUser checkUname(NormalUser user) {
        return portalDao.checkUname(user);
    }
}
