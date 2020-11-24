import React from 'react'
import "../styles/Landing.css"
import plantGif from "../assets/loading.gif"
import yellowIcon from "../assets/yellow-icon.svg"

function Landing({landAnimation, playMusic}) {
    return (
        <div className="landing">
            <img className="landing-icon" src={yellowIcon} alt="landing page icon"/>
            <div className="landing-content">
                <img src={plantGif} alt="landing page animation"/>
                <div className="music-selector">
                    <span onClick={landAnimation} className="off">OFF.</span>
                    <span onClick={() => {
                        landAnimation()
                        playMusic()}} className="on">ON.</span>
                </div>
                <p className="landing-text">Music brings emotion so turn it on for your best experience.</p>
            </div>
        </div>
    )
}

export default Landing
