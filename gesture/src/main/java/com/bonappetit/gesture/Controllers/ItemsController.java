package com.bonappetit.gesture.Controllers;

import com.bonappetit.gesture.Models.Order.Item;
import com.bonappetit.gesture.Services.ItemsServices.ItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/items")
@CrossOrigin(origins = "http://localhost:5173")

public class ItemsController {

    @Autowired
    public ItemsService itemsService;

    @GetMapping("/available")
    public List<Item> getAvailableItemsPetition(){
        return itemsService.getAvailableItems();
    }

    @GetMapping("/categories")
    public List<String> getAvailableCategories(){
        return itemsService.getCategories();
    }


}


