


export const  requestOrder = async(order,tableId,userData) =>{

    let status = "pending";
    let total = 0;
    const userId = userData.id;
    let cart = order

    console.log(`el id es : >${tableId}`);
    
    
    const requestOrder = {cart, status,tableId,userId};

    const request = await fetch("http://localhost:8080/orders/save", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(requestOrder),
    });

    return request

}


export const setItemsAmount = (order,itemId) =>{
  
  const item = order.find(item => item.id === itemId);

  return item?item.amount:0;

}