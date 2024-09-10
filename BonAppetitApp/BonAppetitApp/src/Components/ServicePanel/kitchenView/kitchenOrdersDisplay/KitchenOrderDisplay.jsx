import { useContext, useEffect, useState } from "react"
import { kitchenContext } from "../KitchenView"
import { itemsContext } from "../../ServicePanel";
import { setOrderStatus } from "../../partials/kitchenUtils";


export const KitchenOrdersDisplay = () =>{


  const {kitchenOrders,setKitchenOrders} = useContext(kitchenContext);
  const {tableId} = useContext(itemsContext);

  let[statusVAR, setStatusVAR] = useState(false);


  useEffect(()=>{

    const temp = setTimeout(() => {
      console.log("hola man");
    
    handleFlag();

    }, 1400);

    return ()=>clearTimeout(temp);
  
  },[statusVAR])


  const handleFlag =()=>(!statusVAR ?setStatusVAR(true) : setStatusVAR(false));





  const handlePetition = async (event,orderId,itemId) =>{

    let status = event.target.value;
    const statusResponse = await setOrderStatus(status, tableId, orderId, itemId);
  }


    return(
    <>
      {Array.isArray(kitchenOrders)?
        <>
          <div className="kitchenOrdersContainer">
            <ul>
            {
              kitchenOrders.map((order,oIndex)=>(
                <span key={oIndex}>
                  <li >
                      {`ServiceOrder: ${order.id}`}
                  </li>
                  <li className="kitchenOrder">
                    {order.orderItems.map((item,iIndex)=>(
                      
                        <div   className="kitchenOrderItem" key={iIndex}>
                          <span>{item.itemName}</span>
                          <span>{item.amount}</span>
                          <span className={`orderStatus ${(item.requestStatus=="Canceled" || item.requestStatus=="Served") ?`item${item.requestStatus}`: (statusVAR?item.requestStatus=="waiting"?"itemPending":item.requestStatus=="cooking"?"itemCooking":"":"")}`} >{item.requestStatus}</span>
                          <select  
                            className="optionChooser"  onChange={(event)=>handlePetition(event,order.id,item.itemId)}>
                            <option value={"Cooking"}>Cooking</option>
                            <option value={"Canceled"}>Canceled</option>  
                            <option value={"Served"}>Served</option>  
                          </select>
                        </div>
                    ))}
                  </li>
                </span>

              ))
            }
            </ul>
          </div>
              
        </>
      :
        null}

    </>      
    )
}