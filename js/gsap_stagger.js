
/*Controls Social Links Animation START*/
gsap.from(".social_links", {
    y: -100,
    duration: 1,
    ease: 'back.out',
    opacity: 0,
    stagger: {
        each: 0.1
    }
}) 
/*Controls Social Links Animation END*/

/*Controls H1 Animation START*/
gsap.from("h1", {
    y: -100,
    duration: 1,
    opacity: 0,
    delay: .2,
    ease: 'back.out'
}) 
/*Controls H1 Animation END*/