package com.bonappetit.gesture.Controllers;


import com.bonappetit.gesture.DTO.ServiceOrderDTO.ServiceOrderDTO;
import com.bonappetit.gesture.Models.Order.OrderItem;
import com.bonappetit.gesture.Models.Order.ServiceOrder;
import com.bonappetit.gesture.Services.ordersServices.OrdersServices;
import org.aspectj.apache.bcel.generic.RET;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

}
