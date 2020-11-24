import gsap from "gsap"

let tl = gsap.timeline();

export const homeAnimation = (f) => {
    tl.to(".landing", {
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      zIndex: -1,
      onComplete: f
    })
  }

  export const easeBlogs = () => {
    tl.to(".blogs", {
      opacity: 1,
      duration: .5,
      y: 0,
      ease: "power4.out",
    })
  }
  
  export const prepBlogAnimation = (showBlog) => {
    tl.to(".blog-topics, .blog-layout, .layout-container", {
      y: -10,
      duration: 1,
      opacity: 0,
      ease: "power4.out",
      transformOrigin: "top center",
      stagger: {
        amount: 0.3
      },
      onComplete: showBlog
    })
  }
  
  
  export const showBlogAnimation = (blog) => {
    tl.to(`.options > p, .option-controls, .header, .blog-body, .blog-footer`, {
      duration: 0.7,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 1
      },
    })
  }
  
  export const removeBlogAnimation = (blog, f) => {
    tl.to(`.back, .option-controls, .header, .blog-body, .blog-footer`, {
      duration: 0.5,
      opacity: 0,
      y: -10,
      ease: "power4.out",
      stagger: {
        amount: .5
      },
      onComplete: f
    })
  }
  
  export const removeContactText = (f) => {
    tl.to(`.blogs, .say-hi, .share`, {
      duration: 1,
      opacity: 0,
      onComplete: f
    })
  }
  
  export const removeContactSection = (f) => {
    tl.to(`.contact, .contact-exit, .share`, {
      duration: 1,
      opacity: 0,
      onComplete: f
    })
  }
  
  
  export const removeContactBlogText = (blog, f) => {
    tl.to(`.blog-${blog}, .say-hi, .share`, {
      duration: 1,
      opacity: 0,
      onComplete: f
    })
  }

export const showContents = () => {
    tl.to(".contact, .contact-exit > img", {
        duration: 3,
        opacity: 1,
    })
}


export const openDropdownAnimation = () => {tl.to(".underline", {
    duration: .4,
    width: "100px",
    height: "2px",
    ease: "expo.inOut"
}).to(".topics", {
    duration: .3,
    height: "160px",
    ease: "expo.inOut"
})}

export const closeDropdownAnimation = () => {tl.to(".topics", {
    duration: .3,
    height: "0",
    ease: "expo.inOut"
}).to(".underline", {
    duration: .2,
    height: "1px",
    width: "100%",
    ease: "expo.inOut"
})}


export const showGridItems = () => {tl.to(".grid-item", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power4.out",
    stagger: {
        amount: 1
      }
})}

export const removeGridItems = (setList) => {tl.to(".grid-item", {
    duration: 1,
    opacity: 0,
    y: -30,
    ease: "power4.out",
    stagger: {
        amount: 1
      },
      onComplete: setList
})}

export const showListItems = () => {tl.to(".list-item, .list > span", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power4.out",
    stagger: {
        amount: 1
      }
})}

export const removeListItems = (setGrid) => {tl.to(".list > span, .list-item", {
    duration: 1,
    opacity: 0,
    y: -30,
    ease: "power4.out",
    stagger: {
        amount: 1
      },
      onComplete: setGrid
})}
