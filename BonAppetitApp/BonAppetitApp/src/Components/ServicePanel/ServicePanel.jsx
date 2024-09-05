import '../ServicePanel/servicePanel.css'


import { useEffect, useState, createContext,useContext } from "react"


import { userContext } from '../../App';


import { ServiceView } from './serviceView/ServiceView';
import { KitchenView } from './kitchenView/KitchenView';

export let itemsContext = createContext();





export const ServicePanel = () => {

  let [items, setItems] = useState(null);
  let [order, setOrder] = useState([]);
  let [tableId, setTableId] = useState(null);
  let [categories, setCategories] = useState(null);
  let [category, setCategory] = useState(null);
  let [menuOpc, setMenuOpc] = useState(null);
  let [bill, setBill] = useState(null);
  let{userData,userMessage,setUserMessage} =useContext(userContext);
  



    return (

      <itemsContext.Provider
      value={{
      items,
          setItems,
          order,
          setOrder,
          tableId,
          setTableId,
          categories,
          setCategories,
          category,
          setCategory,
          menuOpc,
          setMenuOpc,
          bill,
          setBill
      }}>
  
    {  userData.role =="admin"? 
      <ServiceView/>:<KitchenView />}
    </itemsContext.Provider>

    
        )
}