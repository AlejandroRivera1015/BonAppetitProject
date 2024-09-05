package com.bonappetit.gesture.Repositories;


import com.bonappetit.gesture.Models.Order.Item;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface ItemsRepository extends JpaRepository<Item,Integer> {

    List<Item> findByItemState(boolean state);

    @Query("SELECT i.category FROM Item i")
    ArrayList<String> getByCategory();

}
