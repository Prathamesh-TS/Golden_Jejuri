// window.addEventListener("wheel", function (dets) {
//     if (dets.deltaY > 0) {
//         gsap.to(".marquee", {
//             transform: 'translateX(-200%)',
//             duration: 4,
//             repeat: -1,
//             ease: "none"
//         })

//         gsap.to(".marquee img", {
//             rotate: 180
//         })
//     }
//     else {
//         gsap.to(".marquee", {
//             transform: 'translateX(0%)',
//             duration: 4,
//             repeat: -1,
//             ease: "none"
//         })

//         gsap.to(".marquee img", {
//             rotate: 0
//         })
//     }

// })

function page1animation() {
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        duration: 0.7,
        delay: 1,
        opacity: 0,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.6,
    })
    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4,
    })

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4,
    })

    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5
    }, "-=1")

    tl.from(".logos i", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.4,
    })
}
page1animation();


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end:"top -200%",
        scrub:1,
    }
})
tl2.from(".services", {
    y:30,
    opacity: 0,
    duration: 0.4,
})

tl2.from(".elem.line-1.left",{
    x:-300,
    opacity:0,
    duration:0.4,
},"first")
tl2.from(".elem.line-1.right",{
    x:300,
    opacity:0,
    duration:0.4,
},"first")

tl2.from(".elem.line-2.left",{
    x:-300,
    opacity:0,
    duration:0.4,
},"last")
tl2.from(".elem.line-2.right",{
    x:300,
    opacity:0,
    duration:0.4,
},"last")

tl2.from(".elem.line-3.left",{
    x:-300,
    opacity:0,
    duration:0.4,
},"first1")
tl2.from(".elem.line-3.right",{
    x:300,
    opacity:0,
    duration:0.4,
},"first1")

tl2.from(".elem.line-4.left",{
    x:-300,
    opacity:0,
    duration:0.4,
},"last2")
tl2.from(".elem.line-4.right",{
    x:300,
    opacity:0,
    duration:1,
},"last2")

