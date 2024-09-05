import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  let [mail, setMail] = useState("");

  const handleMail = (e) => {
    e.preventDefault();
    setMail(e.target.value);

  }

  const handleForm = async (event,email) => {
    event.preventDefault();

    try{
    const obj = { email: email }
    const response =  await fetch('http://localhost:8080/users',
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }

      }
    )

    const userObj = await response.json();
    console.log(`La respuesta es: ${JSON.stringify(userObj)}`);
  }catch(e){console.log("error");}



  }




  return (
    <>
      < form onSubmit={handleForm} >
        <input value={mail} onChange={handleMail}></input>
        <button onClick={()=>handleForm(event,mail)}>ENVIAR</button>
      </ form>
    </>

  )
}

