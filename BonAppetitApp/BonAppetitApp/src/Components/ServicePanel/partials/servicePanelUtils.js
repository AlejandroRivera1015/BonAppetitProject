



export const getTables= async() =>{

    const response = await fetch("http://localhost:8080/tables",{
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })

    let result = await response.json();
    console.log(typeof(result));
    return result;
}

export const getCategories = async() =>{

    const response = await fetch("http://localhost:8080/items/categories",{
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })
    let result = await response.json();


    return result;

}