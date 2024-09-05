/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.BonAppetit.restaurantGesture.Models.Table;

import com.BonAppetit.restaurantGesture.Models.Order.Order;
import java.util.ArrayList;

/**
 *
 * @author arive
 */
public class Table {
    
    private int id;
    private boolean occupied;
    private boolean ispaid = false;
    public int seats;
    
    
    private double bill = 0;
    private ArrayList<Order> orders = new ArrayList<>();
    
    
    
    
    public Table(){}
    
    public Table(int seats){this.seats = seats;}
    
    
    public double getBill(){
        return this.bill;
    }
    public void setBill(double bill){
        if(bill > 0){
               this.bill +=  bill;
        }
     
    }
    
    
    

    
    
    public static void main(String[] args) {
        System.out.println("");
        Table tab = new Table();
      
    }
    
    
}
