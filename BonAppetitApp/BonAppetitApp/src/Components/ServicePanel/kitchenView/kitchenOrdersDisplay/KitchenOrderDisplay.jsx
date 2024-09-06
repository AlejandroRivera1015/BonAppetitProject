import { useContext } from "react"
import { kitchenContext } from "../KitchenView"

export const KitchenOrdersDisplay = () =>{


  const {kitchenOrders,setKitchenOrders} = useContext(kitchenContext);


    return(
    <>
      {Array.isArray(kitchenOrders)?
        <>
          <div className="kitchenOrdersContainer">

          </div>
              
        </>
      :
        null}

    </>      
    )
}