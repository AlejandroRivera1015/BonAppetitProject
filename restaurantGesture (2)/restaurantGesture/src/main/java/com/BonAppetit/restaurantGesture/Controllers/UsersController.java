/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.BonAppetit.restaurantGesture.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.BonAppetit.restaurantGesture.Models.User.User;
import com.BonAppetit.restaurantGesture.Services.UserServices;

/**
 *
 * @author arive
 */


@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    UserServices userServices;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    @ResponseBody




    @GetMapping
    public String sayHi(){
        System.out.println("holaaaxd");
        return "holaaaaaaaaaa";
    }

    
}
