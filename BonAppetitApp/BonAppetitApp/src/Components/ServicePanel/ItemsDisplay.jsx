import './Item/item.css'

import { useEffect, useContext } from "react"
import { Item } from "./Item/Item";
import { itemsContext } from './ServicePanel';

export const ItemsDisplay = () => {

    let { items,category,order } = useContext(itemsContext);
    let itemCounter = 0;


    return (
        items ?
            <div className="itemsContainer">
                {items.map((item,index) =>{
                
                        return (category == item.category?
                            <Item key={index} item={item} category={category} order={order} index={itemCounter} />
                        :category == null ?
                            <Item key={item.id} item={item} category={category} order={order}  index={itemCounter}/>
                        :null)      
                        
                        itemCounter++;          

                })}
                
            </div>

        :null
    )

}