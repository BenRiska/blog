import React, {useState, useEffect} from 'react'
import "../styles/Blogs.css"
import gridLayoutIcon from "../assets/grid-layout.svg"
import vertLayoutIcon from "../assets/vert-layout.svg"
import expandIcon from "../assets/expand-arrow.svg"
import {gsap} from "gsap"
import Grid from './Grid'
import List from './List'
import blogTitles from "../blogTitles.js"
import bookVid from "../assets/book.mov";



let tl = gsap.timeline();

const openDropdownAnimation = () => {tl.to(".underline", {
    duration: .4,
    width: "100px",
    height: "2px",
    ease: "expo.inOut"
}).to(".topics", {
    duration: .3,
    height: "160px",
    ease: "expo.inOut"
})}

const closeDropdownAnimation = () => {tl.to(".topics", {
    duration: .3,
    height: "0",
    ease: "expo.inOut"
}).to(".underline", {
    duration: .2,
    height: "1px",
    width: "100%",
    ease: "expo.inOut"
})}


const showGridItems = () => {tl.to(".grid-item", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power4.out",
    stagger: {
        amount: .7
      }
})}

const removeGridItems = (setList) => {tl.to(".grid-item", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: {
        amount: .7
      },
      onComplete: setList
})}

const showListItems = () => {tl.to(".list-item", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power4.out",
    stagger: {
        amount: .7
      }
}).to(".list > span", {
    duration: 0.5,
    opacity: 1,
    y: 0,
    ease: "power4.out",
})}

const removeListItems = (setGrid) => {tl.to(".list > span", {
    duration: .1,
    opacity: 0,
    y: 30,
    ease: "power4.out",
}).to(".list-item", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: {
        amount: .7
      },
      onComplete: setGrid
})}

const easeBookAnimation = () => {
    tl.from(".book, .blog-toggle", {
        duration: 2,
        opacity: 0,
        ease: "power4.out",
    })
}





function Blogs({handleBlogSelection, landed}) {

    const [dropdown, setDropdown] = useState(false)
    const [topic, setTopic] = useState("All")
    const [grid, setGrid] = useState(false)
    const [gridIcon, setGridIcon] = useState(false)
    const [blogs, setBlogs] = useState(blogTitles)
    const [easeBook, setEaseBook] = useState(true)

    const handleDropdown = () => {
        if(dropdown){
            closeDropdownAnimation()
            setDropdown(false)
        } else{
            openDropdownAnimation()
            setDropdown(true)
        }
    }

    useEffect(() => {
        if(landed){
        const blogToggle = document.querySelector(".blog-toggle") 
        const layout = document.querySelector(".layout-container")
            blogToggle.style.opacity = 1;
            blogToggle.style.zIndex = 1;
            layout.style.opacity = 1;
            layout.style.zIndex = 1;

        }
    }, [])

    const handleSelect = choice => {
        handleDropdown()
        setTopic(choice);
        let filteredBlogs = [];
        if(choice === "All"){
            filteredBlogs = blogTitles;
        } else{
        filteredBlogs = blogTitles.filter(blog => {
            let condition = false;
            blog.categories.forEach(cat => {
                if (cat.includes(choice)){
                    condition = true;
                }
            })
            return condition;
        })
    }
    grid === true ? removeGridItems(() => setBlogs(filteredBlogs)) : removeListItems(() => setBlogs(filteredBlogs));
    }

    const handleLayout = (newLayout) => {
        if(newLayout === "grid"){
            setGridIcon(true)
            removeListItems(e => setGrid(true))
        } else{
            setGridIcon(false)
            removeGridItems(e => setGrid(false))
        }
    }

    useEffect(() => {
        if(grid){
            if(easeBook){
                easeBookAnimation()
                setEaseBook(false)
            }
            showGridItems()
        } else{
            if(easeBook){
                easeBookAnimation()
                setEaseBook(false)
            }
            showListItems()
        }
    }, [grid, blogs])



    return (
        <>
        <video className="book" autoPlay muted  playsInline loop preload="none" >
                <source src={bookVid}  type="video/mp4"/>
             </video>
        <div className="blogs">
            
            <div className="blog-toggle landing-z">
                <div className="blog-topics">
                    <span>You are reading</span>
                    {" "}
                    <div onClick={handleDropdown} className="filter-wrap">
                        <div className="filter-aligner">
                        <span>{topic}</span>
                        <img src={expandIcon} alt="expand blog topics list"/>
                        </div>
                        <span className="underline"></span>
                        <ul className="topics">
                            <li onClick={() => handleSelect("All")} className={topic === "All" ? "selected" : null}>All</li>
                            <li onClick={() => handleSelect("Design")} className={topic === "Design" ? "selected" : null}>Design</li>
                            <li onClick={() => handleSelect("Living")} className={topic === "Living" ? "selected" : null}>Living</li>
                            <li onClick={() => handleSelect("Working")} className={topic === "Working" ? "selected" : null}>Working</li>
                        </ul>
                    </div>
                    {" "}
                    <span>blogs.</span>
                </div>
                <div className="blog-layout">
                    <img onClick={e => handleLayout("grid")} className={gridIcon ? "active" : null} src={gridLayoutIcon} alt="blog list toggle button"/>
                    <img onClick={e => handleLayout("list")} className={!gridIcon ? "active" : null} src={vertLayoutIcon} alt="blog list toggle button"/>
                </div>
            </div>
            <div className="layout-container landing-z">
            {grid ? (<Grid handleBlogSelection={handleBlogSelection} blogs={blogs}/>) : (<List handleBlogSelection={handleBlogSelection} blogs={blogs}/>)}
            </div>
        </div>
        </>
    )
}

export default Blogs
