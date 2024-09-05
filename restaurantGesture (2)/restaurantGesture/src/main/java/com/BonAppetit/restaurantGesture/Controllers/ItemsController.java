package com.BonAppetit.restaurantGesture.Controllers;


import com.BonAppetit.restaurantGesture.Models.Order.Item;
import com.BonAppetit.restaurantGesture.Repositories.ItemsRepository;
import com.BonAppetit.restaurantGesture.Services.ItemsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemsController {
    @Autowired
    ItemsServices itemsServices;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public List<Item> getAvailableItems(){
        return itemsServices.getAll();
    }

}
