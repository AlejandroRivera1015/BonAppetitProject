import { useContext, useEffect, useState } from 'react'
import './App.css'


import { createContext } from 'react'
import { HomePage } from './Components/HomePage/HomePage'
import { ServicePanel } from './Components/ServicePanel/ServicePanel';
import { NotificationPanel } from './Components/ServicePanel/notificationPanel/NotificationPanel';
import { Footer } from './Components/Footer/Footer';



export const userContext = createContext();


export const App = () => {

  const [userData, setUserData] = useState(null);
  let[userMessage,setUserMessage] = useState(null);

  


  return (
    <>
    <userContext.Provider value={{userData,setUserData,setUserMessage,userMessage }}>
      {userMessage?<NotificationPanel />:null}

      {
        userData ?
          <ServicePanel/>
        : 
          <HomePage />
      }
      
    </userContext.Provider>
    <Footer/>
    </>

  )
}

