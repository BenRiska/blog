import React, {useState, useEffect} from 'react'
import "../styles/Blog.css"
import leftArrowIcon from "../assets/left-arrow-grey2.svg"
import leftArrowIconDark from "../assets/left-arrow-grey2-dark.svg"
import highwayPhoto from "../assets/highway.jpg";
import { useHistory } from "react-router-dom";
import sunIcon from "../assets/sun.svg"
import moonIcon from "../assets/moon-stars.svg"
import { FacebookButton, LinkedInButton } from "react-social";

function Blog1({darkMode, toggleDarkMode, showBlogAnimation, removeBlogAnimation}) {

    
    const [fontSize, setFontSize] = useState("medium")

    let history = useHistory();

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
        } else if(size ==="medium"){
            setFontSize(size)
            document.documentElement.style
            .setProperty('--blog-text', '22px');
            document.documentElement.style
            .setProperty('--blog-title-text', '36px');
            document.documentElement.style
            .setProperty('--blog-subtitle-text', '28px');
        } else if (size === "large"){
            setFontSize(size)
            document.documentElement.style
            .setProperty('--blog-text', '28px');
            document.documentElement.style
            .setProperty('--blog-title-text', '40px');
            document.documentElement.style
            .setProperty('--blog-subtitle-text', '34px');
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
            toggleDarkMode()
            slider.style.animation = "0.2s ease-in-out 0s 1 normal forwards running slider-animation-reverse"
    }
   }

   const pasteToClipboard = () => {
    const copyLink = document.querySelector(".blog-link");
    navigator.clipboard.writeText("hi");
    if (!copyLink.classList.contains("clicked")){
      copyLink.classList.add("clicked");
      setTimeout(() => {copyLink.classList.remove("clicked")}, 1000)
    }
  }

    return (
        <div className="blog-1 blog">
            
            <div className="options">
                <p onClick={e => {
                    darkMode && handleDarkMode()
                    handleFontChange("medium")
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
            <div className="blog-content">
            <div className="blog-container">
            <div className="blog-container-2">
            <div className="header">
                <div className="header-info">
                    <div className="header-topic">Designing</div>
                    <div className="header-time">5 min read</div>
                </div>
                <h1>How to be the best at everything</h1>
            </div>

            <div className="blog-body">

                <h2 className="blog-subtitle">1. Some kind of subtitle</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni eveniet rerum itaque minima, facere vero deserunt aliquam, repellendus aspernatur dolorem earum qui odio est suscipit ducimus aut officia eum?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi beatae est, doloremque blanditiis ipsum, cum iste alias, nostrum laboriosam officia suscipit deleniti consequuntur eveniet vero.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium a, eos nesciunt itaque tempora nostrum esse vel, explicabo, quasi sunt ullam at placeat adipisci inventore amet ipsam harum consequatur aliquam eligendi! Similique voluptate facilis sed!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt quisquam rem sapiente modi tempora animi esse aliquid velit dicta illo sint quia ullam numquam aliquam, aspernatur quos odio obcaecati, quidem reprehenderit autem accusamus. Dicta consequuntur veniam similique veritatis molestiae obcaecati iusto fugiat commodi officia laborum numquam sed, omnis corporis.</p>
                <h2 className="blog-subtitle">2. Some other subtitle</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sunt quis, laboriosam et adipisci magnam, saepe excepturi vel voluptas hic doloribus accusamus similique nisi cupiditate doloremque magni, repellat suscipit inventore soluta obcaecati! Veritatis dignissimos, quia quae, quasi veniam explicabo provident cum exercitationem ex saepe illum iste possimus fugit voluptatum non accusamus adipisci praesentium voluptas eligendi sed est autem? Temporibus tenetur esse labore a, eos ratione nisi ipsa sed, error dolores hic asperiores nihil sit cum delectus, ipsum quos mollitia optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint nostrum quae suscipit eligendi deserunt, quas illo facilis eos soluta reprehenderit repudiandae, nulla rem voluptatum dolor quis. Perferendis nemo, expedita veritatis nulla ab libero voluptatum corrupti inventore, facere quia facilis fuga quis? Deleniti tenetur voluptate quidem quam, dignissimos neque fugit dolorum rem voluptatibus! Ipsam alias exercitationem error pariatur aut quasi! Necessitatibus doloribus dignissimos quae veniam aliquid est facilis! Delectus repellendus beatae reprehenderit ad sint autem accusantium neque itaque quos. Iste!</p>
                <ul>
                <li><span>- </span> a great point</li>
                <li><span>- </span> another great point</li>
                <li><span>- </span> wow this guy is smart</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vero ut voluptatem unde minima quod, architecto, necessitatibus ad placeat quaerat sapiente esse sequi dolorum! Atque, facilis. Soluta explicabo ipsum libero!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis minus velit totam sed hic quod dolorum, doloremque tempora a eius placeat! Adipisci ex quod sapiente eum aliquid dignissimos nihil odio non, saepe ratione! Odio ducimus aut ea dicta commodi, ullam dolores veniam sit dolorem, voluptas expedita ut sequi ab consectetur est repudiandae omnis reiciendis et quo. Perspiciatis possimus corrupti magni tenetur omnis voluptatum ab fugit accusamus quidem esse. Sapiente, officia!</p>
            <img src={highwayPhoto} alt="highway"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A numquam placeat, hic repellat omnis iure tempora, sed recusandae ipsum nostrum sunt expedita temporibus quis corporis iste obcaecati neque cumque modi deserunt maxime eveniet ab dicta? Laborum nobis doloremque eveniet at veniam dolorum, dolores tempora nostrum, unde laudantium minima quasi modi.</p>
            <h2 className="blog-subtitle">3. Another subtitle</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti molestiae blanditiis esse quaerat, excepturi autem eius accusantium veniam ipsam voluptas fugiat quibusdam, aspernatur ea ad molestias officiis numquam a soluta iusto deserunt? Quia commodi obcaecati, quidem excepturi molestiae debitis!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quis vel, nesciunt provident ab rerum quod fuga voluptatum? Recusandae architecto corrupti magni ullam vero itaque voluptas magnam beatae temporibus voluptates inventore, in aliquid quo obcaecati quas illo reprehenderit distinctio dolorum dolorem voluptatem! Similique dolore, sequi in atque officiis saepe temporibus, amet voluptates itaque sit aperiam provident, possimus obcaecati fugiat aut!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe deserunt quisquam voluptatum, omnis illo nulla eveniet aliquid eius voluptatibus itaque animi vel reiciendis architecto magni perferendis atque iusto. Voluptate hic quod quae quas error dolores aperiam iure magnam laboriosam aliquid, in odio sed earum perferendis minus maxime ex necessitatibus aspernatur. Corrupti, facere. Cumque, illum dignissimos nobis dolore autem delectus doloribus unde, facilis quidem voluptas suscipit facere laudantium dicta aliquid, in sunt provident qui assumenda praesentium voluptatum doloremque maiores. Modi iste minima eveniet blanditiis sequi esse necessitatibus ipsam voluptatem reiciendis odio.</p>
            </div>
            <div className="blog-footer">
                <div className="footer-media">
                    <p>Enjoyed the read? share it for friends to see</p>
                    <div className="media-links">
                    <FacebookButton className="social-button" url={"https://portfolio-11585.web.app/"} appId={"209127063984746"}>
                    <div  className="insta"></div>
                    </FacebookButton>
                    <div onClick={pasteToClipboard}  className="copy-link blog-link">
                    </div>
                    <LinkedInButton className="social-button" url={"https://portfolio-11585.web.app/"} appId={"77kemmicouurck"}>
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
