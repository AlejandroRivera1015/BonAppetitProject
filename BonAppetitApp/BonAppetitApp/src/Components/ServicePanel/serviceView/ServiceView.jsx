import "../serviceView/serviceView.css";

import { createContext, useState, useEffect, useContext } from "react";
import { OrderPanel } from "../OrderPanel";
import { ItemsDisplay } from "../ItemsDisplay";

import { requestOrder } from "../Item/utils";
import { getDefaultItems } from "../Item/getItems";

import orderImg from "../../../assets/orderImg.svg";

import { userContext } from "../../../App";
import { OrdersDisplay } from "../OrdersDisplay";


import { itemsContext } from "../ServicePanel";
export const ServiceView = () => {


  const { userData, userMessge, setUserMessage } = useContext(userContext);

  const {
    items,
    setItems,
    order,
    setOrder,
    tableId,
    menuOpc} = useContext(itemsContext);


  const handleOrder = async () => {
    setUserMessage("waiting");
    let petition = await requestOrder(order, tableId, userData);
    let response = await petition.json();
    if (petition.ok) {
      setTimeout(() => {
        setUserMessage("orderSucces");
        console.log(`la petición es${response}`);
      }, 2000);
    } else setUserMessage("error");

    setOrder([]);
};

useEffect(() => {
    async function fetchItems() {
      let itemsPetition = await getDefaultItems();
      setItems(itemsPetition);
    }
    fetchItems();
}, []);

return (
<>
        <OrderPanel />
            {menuOpc == "menu" ? (
                <>
                    <ItemsDisplay />
                    {order.length > 0 ? (
                        <img   onClick={() => handleOrder()}className="orderImg"src={orderImg} />
                    ) : null}
                </>
            ) 
            : menuOpc == "orders" ?
                <>
                    <OrdersDisplay />
                </>
            : null}
  </>
  );
};
