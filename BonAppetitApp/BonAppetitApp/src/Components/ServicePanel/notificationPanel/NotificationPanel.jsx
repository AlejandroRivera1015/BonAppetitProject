import { useState, useContext, useEffect } from "react";
import "../notificationPanel/notificationPanel.css";
import { userContext } from "../../../App";

import dropitem from "../../../assets/dropitem.svg"

import confirmation from "../../../assets/confirmation.gif"


export const NotificationPanel = () => {
  let { userMessage, setUserMessage } = useContext(userContext);
  let [message, setMessage] = useState(null);
  let [tempMessage, setTempMessage] = useState("");

  useEffect(() => {
    switch (userMessage) {
      case "orderSucces":
        setTempMessage("Exito my frensito ;)");
        break;

      case "waiting":
        setTempMessage("ESTAMOS PROCESANDO LA SOLICITUD :)");
        break;
      default:
        null
      break;
    }
  }, [userMessage]);

  useEffect(() => {
    
    for (let i = 0; i < tempMessage.length; i++) {
      setTimeout(() => {
        (i == 0 && tempMessage.length>0)
          ? setMessage(tempMessage[i])
          : setMessage((prev) => prev + tempMessage[i]);
      }, i * 30);
    }

  }, [tempMessage]);


  return (
    message != null ?
    <div className="container">
      <div className="notificationPanel">{message}</div>
      {userMessage === "orderSucces" ?
      <>
          <img  className="ConfirmationGIF" src={confirmation}/>
          <img onClick={()=>setMessage(null)} className="CancelWindow" src={dropitem}/>
      </>
      
      :null }
    </div>
    :null
    
  );
};
