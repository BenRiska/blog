import bookVid from "./assets/book.mov";
import './App.css';
import Landing from "./components/Landing";
import {useEffect, useState} from "react"
import Cursor from "./cursor"
import { gsap } from "gsap";
import yellowCursor from "./assets/yellow-cursor.svg";
import whiteIcon from "./assets/white-icon.svg"
import soundIcon from "./assets/sound.svg"
import pianoMusic from "./assets/Magical-Piano-Version.mp3"


let tl = gsap.timeline();

const homeAnimation = () => {
  tl.to(".landing", {
    scale: 0,
    duration: 1,
    ease: "expo.inOut",
    transformOrigin: "bottom"
  })
}

function App() {

  const [landed, setLanded] = useState(false);
  const [music, setMusic] = useState(false);

  const autoLandAnimation = () => {
    const body = document.querySelector("body");
    const indexElements = document.querySelectorAll(".landing-z") 
    if(!landed){
      indexElements.forEach(el => {
        el.style.zIndex = 0;
      })
      body.style.cursor = `url(${yellowCursor}), default`;
      document.documentElement.style
                .setProperty('--cursor-ring', '#f2da87');
      homeAnimation()
      setLanded(true)
    }
  }

  const playMusic = () => {
    setMusic(true);
  }

  useEffect(() => {
    const piano = document.querySelector(".piano");
    const logo = document.querySelector(".sound-icon");
    if (music){
      console.log("play")
      piano.play()
      logo.style.opacity = 1;
    } else{
      console.log("stop")
      piano.pause()
      logo.style.opacity = 0.4;
    }
  }, [music])

  useEffect(() => {
    const cursor = new Cursor(document.querySelector(".cursor"));
    setTimeout(() => {
      autoLandAnimation()
    }, 4000)
  }, [])



  return (
    <div className="App">
      <Landing playMusic={playMusic} landAnimation={autoLandAnimation}/>
      <img src={whiteIcon} alt="main page icon" className="white-icon landing-z"/>
      <img src={soundIcon} onClick={() => setMusic(!music)} alt="main page icon" className="sound-icon landing-z"/>
      <audio loop className="piano" src={pianoMusic}></audio>
      <div className="cursor"></div>
      <video className="book" autoPlay muted  playsinline loop preload="none" >
        <source src={bookVid}  type="video/mp4"/>
      </video>
      <span className="say-hi static-link landing-z">say hi.</span>
      <span className="portfolio static-link landing-z">portfolio.</span>
      <span className="github static-link landing-z">github.</span>
    </div>
  );
}

export default App;
