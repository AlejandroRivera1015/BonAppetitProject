import { useContext } from "react"
import { itemsContext } from "./ServicePanel";

export const ServiceMenu = () =>{

    let {setMenuOpc} = useContext(itemsContext);


    const handleMenuOpc = (opc) =>{
        setMenuOpc(opc);
    }



    return(
    <div className="serviceMenuPanel">
        <button className="itemsPanelOpc" onClick={()=>handleMenuOpc("menu")}>MENU</button>
        <button className="itemsPanelOpc" onClick={()=>handleMenuOpc("orders")}>ORDERS</button>


    </div>
    )
}