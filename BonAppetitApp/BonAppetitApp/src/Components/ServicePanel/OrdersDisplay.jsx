import { useContext, useEffect, useState } from "react";

import { getTableOrders,getBill } from "./partials/ordersUtils";
import { ListOrderItem } from "./ListOrderItem/ListOrderItem";
import { BillDisplay } from "./BillDisplay";
import { itemsContext } from "./ServicePanel";
import { setOrderStatus } from "./partials/kitchenUtils";


export const OrdersDisplay = () => {
  let [tableOrders, setTableOrders] = useState(null);
  let[pendingStatus,setPendingStatus] = useState("pendingStyle");
  let[orderLabel,setTableLabel] = useState("");



    let {bill,setBill,tableId} = useContext(itemsContext);

    function handleCompletedOrder (itemId, serviceOrderId,requestStatus){

        console.log(itemId);
        console.log(requestStatus);

        return setOrderStatus(requestStatus,tableId,serviceOrderId,itemId);

      
    }

  

  useEffect(() => {

    async function handleTableOrders() {
      let tempTableOrders = await getTableOrders(tableId);
      setTableOrders(tempTableOrders)   
    }

    async function getTableBill() {
      let tempBill = await getBill(tableId);
      setBill(tempBill);
      
    }

    if(tableId != null){
      handleTableOrders();
      getTableBill();
    }
  },[tableId]);





  useEffect(()=>{

    const temporizer = setTimeout(()=>{
      setPendingStatus(prev => prev =="pendingStyle" ? "":"pendingStyle")
    },1500)

    return ()=> clearTimeout(temporizer);

  },[pendingStatus])


  
  return (  
  <>
    {Array.isArray(tableOrders) && tableOrders.length>0 ? (
    <>
    <ul className="ordersContainer">
      <h1>ORDER: </h1>
      {tableOrders.map((order, oIndex) =>(
        <li  key={oIndex} className="order">
            <span>ORDER: {order.serviceOrderId}</span>
            <span>
              <ul>
                {
                order.serviceOrderItems.map((item,iIndex) =>(
                  <li className="orderItem" key={iIndex}>
                    <div>{item.itemName}</div>
                    <div>{item.amount}</div>
                    <div>${item.itemPrice}</div>
                    <div>
                          <span className={`requestStatus ${
                          item.requestStatus == "waiting" ? pendingStatus : null
                        }`}>{item.requestStatus}
                          </span>
                    </div>
                    <div>
                      {item.requestStatus !="Completed" ? 
                                    <select onChange={(event)=>handleCompletedOrder(item.itemId,order.serviceOrderId,event.target.value)}>
                                    <option value={"Completed"}>Completed</option>
                                    <option value={"Cancel"}>Cancel</option>
                                    <option value={"Modifying"}>Modifying</option>
                                  </select>
                      
                      
                      : null}
          
                    </div>

                    
                  </li>
                ))
                }
              </ul>
            </span>
        </li>
    
      ))}
    </ul>
    </>
    ) 
  :null}
  {bill != null && bill>0 ? <BillDisplay bill={bill} /> : null}
  </>

)
};
