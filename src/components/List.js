import React from 'react'
import "../styles/List.css"
import leftArrowIcon from "../assets/left-arrow-grey.svg"

function List({blogs, handleBlogSelection}) {
    return (
        <div  className="list">
            {blogs.map((title) =>  (
            <div onClick={() => handleBlogSelection(title.id, "how-to-be-the-best-at-everything")} data-index={title.id} className="list-item">
                <h1>{title.title}</h1>
                <span className="length">{title.duration} min read</span>
            </div>
            ))}
            <span>
                <img src={leftArrowIcon} alt="arrow icon"/>
                older
            </span>
        </div>
    )
}

export default List
