window.addEventListener("wheel", function (event) {
    const marqueeElements = document.querySelectorAll(".marquee");
    const marqueeImages = document.querySelectorAll(".marquee img");

    const direction = event.deltaY > 0 ? -200 : 0;
    const rotateValue = event.deltaY > 0 ? 180 : 0;

    // Animating Marquee
    gsap.to(marqueeElements, {
        transform: `translateX(${direction}%)`,
        duration: 4,
        repeat: -1,
        ease: "none"
    });

    gsap.to(marqueeImages, {
        rotate: rotateValue
    });
});

// Initial Page Animation
function page1Animation() {
    const tl = gsap.timeline();
    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        duration: 0.7,
        delay: 1,
        opacity: 0,
        stagger: 0.15
    });
    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.6
    });
    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4
    });
    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    });
    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5
    }, "-=1");
    tl.from(".logos i", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.4
    });
}

page1Animation();

// Scroll-triggered Animation for Services
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 50%",
        end: "top -200%",
        scrub: 1
    }
});

tl2.from(".services", { y: 30, opacity: 0, duration: 0.4 })
   .from(".elem.line-1.left", { x: -300, opacity: 0, duration: 0.4 }, "first")
   .from(".elem.line-1.right", { x: 300, opacity: 0, duration: 0.4 }, "first")
   .from(".elem.line-2.left", { x: -300, opacity: 0, duration: 0.4 }, "last")
   .from(".elem.line-2.right", { x: 300, opacity: 0, duration: 0.4 }, "last")
   .from(".elem.line-3.left", { x: -300, opacity: 0, duration: 0.4 }, "first1")
   .from(".elem.line-3.right", { x: 300, opacity: 0, duration: 0.4 }, "first1")
   .from(".elem.line-4.left", { x: -300, opacity: 0, duration: 0.4 }, "last2")
   .from(".elem.line-4.right", { x: 300, opacity: 0, duration: 1 }, "last2");
   const carousel = document.querySelector('.carousel');
   const slides = document.querySelectorAll('.carousel-slide');
   let currentIndex = 0;
   
   // Auto-carousel function
//    function moveCarousel() {
//      currentIndex++;
//      if (currentIndex >= slides.length) {
//        currentIndex = 0;
//      }
//      const offset = currentIndex * -100;
//      carousel.style.transform = `translateX(${offset}%)`;
//    }
   
//    // Start the carousel
//    setInterval(moveCarousel, 3000);

//    const tl3 = gsap.timeline();


//    //Image Gallery Animation

//    function galleryAnimate(){

//    tl3.to(".image-content .slide" , {
//         x: "-200%",
//         duration:30,
//         stagger: 0.15,
//         ease:"none",
//         repeat:-1,

//    })
// }

// galleryAnimate();

