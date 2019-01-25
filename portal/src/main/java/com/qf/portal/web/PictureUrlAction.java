package com.qf.portal.web;

import com.qf.common.util.PropKit;
import com.qf.portal.pojo.po.Hotel;
import com.qf.portal.pojo.po.Picurl;
import com.qf.portal.service.PicUrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Controller
public class PictureUrlAction {
    @Autowired
    PicUrlService picUrlService;

    @GetMapping("/index")
    public String showPic(Model model) {
        String id = PropKit.use("page.properties").get("id");
        List<Picurl> list = picUrlService.listUrlById(id);
        System.out.println(list.size());
        model.addAttribute("list", list);
        return "index";
        //dfsfsf
    }

    @GetMapping("/testRedis")
    public String testRedis(Model model) {
        String id = PropKit.use("testRedis.properties").get("id");
        return "testRedis";
    }

    @GetMapping("details")
    public String details(String pid, Model model) {
        //System.out.println(pid);
        String cityid = pid;
        List<Hotel> list = picUrlService.ListByHotelId(cityid);
        model.addAttribute("list", list);
        return "details";
    }

    @GetMapping("/{page}")
    public String page(@PathVariable String page) {
        return page;
    }
}
