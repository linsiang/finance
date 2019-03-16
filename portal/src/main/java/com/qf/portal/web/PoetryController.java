package com.qf.portal.web;


import com.qf.portal.pojo.po.NormalUser;
import com.qf.portal.service.PortalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller

public class PoetryController {

    @Autowired
        PortalService portalService;

     @GetMapping("/toRegister")
           public String toRegister(){
           return "toRegister";
     }



    @ResponseBody
    @PostMapping("/tologin")
    public String tologin(String uname,String pwd, HttpSession session ){
        NormalUser user = new NormalUser();
        user.setUname(uname);
        user.setPwd(pwd);
        NormalUser user1 =null;
        user1=portalService.checkUser(user);

        System.out.println(user1);
        if(user1 ==null){

            return "error";

      /*

       注册时候用的检测代码

       int flag =-1;

            flag = portalService.adduser(user);

            if(flag==1){
                return "ok";
            }else{
                return "error";
            }
*/
        }else{
            //找到了,登录成功!!!
            //把他放到我们的session域中,前端页面显示姓名用
            session.setAttribute("user",user);

            return "ok";
        }
     }
     @ResponseBody
    @PostMapping("/toRegister")
    public String toRegister(NormalUser user){
         //x先在数据库里面寻找,看这个人是否已经存在了
         NormalUser normalUser=null;
         normalUser= portalService.checkUname(user);
         System.out.println(normalUser);
         if(normalUser==null){
             //l里面没有这个人,那么就可以注册
             int flag = -1;
             flag = portalService.adduser(user);
             if(flag==1){
                 //注册成功
                 return "ok";
             }else{
                 //z注册失败
                 return "error";
             }
         }else{
             //里面有这个人了,就不能够再次进行注册
             return "error";
         }
     }

}
