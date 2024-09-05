/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.BonAppetit.restaurantGesture.Models.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Column;


import java.util.ArrayList;

/**
 *
 * @author arive
 */

import com.BonAppetit.restaurantGesture.Models.Order.Order;
import jakarta.persistence.GenerationType;


@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class User {    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "email")
    private String email;
    @Column(name = "pswd")
    private String pswd;
    @Column(name = "orders")
    private ArrayList<Order> orders = new ArrayList<>();
    @Column(name = "state")
    private char state ;
    @Column(name = "role")
    private String role;
    @Column(name = "token")
    private String token;
    



    public User(int ID, String role, ArrayList<Order> orders, String token) {
        this.ID = ID;
        this.role = role;
        this.orders = orders;
        this.token=token;

    }
}
