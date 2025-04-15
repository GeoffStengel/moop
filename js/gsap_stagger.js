
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

/*Controls Logo GSAP Animation START*/
gsap.from(".logo", {
    scale: 0.5, // Start at 50% size
    opacity: 0,
    duration: 3,
    delay: 0.2,
    ease: "elastic.out(1, 0.5)" // Elastic bounce effect
  });
/*Controls Logo GSAP Animation END*/

