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

    }, 500);

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
                          <span className={`orderStatus ${statusVAR?item.requestStatus=="cooking"?"itemPending":"":""}`} >{item.requestStatus}</span>
                          <select  
                            className="optionChooser"  onChange={(event)=>handlePetition(event,order.id,item.itemId)}>
                            <option value={"cooking"}>Cooking</option>
                            <option value={"canceled"}>Canceled</option>  
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