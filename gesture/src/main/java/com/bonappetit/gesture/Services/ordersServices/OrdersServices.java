package com.bonappetit.gesture.Services.ordersServices;

import com.bonappetit.gesture.DTO.ServiceOrderDTO.ServiceOrderDTO;
import com.bonappetit.gesture.Models.Order.OrderItem;
import com.bonappetit.gesture.Models.Order.ServiceOrder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface OrdersServices {

    public void saveTableOrder(ServiceOrder order);
    public List<ServiceOrderDTO> getTableOrders(Integer tableId);
    public double getTableBill(Integer tableId);
    public List<Object[]> getTableRequests(Integer tableId);
}