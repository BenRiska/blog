import React, {useState, useEffect} from 'react'
import "../styles/Blog.css"
import leftArrowIcon from "../assets/left-arrow-grey2.svg"
import leftArrowIconDark from "../assets/left-arrow-grey2-dark.svg"
import uxPhoto from "../assets/ux-picture.jpg";
import processPhoto from "../assets/ux-process.jpg";
import manPhoto from "../assets/ux-man.jpg";
import { useHistory } from "react-router-dom";
import sunIcon from "../assets/sun.svg"
import moonIcon from "../assets/moon-stars.svg"
import { FacebookButton, LinkedInButton } from "react-social";

function Blog1({darkMode, toggleDarkMode, showBlogAnimation, removeBlogAnimation}) {

    const [fontSize, setFontSize] = useState("medium")
    let history = useHistory();

    // show blog animation on component mount
    useEffect(() => {
        showBlogAnimation(1)
    }, [])

    const handleFontChange = (size) => {
        if(size === "small"){
            setFontSize(size)
            document.documentElement.style
            .setProperty('--blog-text', '16px');
            document.documentElement.style
            .setProperty('--blog-title-text', '30px');
            document.documentElement.style
            .setProperty('--blog-subtitle-text', '24px');
            document.documentElement.style
            .setProperty('--blog-subtitle-small-text', '20px');
            document.documentElement.style
            .setProperty('--blog-padding', '1rem 0');
        } else if(size ==="medium"){
            setFontSize(size)
            document.documentElement.style
            .setProperty('--blog-text', '22px');
            document.documentElement.style
            .setProperty('--blog-title-text', '36px');
            document.documentElement.style
            .setProperty('--blog-subtitle-text', '28px');
            document.documentElement.style
            .setProperty('--blog-subtitle-small-text', '26px');
            document.documentElement.style
            .setProperty('--blog-padding', '1.4rem 0');
        } else if (size === "large"){
            setFontSize(size)
            document.documentElement.style
            .setProperty('--blog-text', '28px');
            document.documentElement.style
            .setProperty('--blog-title-text', '40px');
            document.documentElement.style
            .setProperty('--blog-subtitle-text', '34px');
            document.documentElement.style
            .setProperty('--blog-subtitle-small-text', '30px');
            document.documentElement.style
            .setProperty('--blog-padding', '1.8rem 0');
        }
    }

   const  handleDarkMode = () => {
       const slider = document.querySelector(".slider")
    if(!darkMode){
        document.documentElement.style
            .setProperty('--bg', '#162039');
        document.documentElement.style
            .setProperty('--normal-text-color', 'white');
        document.documentElement.style
            .setProperty('--text', 'white');
        document.documentElement.style
            .setProperty('--card-bg', 'rgb(30, 30, 30)');
            document.documentElement.style
            .setProperty('--border-color', 'rgba(255,255,255, 0.1)');
            toggleDarkMode()
            slider.style.animation = "0.2s ease-in-out 0s 1 normal forwards running slider-animation"
    } else{
        document.documentElement.style
            .setProperty('--bg', 'white');
        document.documentElement.style
            .setProperty('--normal-text-color', 'black');
        document.documentElement.style
            .setProperty('--text', 'black');
        document.documentElement.style
            .setProperty('--card-bg', 'white');
            document.documentElement.style
            .setProperty('--border-color', 'rgba(0,0,0, 0.1)');
            toggleDarkMode()
            slider.style.animation = "0.2s ease-in-out 0s 1 normal forwards running slider-animation-reverse"
    }
   }

   const pasteToClipboard = () => {
    const copyLink = document.querySelector(".blog-link");
    navigator.clipboard.writeText("https://blog-6a15f.web.app/how-to-be-the-best-at-everything");
    if (!copyLink.classList.contains("clicked")){
      copyLink.classList.add("clicked");
      setTimeout(() => {copyLink.classList.remove("clicked")}, 1000)
    }
  }

    return (
        <div className="blog-1 blog">
            {/* options for font size & dark mode*/}
            <div className="options">
                <p onClick={e => {
                    darkMode && handleDarkMode()
                    removeBlogAnimation(1, () => setTimeout(() => history.push("/"), 1000))
                    }} className="back">
                    <img src={darkMode ? leftArrowIconDark : leftArrowIcon} alt="back icon"/> Back
                </p>
                <div className="option-controls">
                    <div className="font-size">
                        <span onClick={()=> handleFontChange("small")} className={fontSize === "small" ? "small-font selected" : "small-font"}>A</span>
                        <span onClick={()=> handleFontChange("medium")}  className={fontSize === "medium" ? "medium-font selected" : "medium-font"}>A</span>
                        <span onClick={()=> handleFontChange("large")}  className={fontSize === "large" ? "large-font selected" : "large-font"}>A</span>
                    </div>
                    <div onClick={handleDarkMode} className="dark-mode">
                        <div className={darkMode ? "slider dark" : "slider light"}>
                            <img className="sun" src={sunIcon} alt="light mode icon"/>
                            <img className="moon" src={moonIcon} alt="light mode icon"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* blog content with containers to allow fullscreen scrolling while restricting width on absolute element*/}
            <div className="blog-content">
            <div className="blog-container">
            <div className="blog-container-2">
            <div className="header">
                <div className="header-info">
                    <div className="header-topic">Designing</div>
                    <div className="header-time">4 min read</div>
                </div>
                <h1>What is UX and why is it so important</h1>
            </div>
            <div className="blog-body">
                <img src={uxPhoto} alt="highway"/>
                <h2 className="blog-subtitle">- What is UX?</h2>
                <p>User experience or UX is defined as any interaction a user makes with a product or service - so while the term UX generally refers to software design - the core principles behind it can be applied to basically any commercial product or service. </p>
                <p>A UX designer will take into consideration each and every element involved that helps in shaping the experience, how it makes the user feel and how easy it is to reach their desired outcome. These are topics of increasing concern among software developers as just having a pretty interface won’t retain customers if they struggle to navigate through the product.</p>
                <p>Put simply, the aim of UX design is to build easy, efficient, relevant and a pleasing experience for the user. UX designers will integrate market research, strategy, product development, and design to build user experiences for products, services and processes - acting as a bridge to the customer to understand and meet their expectations.</p>
                <img src={processPhoto} alt="highway"/>
                <h2 className="blog-subtitle">- The UX process explained</h2>
                <p>The designers aim to make daily products, services and technology as much user friendly and accessible as they can. They integrate design thinking to meet the user desires with technical feasibility and business viability. So what does the process look like? Here is an example:</p>
                <h2 className="blog-subtitle-small">Inspiration</h2>
                <p>It’s tough to figure out how the user will react to a product for the first time, so how do we get around that? use your competition! Do your research and analyse what works best for them - you want to understand the problem or challenge completely.</p>
                <h2 className="blog-subtitle-small">Conceptualization</h2>
                <p>The knowledge gained from the previous step is used to determine the user goals, emotions, pain points as well as behaviours. This helps in building user personas. Then the designers consider what these personas are trying to attain with the help of a specific product. By the end of this step you should have your user flows mapped out and ready to turn into a prototype.</p>
                <h2 className="blog-subtitle-small">Iteration</h2>
                <p>Now you have your user flows that will determine what steps the user will take to accomplish their tasks. Here brainstorming is involved for every step, by creating wireframes and prototypes for what the final product may look like. With the prototypes available, you can conduct usability tests to check how the user interacts with your product. Take your results and decide if further changes are required - repeating the process until happy. </p>
                <h2 className="blog-subtitle-small">Exposition</h2>
                <p>The designers come up with solutions as well as they also need to present their ideas and designs for proceeding with the stages ahead.</p>
                <img src={manPhoto} alt="highway"/>
                <h2 className="blog-subtitle">The best UX designers are: </h2>
                <ul>
                <li><span>- </span> Adept at creating user personas, stories, wireframes, sitemaps, storyboards, and prototypes</li>
                <li><span>- </span> Able to plan and implement user testing, surveys and formal evaluation</li>
                <li><span>- </span> Able to iterate your tasks according to user testing data and qualitative feedback</li>
                <li><span>- </span> Adept with the interaction design principles and information architecture</li>
                <li><span>- </span> Able to transform goals, objectives and data into digital experiences</li>
            </ul>
            <h2 className="blog-subtitle">- Why UX is so important</h2>
            <p>Lately, the focus of product creation has shifted to user centered design. Gone are the days when a pretty UI was all you needed to attract clients on the web. The focus was mainly on the aesthetics and branding rather than how the user would feel about it. This is because, they centered on what looked good back then, and what the clients wanted.</p>
            <p>But the web is changing, it has become more complex and loaded with features that must bear great user experience design by all means. Also the mediums through which we experience the web has expanded - to mobile devices, multiple browsers, and various types of internet connections.</p>
            <p>No matter what the factors, the only way to stand in the market is by taking the user into consideration for your product.</p>
            </div>
            <div className="blog-footer">
                <div className="footer-media">
                    <p>Enjoyed the read? share it for friends to see</p>
                    <div className="media-links">
                    <FacebookButton className="social-button" url={"https://blog-6a15f.web.app/what-is-ux-and-why-is-it-so-important"} appId={"209127063984746"}>
                    <div  className="twitter"></div>
                    </FacebookButton>
                    <div onClick={pasteToClipboard}  className="copy-link blog-link">
                    </div>
                    <LinkedInButton className="social-button" url={"https://blog-6a15f.web.app/what-is-ux-and-why-is-it-so-important"} appId={"77kemmicouurck"}>
                    <div  className="linkedin">
                    </div>
                    </LinkedInButton>
                    </div>
                </div>
                <div className="footer-read-more">
                    Thanks for reading.
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Blog1
