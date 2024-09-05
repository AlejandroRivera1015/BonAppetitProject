import { useContext, useEffect, useState } from "react";

import { getTableOrders,getBill } from "./partials/ordersUtils";
import { ListOrderItem } from "./ListOrderItem/ListOrderItem";
import { BillDisplay } from "./BillDisplay";
import { itemsContext } from "./ServicePanel";


export const OrdersDisplay = () => {
  let { tableId} = useContext(itemsContext);
  let [tableOrders, setTableOrders] = useState(null);
  let[pendingStatus,setPendingStatus] = useState("pendingStyle");
  let[orderLabel,setTableLabel] = useState("");

  const labels = {intro: "TABLE ORDERS:"};
  let [letterIndex,setLetterIndex] = useState(0);


    let {bill,setBill} = useContext(itemsContext);

  

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
