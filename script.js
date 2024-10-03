var right = document.querySelector(".right");
var cursor = document.querySelector(".cursor");

right.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x:dets.clientX,
        y:dets.clientY
    })
})

right.addEventListener("mouseleave", function (){
    gsap.to(".cursor", {
        opacity: 0,
        scale: 0
    })
})

right.addEventListener("mouseenter", function (){
    gsap.to(".cursor", {
        opacity: 1,
        scale: 1
    })
})