package com.bonappetit.gesture.Services.ordersServices.Implementations;


import com.bonappetit.gesture.DTO.Kitchen.KitchenOrderDTO;
import com.bonappetit.gesture.DTO.Kitchen.KitchenServiceDTO;
import com.bonappetit.gesture.DTO.ServiceOrderDTO.ServiceOrderDTO;
import com.bonappetit.gesture.Models.Order.OrderItem;
import com.bonappetit.gesture.Models.Order.ServiceOrder;
import com.bonappetit.gesture.Repositories.OrderItemsRepository.OrderItemsRepository;
import com.bonappetit.gesture.Repositories.OrdersRepositories.OrdersRepositories;
import com.bonappetit.gesture.Services.ordersServices.OrdersServices;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Slf4j
@Service
public class OrdersServicesImplementation implements OrdersServices {

    @Autowired
    public OrdersRepositories orderRepository;
    @Autowired
    public OrderItemsRepository orderItemsRepository;


    @Override
    public void  saveTableOrder(ServiceOrder order){
        try {
            for(OrderItem item : order.getCart()){
                System.out.println(item);
                 item.setServiceOrder(order);
            }
            order.setStatus("waiting");
            System.out.println("-//--------->OrderIs: " + order);
            orderRepository.save(order);
        }catch (Exception e){
            System.out.println("Error saving order ->>>>"+e.getMessage());
        }

    }

    public List<ServiceOrderDTO> getTableOrders(Integer tableId){
        List<Object[]> itemsRepo =orderItemsRepository.getOrder(tableId);
        HashMap<Integer,List<OrderItem>> ordersMap = new HashMap<>();

        List<ServiceOrderDTO> orders = new ArrayList<>();
        List<OrderItem> orderItems = new ArrayList<>();

        Integer tempServiceId = 0;

        for (Object[] i : itemsRepo){
            Integer serviceOrderId = (Integer) i[0];
            OrderItem item =  (OrderItem) i[1];

            if (serviceOrderId.equals(tempServiceId) || orderItems.isEmpty()){
                orderItems.add(item);
            }
            else {
                orderItems.clear();
                orderItems.add(item);
            }
            ordersMap.put(serviceOrderId, new ArrayList<>(orderItems));
            tempServiceId = serviceOrderId;
        }

        for(Map.Entry<Integer,List<OrderItem>> order: ordersMap.entrySet())
            orders.add(new ServiceOrderDTO(order.getKey(),order.getValue()));

        return  orders;
    }

    public double getTableBill (Integer tableId){
        List<Object[]> itemsRepo = orderItemsRepository.getItemsPrices(tableId);
        Double bill = 0.0;

        for(Object[] i: itemsRepo){
            Integer itemId = (Integer) i[0];
            Double itemPrice = (Double)i[1];
            Integer itemAmount = (Integer)i[2];
            String requestStatus = (String)i[3];

            System.out.println("el i es"+i);

            if (requestStatus.equals("Completed"))
                bill += itemAmount * itemPrice;
            }
        return bill;
    }

    public List<KitchenServiceDTO> getKitchenOrders(Integer tableId){

        List<Object[]> kitchenOrders = orderItemsRepository.getTableRequests(tableId);
        HashMap<Integer,List<OrderItem>> kitchenOrdersMap = new HashMap<>();
        List<KitchenServiceDTO> kitchenOrdersList = new ArrayList<>();
        List<OrderItem> tempOrder = new ArrayList<>();
        Integer tempId = 0;

        for (Object[] order : kitchenOrders){
            Integer sId = (Integer)order[0];
            OrderItem item = (OrderItem)order[1];
            if(tempOrder.isEmpty() || tempId.equals(sId)){
                tempOrder.add(item);

            }
            else {
                tempOrder.clear();
                tempOrder.add(item);
            }

            kitchenOrdersMap.put(sId,new ArrayList<>(tempOrder));
            tempId = sId;


        }

        for (Map.Entry<Integer,List<OrderItem>> order: kitchenOrdersMap.entrySet()){
            kitchenOrdersList.add(new KitchenServiceDTO(order.getKey(),order.getValue()));

        }

        return kitchenOrdersList;



    }
    @Transactional
    public boolean updateOrderStatus(KitchenOrderDTO kitchenOrderDTO){
        System.out.println(kitchenOrderDTO);
        orderItemsRepository.updateTableRequest(kitchenOrderDTO);
        return  true;
    }




}
