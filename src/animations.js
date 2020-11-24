import gsap from "gsap"

let tl = gsap.timeline();

export const homeAnimation = () => {
    tl.to(".landing", {
      opacity: 0,
      duration: 0.9,
      ease: "expo.inOut",
      zIndex: -1,
      
    })
  }
  
  export const prepBlogAnimation = (showBlog) => {
    tl.to(".blogs", {
      y: -200,
      duration: 1.2,
      opacity: 0,
      ease: "power4.out",
      transformOrigin: "top center",
      onComplete: showBlog
    })
  }
  
  
  export const showBlogAnimation = (blog) => {
    tl.to(`.blog-${blog}`, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out"
    })
  }
  
  export const removeBlogAnimation = (blog, f) => {
    tl.to(`.blog-${blog}`, {
      duration: 1,
      opacity: 0,
      y: 200,
      onComplete: f
    })
  }
  
  export const removeContactText = (f) => {
    tl.to(`.blogs, .say-hi`, {
      duration: 1,
      opacity: 0,
      onComplete: f
    })
  }
  
  export const removeContactSection = (f) => {
    tl.to(`.contact, .contact-exit`, {
      duration: 1,
      opacity: 0,
      onComplete: f
    })
  }
  
  
  export const removeContactBlogText = (blog, f) => {
    tl.to(`.blog-${blog}, .say-hi`, {
      duration: 1,
      opacity: 0,
      onComplete: f
    })
  }

export const showContents = () => {
    tl.to(".contact, .contact-exit", {
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
        amount: .7
      }
})}

export const removeGridItems = (setList) => {tl.to(".grid-item", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: {
        amount: .7
      },
      onComplete: setList
})}

export const showListItems = () => {tl.to(".list-item", {
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

export const removeListItems = (setGrid) => {tl.to(".list > span", {
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

export const easeBookAnimation = () => {
    tl.from(".book, .blog-toggle", {
        duration: 2,
        opacity: 0,
        ease: "power4.out",
    })
}