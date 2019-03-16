package com.qf.common.dto;

public class Message {
     private int id;
     private String mname;
     private String location;
     private String mdesc;

    public Message() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMname() {
        return mname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getMdesc() {
        return mdesc;
    }

    public void setMdesc(String mdesc) {
        this.mdesc = mdesc;
    }

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", mname='" + mname + '\'' +
                ", location='" + location + '\'' +
                ", mdesc='" + mdesc + '\'' +
                '}';
    }
}
