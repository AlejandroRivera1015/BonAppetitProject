package com.bonappetit.gesture.Services.tablesServices;


import com.bonappetit.gesture.Models.Table.RestaurantTable;
import com.bonappetit.gesture.Repositories.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TablesServices {
    @Autowired
    public TableRepository tableRepository;

    public ArrayList<RestaurantTable> getServiceTables(){
        return tableRepository.findAll();

    }


}
