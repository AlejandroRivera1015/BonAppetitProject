import { useEffect, useState,useContext } from "react"

import { getServiceOrders } from "../partials/kitchenUtils";

import { itemsContext } from "../ServicePanel";
import { OrderPanel } from "../OrderPanel";

export const KitchenView = () =>{

    
    const {tableId,setTableId} = useContext(itemsContext);
    let [kitchenOrders,setKItchenOrders] = useState(null);  

    useEffect(()=>{

        let ordersRequest = async() =>{
            let request = await getServiceOrders(tableId);
            setKItchenOrders(request);
        }
        ordersRequest();

    },[tableId])


    return(
        <>
            <OrderPanel/>
            
        </>
    )






}