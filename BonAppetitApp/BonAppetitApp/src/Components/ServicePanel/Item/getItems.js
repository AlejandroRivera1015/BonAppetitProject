

export const getDefaultItems = async() =>{

    try{
    const request = await fetch("http://localhost:8080/items/available",{
        method:"GET",
        headers: { "Content-Type": "application/json" }
        
    });

    const response = await request.json(); 
    return response;
    

    }
    catch(e){console.log("Failed fetching default Items");}

} 