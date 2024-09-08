import { useContext } from "react"
import { kitchenContext } from "../KitchenView"
import { itemsContext } from "../../ServicePanel";
import { setOrderStatus } from "../../partials/kitchenUtils";


export const KitchenOrdersDisplay = () =>{


  const {kitchenOrders,setKitchenOrders} = useContext(kitchenContext);
  const {tableId} = useContext(itemsContext);




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
                  <li>
                    {order.orderItems.map((item,iIndex)=>(
                      
                        <div   className="kitchenOrder" key={iIndex}>
                          <span>{item.itemName}</span>
                          <span>{item.amount}</span>
                          <span>{item.requestStatus}</span>
                          <select onChange={(event)=>handlePetition(event,order.id,item.itemId)}>
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