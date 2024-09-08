package com.bonappetit.gesture.DTO.Kitchen;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class KitchenOrderDTO {

    private String status;
    private Integer tableId;
    private Integer orderId;
    private Integer itemId;

}
