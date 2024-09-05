package com.BonAppetit.restaurantGesture.Models.Order;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="items")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "image_url")
    private String image_url;

    @Column(name = "item_state")
    private boolean itemState;

    @Column(name = "price")
    private double price;

    @Column(name = "category")
    private String category;
    

}
