package com.bonappetit.gesture.Controllers;


import com.bonappetit.gesture.DTO.Kitchen.KitchenOrderDTO;
import com.bonappetit.gesture.DTO.Kitchen.KitchenServiceDTO;
import com.bonappetit.gesture.DTO.ServiceOrderDTO.ServiceOrderDTO;
import com.bonappetit.gesture.Models.Order.ServiceOrder;
import com.bonappetit.gesture.Services.ordersServices.OrdersServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrdersController {

    @Autowired
    private OrdersServices ordersServices;

    @PostMapping("/save")
    @ResponseBody
    public boolean saveOrder(@RequestBody ServiceOrder order){
        ordersServices.saveTableOrder(order);
        return true;
    }


    @GetMapping("/get/tableOrders")
    @ResponseBody
    public List<ServiceOrderDTO> getTableOrders(@RequestParam Integer tableId){
          return ordersServices.getTableOrders(tableId);
    }

    @GetMapping("/total/{tableId}")
    @ResponseBody
    public Double getBill (@PathVariable Integer tableId){
        return ordersServices.getTableBill(tableId);
    }


    //kitchenMethods

    @GetMapping("kitchen/getOrders/{tableId}")
    @ResponseBody
    public List<KitchenServiceDTO> KitchenOrders(@PathVariable Integer tableId){
        return ordersServices.getKitchenOrders(tableId);

    }

    @PostMapping("kitchen/updateOrders")
    @ResponseBody
    public  boolean kitchenUpdateOrder(@RequestBody KitchenOrderDTO OrderUpdate){
        System.out.println(OrderUpdate);

        ordersServices.updateOrderStatus(OrderUpdate);
        return true;

    }

}
