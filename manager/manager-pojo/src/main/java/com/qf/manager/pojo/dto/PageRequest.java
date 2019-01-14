package com.qf.manager.pojo.dto;

/**
 * 封装layui请求分页参数
 */
public class PageRequest {
    private Integer page;
    private Integer limit;

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }

    public Integer getOffset() {
        return (page - 1) * limit;
    }
}
