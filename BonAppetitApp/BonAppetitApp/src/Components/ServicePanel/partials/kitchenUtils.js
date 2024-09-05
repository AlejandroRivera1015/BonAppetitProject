


export const getServiceOrders = async(tableId) =>{



    try{
        let petition = await fetch(`${tableId}`,{
            method : "GET",
            headers :{"Content-Type" : "application/json"},
        })
    
        const response = await petition.json();
        return response;

    }catch(e){console.log("error fetching ServiceOrders");};



}