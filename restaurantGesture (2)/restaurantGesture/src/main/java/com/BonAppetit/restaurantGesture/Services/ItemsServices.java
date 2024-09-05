package com.BonAppetit.restaurantGesture.Services;

import com.BonAppetit.restaurantGesture.Models.Order.Item;
import com.BonAppetit.restaurantGesture.Repositories.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class ItemsServices {
    @Autowired
    public ItemsRepository itemRepository;

     public List<Item> getAll(){
         return  itemRepository.    findByItemState(true);
    }

}
