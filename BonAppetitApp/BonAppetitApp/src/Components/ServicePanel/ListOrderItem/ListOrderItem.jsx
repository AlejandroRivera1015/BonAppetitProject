import { useEffect, useState } from "react"

import close from "../../../assets/close.svg"
import open from "../../../assets/open.svg"


export const ListOrderItem = ({item,index}) =>{


    let[toggle,setToggle] = useState(false);
    let[status,setStatus] = useState(null);
    let[toggleStatus,setToggleStatus] = useState("")

    useEffect(()=>{
    
        setToggleStatus(prev => prev!=""?`${status}Active`:"")
    },[toggleStatus])


return(


 <li className="orderWrapper">
    <ul>
        <li className={`orderHeaderSection ${toggle?"closeOrder":"openOrder"} ${status} ${toggleStatus} `} onClick={()=>setToggle(_state => _state?false:true )}>
            <span>ORDER: {index+1}</span>
            <img src={toggle?open:close} /> 
        </li>

        <li>
            <ul className={``}>
                <li index={index}>
                    <span>{item.itemId}</span>
                    <span>{item.itemName}</span>
                    <span>{item.amount}</span>
                    <span>{item.requestStatus}</span>
                </li>
            </ul >
        </li>
    </ul>
 </li>   

)

}