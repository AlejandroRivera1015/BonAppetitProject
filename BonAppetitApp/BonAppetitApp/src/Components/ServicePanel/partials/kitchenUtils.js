


export const getServiceOrders = async(tableId) =>{


    try{
        let petition = await fetch(`http://localhost:8080/orders/kitchen/getOrders/${tableId}`,{
            method : "GET",
            headers :{"Content-Type" : "application/json"},
        })
    
        let response = await petition.json();
        return response;

    }catch(e){console.log("error fetching ServiceOrders");};

}

export const setOrderStatus = async(_status, _tableId,_orderId,_itemId)=>{

    const status = _status;
    const tableId = _tableId;
    const orderId = _orderId;
    const itemId = _itemId;

    const kitchenOrderDTO = {status,tableId,orderId,itemId}

    console.log(tableId);
    
    
    try{
        let petition = await fetch("http://localhost:8080/orders/kitchen/updateOrders",{
            method : "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(kitchenOrderDTO),
        }) 


    }catch(e){console.log("update order status error");}
}