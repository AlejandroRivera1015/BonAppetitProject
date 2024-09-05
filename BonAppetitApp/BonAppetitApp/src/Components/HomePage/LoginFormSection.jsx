import { useState, useContext } from "react"


import { userContext } from "../../App"

import { logIn } from "../../services/logServices/logIn"

export const LoginFormSection = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let {userData,setUserData} = useContext(userContext)

    const handleLogIn = async(e) => {
        e.preventDefault();
        let credentials = await logIn(email,password);
        console.log(`----------->Credentials: ${JSON.stringify(credentials)}`);
        setUserData(credentials);
    }


    return (

        <div className="formWrapper">
            <form onSubmit={(e) => handleLogIn(e)} className="logInForm">
                <input className="userInput" onChange={(e) => setEmail(e.target.value)} type="text"></input>
                <input className="userInput" onChange={(e) => setPassword(e.target.value)} type="password"></input>
                <button type="submit">LogIn</button>
            </form>
        </div>


    )

}