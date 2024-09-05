package com.bonappetit.gesture.Services.ordersServices.Implementations;


import com.bonappetit.gesture.DTO.ServiceOrderDTO.KitchenServiceDTO;
import com.bonappetit.gesture.DTO.ServiceOrderDTO.ServiceOrderDTO;
import com.bonappetit.gesture.Models.Order.OrderItem;
import com.bonappetit.gesture.Models.Order.ServiceOrder;
import com.bonappetit.gesture.Repositories.OrderItemsRepository.OrderItemsRepository;
import com.bonappetit.gesture.Repositories.OrdersRepositories.OrdersRepositories;
import com.bonappetit.gesture.Services.ordersServices.OrdersServices;

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

            if (!(requestStatus.equals("waiting") ))
                bill += itemAmount * itemPrice;
        }
        return bill;
    }

    public List<Object[]> getTableRequests(Integer tableId){

        List<Object[]>  requests = orderItemsRepository.getTableRequests(tableId);
        HashMap<Integer,List<KitchenServiceDTO>> kitchenOrdersMap = new HashMap<>();
        List<Object[]> tempOrder = new ArrayList<>();


        for (Object[] request : requests){

            Integer orderId = (Integer) request[0];
            Integer amount = (Integer) request[1];
            String requestStatus = (String) request[2];
            
        }
        return orderItemsRepository.getTableRequests(tableId);

    }




}
