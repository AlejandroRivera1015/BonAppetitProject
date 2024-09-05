package com.bonappetit.gesture.Repositories;

import com.bonappetit.gesture.Models.Table.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface TableRepository extends JpaRepository<RestaurantTable,Integer> {

    ArrayList<RestaurantTable> findAll();
    ArrayList<RestaurantTable> findByStatus(boolean status);


}
