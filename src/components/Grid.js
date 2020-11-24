import React from 'react'
import "../styles/Grid.css"

function Grid({blogs, handleBlogSelection}) {

    return ( 
        <div className="grid">
            {blogs.map((title) =>  {
                if(title.placeholder){
                    return <div data-index={title.id} className="grid-item">
                                <h1 style={{textDecoration: "line-through"}}>Work in progress.</h1>
                                <span className="loader-bar"><span></span></span>
                                <p className="categories">coming soon</p>
                            </div>
                } else{  
                return <div onClick={() => handleBlogSelection(title.id,  "how-to-be-the-best-at-everything")} data-index={title.id} className="grid-item">
                            <h1>{title.title}</h1>
                            <span className="loader-bar"><span></span></span>
                            <p className="categories">{title.categories.join(", ")}.</p>
                            <div className="small-text">
                                <span className="date">{title.uploaded}</span>
                                <span className="length">{title.duration} min read</span>
                            </div>
                        </div>
                }
            })}
            
        </div>
    )
}

export default Grid
