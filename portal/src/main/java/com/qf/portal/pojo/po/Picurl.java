package com.qf.portal.pojo.po;

public class Picurl {
    private Integer pid;

    private String id;

    private String url;

    private String pdesc;

    private String price;

    private String pname;

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url == null ? null : url.trim();
    }

    public String getPdesc() {
        return pdesc;
    }

    public void setPdesc(String pdesc) {
        this.pdesc = pdesc;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price == null ? null : price.trim();
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname == null ? null : pname.trim();
    }

    @Override
    public String toString() {
        return "Picurl{" +
                "pid=" + pid +
                ", id='" + id + '\'' +
                ", url='" + url + '\'' +
                ", pdesc='" + pdesc + '\'' +
                ", price='" + price + '\'' +
                ", pname='" + pname + '\'' +
                '}';
    }
}