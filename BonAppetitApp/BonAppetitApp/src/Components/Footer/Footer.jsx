import location from '../../assets/lcation.jpg'

import insta from "../../assets/insta.svg"
import whats from "../../assets/whats.svg"
import face from "../../assets/face.svg"
import mail from "../../assets/mail.png"



export const Footer = () =>{


    return(
        <div className="footer">
            <div className='footerContent'>
            <div className="footerLocation">
                <div className='footerLocationInfo'>
                <h3>Location:</h3>

                    <img className='locationImg' src={location} />
                    <span>
                        <p>
                            Av. de los leones 55400, CDMX 
                        </p>
                    </span>
                </div>
                
                <div className='footerActions'>
                <h3>Menú:</h3>
                    <a href='#'>Contacto</a>
                    <a href='#'>Reservas</a>
                    <a href='#'>Facturación</a>
                    <a href='#'>Aviso de Privacidad</a>


                </div>

            </div>

            <div className='footerBAR'></div>

            <div className="footerContact">
                <h3>Contact:</h3>
                <span className='footerSocialIcons'>
                    <a href='#'><img src={face}/></a>
                    <a href='#'><img src={insta}/></a>
                    <a href='#'><img src={whats}/></a>
                </span>
                <span style={{display:"flex", alignItems:"center"}}>
                    <img src={mail}/>
                    <a href='#'>contact@bonAppetit.com</a>
                </span>
            </div>
            </div>
        </div>

    )
}