package com.bonappetit.gesture.Repositories;

    import com.bonappetit.gesture.Models.User.User;
    import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepositories extends JpaRepository<User,Integer> {

    User findByEmailAndPswd(String email, String pswd);

}
