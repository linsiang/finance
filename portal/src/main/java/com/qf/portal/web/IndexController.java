package com.qf.portal.web;

import com.qf.portal.pojo.po.NormalUser;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
public class IndexController {
      @GetMapping("/{path}")
       public String path(@PathVariable String path)  {
          return path;
      }
    @PostMapping("/test")
    @ResponseBody
    public String test(String author){
        System.out.println("author="+author);
        return author;
    }
     @GetMapping("/addUser")
     public String addUser( HttpSession session){
         NormalUser user = new NormalUser();
         user.setPwd("123456");
         user.setUname("夏小雨");

         //w我们直接把user对象放到我们的session域里面,这样,我们无论在哪都可以得到这个user对象,就可以显示登录的状态了.
         session.setAttribute("user",user);
        // model.addAttribute("user",user);
         return "index";
     }
     @GetMapping("/loginout")
    public String loginOut(HttpSession session){
          session.invalidate();
          return "index";
     }

}
