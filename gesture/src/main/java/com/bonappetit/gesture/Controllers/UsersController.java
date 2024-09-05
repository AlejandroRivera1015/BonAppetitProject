package com.bonappetit.gesture.Controllers;

import com.bonappetit.gesture.Models.User.User;
import com.bonappetit.gesture.Services.UsersServices.UsersServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    public UsersServices usersServices;
    @CrossOrigin(origins = "http://localhost:5173")

    @PostMapping
    @ResponseBody
    public User logInPetition(@RequestBody User user) {
    return usersServices.loginService(user.getEmail(),user.getPswd());
    }


}

