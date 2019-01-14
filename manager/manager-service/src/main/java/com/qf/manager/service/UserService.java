package com.qf.manager.service;

import com.qf.manager.pojo.dto.PageRequest;

import java.util.List;
import java.util.Map;

public interface UserService {

    Map<String,Object> listUsersJson(PageRequest pageRequest);

    Integer batchDeleteUsers(List<Long> ids);
}
