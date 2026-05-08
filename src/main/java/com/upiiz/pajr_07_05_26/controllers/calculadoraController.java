package com.upiiz.pajr_07_05_26.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class calculadoraController {

    @GetMapping()
    public String calculadora(){
        return "calculadora";
    }

}
