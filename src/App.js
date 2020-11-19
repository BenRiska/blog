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
import Blogs from "./components/Blogs";
import Blog1 from "./components/Blog1";


let tl = gsap.timeline();

const homeAnimation = () => {
  tl.to(".landing", {
    scale: 0,
    duration: 0.9,
    ease: "expo.inOut",
    transformOrigin: "bottom"
  })
}

const prepBlogAnimation = (showBlog) => {
  tl.to(".blogs, .book", {
    y: -200,
    duration: 1.2,
    opacity: 0,
    ease: "power4.out",
    transformOrigin: "top center",
    onComplete: showBlog
  })
}


const showBlogAnimation = (blog) => {
  tl.to(`.blog-${blog}`, {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power4.out"
  })
}

const removeBlogAnimation = (blog) => {
  tl.to(`.blog-${blog}`, {
    duration: 1,
    opacity: 0,
    y: 200
  }).to(".blogs, .book", {
    y: 0,
    duration: 1.2,
    opacity: 1,
    transformOrigin: "top center",
    ease: "power4.out"
  })
}

function App() {

  const [landed, setLanded] = useState(false);
  const [music, setMusic] = useState(false);
  const [blogSelected, setBlogSelected] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(null)

  const handleBlogSelection = (blogId) => {
    setBlogSelected(true);
    setSelectedBlog(blogId);
    prepBlogAnimation(e => showBlogAnimation(blogId))
  }

  useEffect(() => {
    console.log(blogSelected, selectedBlog)
  }, [blogSelected, selectedBlog])


  const autoLandAnimation = () => {
    const body = document.querySelector("body");
    const indexElements = document.querySelectorAll(".landing-z") 
    if(!landed){
      indexElements.forEach(el => {
        el.style.zIndex = 1;
        el.style.opacity = 1;
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
      piano.play()
      logo.classList.add("on");
      logo.style.opacity = 1;
    } else{
      piano.pause()
      logo.classList.remove("on");
      logo.style.opacity = 0.4;
    }
  }, [music])

  useEffect(() => {
    new Cursor(document.querySelector(".cursor"));
    setTimeout(() => {
      autoLandAnimation()
    }, 4000)
  }, [])

  const pasteToClipboard = () => {
    const copyLink = document.querySelector(".copy-link");
    navigator.clipboard.writeText("hi");
    if (!copyLink.classList.contains("clicked")){
      copyLink.classList.add("clicked");
      setTimeout(() => {copyLink.classList.remove("clicked")}, 1000)
    }
  }



  return (
    <div className="App">
      <Landing playMusic={playMusic} landAnimation={autoLandAnimation}/>
      <img src={soundIcon} onClick={() => setMusic(!music)} alt="main page icon" className="sound-icon landing-z"/>
      <img src={whiteIcon} alt="main page icon" className="white-icon landing-z"/>
      <Blogs handleBlogSelection={handleBlogSelection}/>
      <audio loop className="piano" src={pianoMusic}></audio>
      <div className="cursor"></div>
      <video className="book" autoPlay muted  playsInline loop preload="none" >
        <source src={bookVid}  type="video/mp4"/>
      </video>
      <div className="socials landing-z">
        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/featurefield/?hl=en" className="insta">
        </a>
        <div onClick={pasteToClipboard} className="copy-link">
        </div>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/feed/" className="linkedin">
        </a>
      </div>
      <span className="say-hi static-link landing-z">say hi.</span>
      <span className="portfolio static-link landing-z"><a rel="noreferrer" target="_blank" href="https://portfolio-11585.web.app/">portfolio.</a></span>
      <span className="github static-link landing-z"><a rel="noreferrer" target="_blank" href="https://github.com/BenRiska">github.</a></span>
      <Blog1 removeBlogAnimation={removeBlogAnimation}/>
    </div>
  );
}

export default App;
