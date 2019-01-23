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

import java.util.ArrayList;
import java.util.List;

@Controller
public class PictureUrlAction {
    @Autowired
    PicUrlService picUrlService;

    @GetMapping("/index")
    public String showPic(Model model) {
        String id = PropKit.use("page.properties").get("id");

        List<Picurl> list = picUrlService.listUrlById(id);

//        id = PropKit.use("page.properties").get("id2");
//        System.out.println(id);
//        int num = Integer.parseInt(id);
//        List<Picurl> list1 = new ArrayList<>();
//        for (int i = 0; i < num; i++) {
//            list1.add(list.get(i));
//        }
//        id = PropKit.use("page.properties").get("id3");
//        num = Integer.parseInt(id);
//        List<Picurl> list2 = new ArrayList<>();
//        for (int i = num-4; i < num; i++) {
//            list2.add(list.get(i));
//        }
//        id = PropKit.use("page.properties").get("id4");
//        num = Integer.parseInt(id);
//        List<Picurl> list3 = new ArrayList<>();
//        for (int i = num-4; i < num; i++) {
//            list3.add(list.get(i));
//        }
//        id = PropKit.use("page.properties").get("id5");
//        num = Integer.parseInt(id);
//        List<Picurl> list4 = new ArrayList<>();
//        for (int i = num-4; i < num; i++) {
//            list4.add(list.get(i));
//        }
//        id = PropKit.use("page.properties").get("id6");
//        num = Integer.parseInt(id);
//        List<Picurl> list5 = new ArrayList<>();
//        for (int i = num-4; i < num; i++) {
//            list5.add(list.get(i));
//        }
//        id = PropKit.use("page.properties").get("id7");
//        num = Integer.parseInt(id);
//        List<Picurl> list6 = new ArrayList<>();
//        for (int i = num-4; i < num; i++) {
//            list6.add(list.get(i));
//        }
//        id = PropKit.use("page.properties").get("id8");
//        num = Integer.parseInt(id);
//        List<Picurl> list7 = new ArrayList<>();
//        for (int i = num-4; i < num; i++) {
//            list7.add(list.get(i));
//        }
//



        System.out.println(list.size());
       model.addAttribute("list", list);
//        model.addAttribute("list1", list1);
//        model.addAttribute("list2", list2);
//        model.addAttribute("list3", list3);
//        model.addAttribute("list4", list4);
//        model.addAttribute("list5", list5);
//        model.addAttribute("list6", list6);
//        model.addAttribute("list6", list7);
        return "index";
    }


    @GetMapping("/{page}")
    public String page(@PathVariable String page) {
        return page;
    }
}
