package com.bonappetit.gesture.Repositories.OrdersRepositories;

import com.bonappetit.gesture.Models.Order.OrderItem;
import com.bonappetit.gesture.Models.Order.ServiceOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.List;

public interface OrdersRepositories extends JpaRepository<ServiceOrder,Integer> {

    public List<ServiceOrder> findByTableId(int tableId);


    @Query("SELECT s.id from ServiceOrder s WHERE s.tableId = :tableId")
    List<Integer>  getTableOrders(Integer tableId);

}
