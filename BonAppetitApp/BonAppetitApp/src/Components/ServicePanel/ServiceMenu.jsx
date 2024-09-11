import { useContext, useState } from "react"
import { itemsContext } from "./ServicePanel";

export const ServiceMenu = () =>{

    let {setMenuOpc} = useContext(itemsContext);

    let[activeMenu,setActiveMenu] = useState(false)


    const handleMenuOpc = (opc) =>{
        setActiveMenu(opc);
        setMenuOpc(opc);
    }



    return(
    <div className="serviceMenuPanel">
        <button className={` itemsPanelOpc ${activeMenu=="menu"?"menuActive":""}`} onClick={()=>handleMenuOpc("menu")}>MENU</button>
        <button className={` itemsPanelOpc ${activeMenu=="orders"?"menuActive":""}`} onClick={()=>handleMenuOpc("orders")}>ORDERS</button>
    </div>
    )
}