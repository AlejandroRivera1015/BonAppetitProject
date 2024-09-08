import { useEffect, useState,useContext,createContext } from "react"

import { getServiceOrders } from "../partials/kitchenUtils";

import { itemsContext } from "../ServicePanel";
import { OrderPanel } from "../OrderPanel";
import { KitchenOrdersDisplay } from "./kitchenOrdersDisplay/KitchenOrderDisplay";


import "../kitchenView/kitchen.css"

export let kitchenContext = createContext();

export const KitchenView = () =>{

    
    const {tableId,setTableId} = useContext(itemsContext);
    let [kitchenOrders,setKitchenOrders] = useState(null);  

    useEffect(()=>{
        console.log("xdxd");
        
        async function ordersRequest (){
            let request = await getServiceOrders(tableId);
            setKitchenOrders(request);
        }
        tableId!=null?ordersRequest():null;

    },[tableId])


    return(
        
        <kitchenContext.Provider value={{kitchenOrders,setKitchenOrders}}>
            <OrderPanel/>
            <KitchenOrdersDisplay/>
        </kitchenContext.Provider>
            
        
    )






}