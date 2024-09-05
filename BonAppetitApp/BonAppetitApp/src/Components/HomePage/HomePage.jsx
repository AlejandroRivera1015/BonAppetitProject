
import './homePage.css'

import video from '../../assets/backvideo.mp4'

import { LoginFormSection } from './LoginFormSection'


export const HomePage = () => {


    return (
        <div className="container homeContainer">
            <video autoPlay muted loop><source src={video} type="video/mp4" /></video>
            <div className="leftSection homeArtSection"></div>
            <div className="rightSection homeLogInSection">
                <LoginFormSection />
            </div>
        </div>
    )
}