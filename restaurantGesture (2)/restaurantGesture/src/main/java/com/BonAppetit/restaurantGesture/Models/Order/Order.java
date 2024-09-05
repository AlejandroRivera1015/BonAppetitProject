package com.BonAppetit.restaurantGesture.Models.Order;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.ArrayList;


@AllArgsConstructor
@NoArgsConstructor
public class Order {
    private String id;
    private String status;
    private ArrayList<ItemOrderObj> items = new ArrayList<>();
    private int table;


    public  Order(ArrayList<ItemOrderObj> items, int table){
        this.items=items;

    }

}
