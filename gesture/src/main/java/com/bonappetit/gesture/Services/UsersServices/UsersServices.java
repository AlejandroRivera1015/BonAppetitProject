package com.bonappetit.gesture.Services.UsersServices;

import com.bonappetit.gesture.Models.User.User;
import com.bonappetit.gesture.Repositories.UsersRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersServices {
    @Autowired
    public UsersRepositories userRepository;

    public User loginService(String email, String pswd){
       User userCredentials  = userRepository.findByEmailAndPswd(email,pswd);
        return new User(userCredentials.getId(),userCredentials.getRole());
    }


}
