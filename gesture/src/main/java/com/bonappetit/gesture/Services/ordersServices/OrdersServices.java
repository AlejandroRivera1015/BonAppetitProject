package com.bonappetit.gesture.Services.ordersServices;

import com.bonappetit.gesture.DTO.Kitchen.KitchenOrderDTO;
import com.bonappetit.gesture.DTO.Kitchen.KitchenServiceDTO;
import com.bonappetit.gesture.DTO.ServiceOrderDTO.ServiceOrderDTO;
import com.bonappetit.gesture.Models.Order.ServiceOrder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrdersServices {

    public void saveTableOrder(ServiceOrder order);

    public List<ServiceOrderDTO> getTableOrders(Integer tableId);

    public double getTableBill(Integer tableId);


    public List<KitchenServiceDTO> getKitchenOrders(Integer tableId);

    public boolean updateOrderStatus(KitchenOrderDTO kitchenOrderUpdate);

}