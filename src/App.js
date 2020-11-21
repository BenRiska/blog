
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
import { Switch, Route, useHistory } from "react-router-dom";



let tl = gsap.timeline();

const homeAnimation = () => {
  tl.to(".landing", {
    scale: 0,
    duration: 0.9,
    ease: "expo.inOut",
    zIndex: -1,
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

const removeBlogAnimation = (blog, f) => {
  tl.to(`.blog-${blog}`, {
    duration: 1,
    opacity: 0,
    y: 200,
    onComplete: f
  })
}

function App() {

  const [landed, setLanded] = useState(false);
  const [music, setMusic] = useState(false);
  

  let history = useHistory();


  const handleBlogSelection = (blogId, blogName) => {
    prepBlogAnimation(e => history.push(`/${blogName}`))
  }


  const autoLandAnimation = () => {
    const body = document.querySelector("body");
    const indexElements = document.querySelectorAll(".landing-z") 
    if(!landed){
      homeAnimation()
      indexElements.forEach(el => {
        el.style.zIndex = 1;
        el.style.opacity = 1;
      })
      body.style.cursor = `url(${yellowCursor}), default`;
      document.documentElement.style
                .setProperty('--cursor-ring', '#f2da87');
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
      <audio loop className="piano" src={pianoMusic}></audio>
      <div className="cursor"></div>
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
      <div className="landing-z">
      <Switch>
          <Route path="/how-to-be-the-best-at-everything">
              <Blog1 showBlogAnimation={showBlogAnimation} removeBlogAnimation={removeBlogAnimation}/>
          </Route>
          <Route path="/">
             <Blogs landed={landed} handleBlogSelection={handleBlogSelection}/>
          </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
