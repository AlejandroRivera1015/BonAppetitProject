package com.bonappetit.gesture.DTO.Kitchen;


import com.bonappetit.gesture.Models.Order.OrderItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class KitchenServiceDTO {
    Integer id;
    List<OrderItem> orderItems = new ArrayList<>();

}
