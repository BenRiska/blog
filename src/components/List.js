import React from 'react'
import "../styles/List.css"
import leftArrowIcon from "../assets/left-arrow-grey.svg"

function List({blogs, handleBlogSelection}) {
    return (
        <div  className="list">
            {blogs.map((title) =>  {
                if(title.placeholder){
                    return <div key={title.id} data-index={title.id} className="list-item">
                    <h1 style={{textDecoration: "line-through", color: "grey"}}>Work in progress.</h1>
                    <span className="length">Coming soon.</span>
                    </div>
                }
                else{
                    return <div key={title.id} onClick={() => handleBlogSelection(title.id, title.url)} data-index={title.id} className="list-item">
                    <h1>{title.title}</h1>
                    <span className="length">{title.duration} min read</span>
                    </div>
                }
            })}
        </div>
    )
}

export default List
