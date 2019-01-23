package com.qf.manager.web;


import com.qf.common.fdfs.FastDFSFile;
import com.qf.common.fdfs.FastDFSUtils;
import com.qf.common.util.PropKit;
import com.qf.manager.dao.ShowPicMapper;


import com.qf.manager.pojo.po.showPic;
import org.apache.commons.lang3.StringUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ManagerIndexAction {
    @Autowired
    private ShowPicMapper showPicMapper;
    @ResponseBody
    @PostMapping("/upload")
    public Map<String,Object> upLoadPic(@RequestParam("file") MultipartFile file){
        Map<String,Object> map = new HashMap();
        try{
        FastDFSFile fastDFSFile = new FastDFSFile(file.getBytes(),file.getOriginalFilename(),file.getSize());
        String basePath = PropKit.use("fdfs_client.conf").get("fdfs_server");
       String shortName = FastDFSUtils.uploadFile(fastDFSFile);
       if(StringUtils.isNotBlank(shortName)){
           map.put("code",0);
           map.put("msg","success");
           Map<String,Object> date = new HashMap();
           date.put("src",basePath+"/"+shortName);
           String psrc=basePath+"/"+shortName;
           showPicMapper.addPsrc(psrc);
          // System.out.println(basePath+"/"+shortName);
           map.put("data",date);

       }else{
           map.put("code",1);

       }
        }catch (IOException e){
            map.put("code",1);

            e.printStackTrace();
        }catch(RuntimeException e){
            map.put("code",1);
            e.printStackTrace();
        }

        return map;
    }

    @GetMapping("/showPicture")
    public String showpic(Model model){
        List<showPic> picList =  showPicMapper.fondUrl();
        model.addAttribute("picList",picList);
        return "showPic" ;
    }


    @GetMapping("/{path}")
    public String path(@PathVariable String path){
        return path;
    }
}
