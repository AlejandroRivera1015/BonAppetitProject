package com.bonappetit.gesture.Controllers;

import com.bonappetit.gesture.Models.Table.RestaurantTable;
import com.bonappetit.gesture.Services.tablesServices.TablesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/tables")
public class TablesController {
    @Autowired
    public TablesServices tablesServices;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public ArrayList<RestaurantTable> getTablesPetition(){
        return tablesServices.getServiceTables();
    }




}
