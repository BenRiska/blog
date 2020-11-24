import React, {useEffect} from 'react'
import "../styles/Contact.css"
import bookVid from "../assets/book.mov"
import closeIcon from "../assets/close.svg"
import {showContents} from "../animations"

function Contact({removeContactTransition}) {


    useEffect(() => {
        showContents()
    }, [])
    return (
        <>
        <span className="contact-exit">
                <img onClick={removeContactTransition} src={closeIcon} alt="close icon"/>
        </span>
        <div className="contact">
            <div className="contact-content">
                <div className="book">
                <video autoPlay muted  playsInline loop preload="none" >
                <source src={bookVid} type="video/webm"/>
            </video>
            </div>
            <div className="contact-text">
                <div className="contact-header">
                    <h1>have a great idea to share?</h1>
                    <p>or want to have a cup of coffee or a chit chat, just drop me a message</p>
                </div>
                <div className="contact-email">
                    <p>email:</p>
                    <h2>Ben10Taylor10@hotmail.com</h2>
                </div>
                <div className="contact-socials">
                    <p>or follow me on:</p>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                        <li>Github</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
