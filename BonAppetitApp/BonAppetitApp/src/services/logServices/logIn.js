

export const logIn = async (email, password) => {


    try {
        const user = { email: email, pswd: password };

        const request = await fetch("http://localhost:8080/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        })
        const response = await request.json();
        return response;
        
    } 
    catch(e){
        console.log("Login Failure"+e); 
        return null;
    }


}