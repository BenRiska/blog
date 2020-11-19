import React from 'react'
import "../styles/Blog.css"
import leftArrowIcon from "../assets/left-arrow-grey2.svg"

function Blog1({removeBlogAnimation}) {
    return (
        <div className="blog-1 blog">
            <div className="options">
                <p onClick={e => removeBlogAnimation(1)} className="back">
                    <img src={leftArrowIcon} alt="back icon"/> Back
                </p>
                <div className="option-controls">
                    <div className="font-size">
                        <span className="small-font">A</span>
                        <span className="medium-font selected">A</span>
                        <span className="large-font">A</span>
                    </div>
                    <div className="dark-mode"></div>
                </div>
            </div>
            <div className="header">
                <div className="header-info">
                    <div className="header-topic">Designing</div>
                    <div className="header-time">5 min read</div>
                </div>
                <h1>How to be the best at everything</h1>
            </div>
        </div>
    )
}

export default Blog1
