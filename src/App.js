import './App.css';
import Landing from "./components/Landing";
import {useEffect, useState} from "react"
import Cursor from "./cursor"
import yellowCursor from "./assets/yellow-cursor.svg";
import whiteIcon from "./assets/white-icon.svg"
import darkIcon from "./assets/dark-mode-icon.svg"
import soundIcon from "./assets/sound.svg"
import darkSoundIcon from "./assets/darkSound.svg"
import pianoMusic from "./assets/Magical-Piano-Version.mp3"
import Blogs from "./components/Blogs";
import Blog1 from "./components/Blog1";
import { Switch, Route, useHistory } from "react-router-dom";
import {homeAnimation, prepBlogAnimation, showBlogAnimation, removeBlogAnimation} from "./animations"




function App() {

  const [landed, setLanded] = useState(false);
  const [music, setMusic] = useState(false);
  const [darkMode, setDarkMode] = useState(false)
  const [contactView, setContactView] = useState(false)
  const [blogView, setBlogView] = useState(false)
  const [blog, setBlog] = useState(false)
  let history = useHistory();


  // initiates cursor on page load
  useEffect(() => {
    new Cursor(document.querySelector(".cursor"));
    setTimeout(() => {
      if(!landed){
      autoLandAnimation()}
    },3000)
  }, [])

  // checks if music should be playing 
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

  const toggleDarkMode = () => {
    const app = document.querySelector(".App")
    if(darkMode === true){
      app.classList.remove("dark")
    } else{
      app.classList.add("dark")
    }
    setDarkMode(!darkMode)

  }

  const playMusic = () => {
    setMusic(true);
  }

  // prepBlogAnimation triggers blog url push on completion
  const handleBlogSelection = (blogId, blogName) => {
    prepBlogAnimation(e => history.push(`/${blogName}`))
    setBlog(blogId)
    setBlogView(true)
  }

  // gets rid of landing screen
  const autoLandAnimation = () => {
    setLanded(true)
    const body = document.querySelector("body");
    const mainContent = document.querySelector(".landing-z") 
    homeAnimation(() => {
        mainContent.style.zIndex = 1;
        mainContent.style.opacity = 1;
      })
      body.style.cursor = `url(${yellowCursor}), default`;
      document.documentElement.style
                .setProperty('--cursor-ring', '#f2da87');
  }

  const pasteToClipboard = () => {
    const copyLink = document.querySelector(".copy-link");
    navigator.clipboard.writeText("https://blog-6a15f.web.app/");
    if (!copyLink.classList.contains("clicked")){
      copyLink.classList.add("clicked");
      setTimeout(() => {copyLink.classList.remove("clicked")}, 1000)
    }
  }


  return (
    <>
    <div className="cursor"></div>
    <div className="App">
      {/* landing page */}
      <Landing playMusic={playMusic} landAnimation={autoLandAnimation}/>
      {/* main page */}
      <div className="landing-z">
        {/* absolute positioned icons */}
        <div className="logo">
          <img src={darkMode ? darkIcon : whiteIcon} alt="main page icon" className="white-icon"/>
          <img src={darkMode ? darkSoundIcon : soundIcon} onClick={() => setMusic(!music)} alt="main page icon" className="sound-icon"/>
        </div>
        <audio loop className="piano" src={pianoMusic}></audio>

        <div className="socials">
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/featurefield/?hl=en" className="insta">
            </a>
            <div onClick={pasteToClipboard} className="copy-link">
            </div>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/feed/" className="linkedin">
            </a>
        </div>

      <span className="say-hi static-link"><a rel="noreferrer" target="_blank" href="https://portfolio-11585.web.app/">say hi.</a> </span>

        <span className="portfolio static-link">
            <a rel="noreferrer" target="_blank" href="https://portfolio-11585.web.app/">portfolio.</a>
        </span>

        <span className="github static-link">
            <a rel="noreferrer" target="_blank" href="https://github.com/BenRiska">github.</a>
        </span>

        {/* main content - handled by router*/}

        <Switch>
            <Route path="/how-to-be-the-best-at-everything">
                <Blog1 darkMode={darkMode} toggleDarkMode={toggleDarkMode} showBlogAnimation={showBlogAnimation} removeBlogAnimation={removeBlogAnimation}/>
            </Route>

            <Route path="/">
              <Blogs landed={landed} handleBlogSelection={handleBlogSelection}/>
            </Route>
        </Switch>
      </div>
    </div>
    </>
  );
}

export default App;
