
export const getTableOrders = async(tableId) =>{

    try{ 

    const petition = await fetch(`http://localhost:8080/orders/get/tableOrders?tableId=${tableId}`,{
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })

    const response = await petition.json();
    return response;
    }
    catch(e){console.log(``); return null}
    

}


export const getBill = async(tableId) =>{

    try{
        const petition = await fetch(`http://localhost:8080/orders/total/${tableId}`,{
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })

        const response = await petition.json();
        return response;

        



    }catch(e){
        console.log("error fetching bill");
        
    }

}