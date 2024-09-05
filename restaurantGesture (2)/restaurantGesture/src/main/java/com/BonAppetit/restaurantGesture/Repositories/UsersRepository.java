package com.BonAppetit.restaurantGesture.Repositories;


import com.BonAppetit.restaurantGesture.Models.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UsersRepository extends JpaRepository<User,Integer> {

 User findByEmailAndPswd(String email,String pswd);


}
