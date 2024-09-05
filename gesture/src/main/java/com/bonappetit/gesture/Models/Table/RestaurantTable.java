package com.bonappetit.gesture.Models.Table;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="tables")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class RestaurantTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private boolean status;
    private int seats;

}
