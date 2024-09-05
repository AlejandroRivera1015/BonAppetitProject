package com.bonappetit.gesture.Services.ItemsServices;

import com.bonappetit.gesture.Models.Order.Item;
import com.bonappetit.gesture.Repositories.ItemsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemsService {
    @Autowired
    private ItemsRepository itemsRepository;

    public List<Item> getAvailableItems(){
        return itemsRepository.findByItemState(true);
    }
    @Transactional
    public ArrayList<String> getCategories() {
        ArrayList<String> tempCategories = itemsRepository.getByCategory();
        ArrayList<String> availableCategories = new ArrayList<>();
        for (int i=0 ; i<tempCategories.size() ;i++){
            for (int j=0; j<tempCategories.size(); j++){
                if (tempCategories.get(i).equals(tempCategories.get(j))){
                    tempCategories.remove(j);
                }
            }
        }
        return tempCategories;
        

    }


}
