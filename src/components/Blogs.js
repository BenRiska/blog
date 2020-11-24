import React, {useState, useEffect} from 'react'
import "../styles/Blogs.css"
import gridLayoutIcon from "../assets/grid-layout.svg"
import vertLayoutIcon from "../assets/vert-layout.svg"
import expandIcon from "../assets/expand-arrow.svg"
import Grid from './Grid'
import List from './List'
import blogTitles from "../blogTitles.js"
import {openDropdownAnimation, closeDropdownAnimation, showGridItems, removeGridItems, showListItems, removeListItems, easeBookAnimation} from "../animations"


function Blogs({handleBlogSelection, landed}) {

    const [dropdown, setDropdown] = useState(false)
    const [topic, setTopic] = useState("All")
    const [grid, setGrid] = useState(false)
    const [gridIcon, setGridIcon] = useState(false)
    const [blogs, setBlogs] = useState(blogTitles)
    const [easeBook, setEaseBook] = useState(true)

    // shows content when landing animation is done
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

    // listens for when the list grid changes and triggers animation
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

    const handleDropdown = () => {
        if(dropdown){
            closeDropdownAnimation()
            setDropdown(false)
        } else{
            openDropdownAnimation()
            setDropdown(true)
        }
    }

    // handles blog selection
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

    // handles layout change
    const handleLayout = (newLayout) => {
        if(newLayout === "grid"){
            setGridIcon(true)
            removeListItems(e => setGrid(true))
        } else{
            setGridIcon(false)
            removeGridItems(e => setGrid(false))
        }
    }

    return (
        <>
        <div className="blogs">
            {/* toggle catagory and grid display*/}
            <div className="blog-toggle">
                <div className="blog-topics">
                    <span className="small-screen">You are reading</span>
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
            {/* blog list */}
            <div className="layout-container">
            {grid ? (<Grid handleBlogSelection={handleBlogSelection} blogs={blogs}/>) : (<List handleBlogSelection={handleBlogSelection} blogs={blogs}/>)}
            </div>
        </div>
        </>
    )
}

export default Blogs
