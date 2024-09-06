package com.bonappetit.gesture.Repositories.OrderItemsRepository;

import com.bonappetit.gesture.Models.Order.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.relational.core.sql.In;

import java.util.List;

public interface OrderItemsRepository extends JpaRepository<OrderItem,Integer> {

        @Query("SELECT s.id, i FROM OrderItem i JOIN FETCH i.serviceOrder s WHERE s.tableId = :tableId ")
        List<Object[]>  getOrder (Integer tableId);

        @Query("SELECT i.itemId, i.itemPrice, i.amount, i.requestStatus FROM OrderItem i JOIN i.serviceOrder s WHERE s.tableId = :tableId")
        List<Object[]> getItemsPrices(Integer tableId);

        @Query("SELECT s.id, i FROM OrderItem i JOIN FETCH i.serviceOrder s WHERE s.tableId = :tableId")
        List<Object[]> getTableRequests(Integer tableId);

}
