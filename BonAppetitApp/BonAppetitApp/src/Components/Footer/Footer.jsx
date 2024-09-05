import location from '../../assets/lcation.jpg'


export const Footer = () =>{


    return(
        <div className="footer">
            <div className="footerLocation">
                <img className='locationImg' src={location} />
                <span>
                    <p>
                        Av. de los leones 55400, CDMX 
                    </p>
                </span>
            </div>

            <div className='footerBAR'></div>

            <div className="footerContact">
                hola

            </div>

        </div>

    )
}