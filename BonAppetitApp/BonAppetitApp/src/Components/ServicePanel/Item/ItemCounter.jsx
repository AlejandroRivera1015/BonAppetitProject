import { useContext, useEffect, useState } from "react";

import { itemsContext } from "../ServicePanel";
export const ItemCounter = ({ counter,setCounter,itemId, itemName,itemPrice }) => {

  let { order, setOrder,tableId,setTableId } = useContext(itemsContext);

  useEffect(() => {
    console.log(`counter ${typeof(counter)}`);

    if (counter < 0) {
      setCounter(0);
    } 
    else {
      handleOrder();
    }
  }, [counter]);  



useEffect(()=>{
  console.log(`ORDER IS: ${JSON.stringify(order)}`);
},[order])



  const handleOrder = () => {

    let tempOrderArray = [...order];

    tempOrderArray = tempOrderArray.filter(item => item.amount>0)


    let requestStatus = "Waiting";

    let isFind = false;



    tempOrderArray = tempOrderArray.map((item) =>{

        if(item.itemId == itemId){
          console.log("encontrado");

          isFind = true;
          return{...item,amount: counter}
        }
        else{
          return item;

        }
    })

    
    if(!isFind){
      let itemOrderObj = { amount: counter, itemId: itemId, itemName: itemName, itemPrice: itemPrice, requestStatus: requestStatus }; // para la array de items push obj

      tempOrderArray.push(itemOrderObj);
    }
    
    setOrder(tempOrderArray);

  };




  const pushItem = () => {
    setCounter((prev) => prev + 1);
  };

  const dropItem = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <span className="counterWrapper">
      <button className="counterBtn" onClick={() => dropItem()}>
        -
      </button>
      <span>{counter}</span>
      <button className="counterBtn" onClick={() => pushItem()}>
        +
      </button>
    </span>
  );
};
