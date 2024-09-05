package com.BonAppetit.restaurantGesture.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import  com.BonAppetit.restaurantGesture.Models.Order.Item;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemsRepository extends JpaRepository<Item,Integer> {
    List<Item> findByItemState(boolean state);
}
