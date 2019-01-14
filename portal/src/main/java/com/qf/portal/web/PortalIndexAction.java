package com.qf.portal.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class PortalIndexAction {
    @GetMapping("/{path}")
    public String toPath(@PathVariable String path){
        return path;
    }

}
