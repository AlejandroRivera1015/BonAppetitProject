package com.BonAppetit.restaurantGesture.Services;

import com.BonAppetit.restaurantGesture.Models.User.User;
import com.BonAppetit.restaurantGesture.Repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {

    @Autowired
    public UsersRepository usersRepository;

    public User logIn (String email, String pswd){
        try{
        User repositoryUser = usersRepository.findByEmailAndPswd(email,pswd);

            System.out.println("repository user"+repositoryUser);

        User frontendUser = new User(repositoryUser.getID(),repositoryUser.getRole(),repositoryUser.getOrders(),repositoryUser.getToken());
        System.out.println("nuevo user "+ frontendUser);

        return frontendUser;

        }
        catch (Exception e){
            System.out.println("login error ---->"+e);
            return null;
        }
    }
}
