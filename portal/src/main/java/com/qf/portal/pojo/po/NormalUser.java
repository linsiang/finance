package com.qf.portal.pojo.po;

public class NormalUser {
    private String uname;
    private String pwd;

    public NormalUser() {
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    @Override
    public String toString() {
        return "NormalUser{" +
                "uname='" + uname + '\'' +
                ", pwd='" + pwd + '\'' +
                '}';
    }
}
