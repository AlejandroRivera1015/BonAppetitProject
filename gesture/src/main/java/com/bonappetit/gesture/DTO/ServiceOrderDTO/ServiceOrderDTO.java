package com.bonappetit.gesture.DTO.ServiceOrderDTO;

import com.bonappetit.gesture.Models.Order.OrderItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ServiceOrderDTO {

    private  int serviceOrderId;
    private List<OrderItem>  serviceOrderItems = new ArrayList<>();

}
