package com.qf.portal.web;

import com.qf.common.util.PropKit;
import com.qf.portal.pojo.po.Picurl;
import com.qf.portal.service.PicUrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class PictureUrlAction {
        @Autowired
    PicUrlService picUrlService;
        @GetMapping("/index")
        public String showPic(Model model){
            String id = PropKit.use("page.properties").get("id");
            List<Picurl> list = picUrlService.listUrlById(id);
//            test for list
//            System.out.println(list);
            model.addAttribute("list", list);
            return "index";
        }

    @GetMapping("/{page}")
    public String page(@PathVariable String page) {
        return page;
    }
}
