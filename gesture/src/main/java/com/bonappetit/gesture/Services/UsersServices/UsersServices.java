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

        if(email.isEmpty() || pswd.isEmpty()){
            System.out.println("campos f");
        }
        else {
            User search = userRepository.findByEmailAndPswd(email,pswd);
            if(search == null){
                System.out.println("no salio");
            }

            else {
                System.out.println("salio");
                return new User(search.getId(),search.getRole());

            }



        }

        return null;



    }


}
