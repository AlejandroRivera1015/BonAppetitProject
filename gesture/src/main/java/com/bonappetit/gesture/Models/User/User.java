package com.bonappetit.gesture.Models.User;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Entity
@Table (name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="email")
    private String email;

    @Column(name = "pswd")
    private String pswd;


    @Column(name = "state")
    private boolean state;

    @Column(name = "role")
    private String role;

    @Column(name="token")
    private String token;

    public User(int id, String role){
        this.id=id;
        this.role=role;
    }

    }
