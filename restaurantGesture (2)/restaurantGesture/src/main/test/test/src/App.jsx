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

  const handleForm = async (event,mail) => {
    event.preventDefault();

    try{
    const obj = { mail: mail }
    const response =  await fetch('http://localhost:8080/users',
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }

      }
    )
    console.log(`La respuesta es: ${response}`);
  }catch(e){console.log("error");}



  }




  return (
    <>
      <form >
        <input value={mail} onChange={handleMail}></input>
        <button type="sumbit" onClick={()=>handleForm(event,mail)}>ENVIAR</button>
      </form>
    </>

  )
}

