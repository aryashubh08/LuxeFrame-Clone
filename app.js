// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

Shery.mouseFollower();

// magenetEffect **********************
Shery.makeMagnet("nav i,.page1-bottom .btn" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// pageOneEffect **********************
Shery.hoverWithMediaCircle(".page1 h1>.span" /* Element to target.*/, {
  images: [
    "https://i.pinimg.com/originals/e8/d9/1c/e8d91c4030d556ee139f3b891ba8c25a.gif",
    "https://i.pinimg.com/originals/d6/d4/56/d6d4567643c7e5571927515dd60ffdf8.gif",
    "https://i.pinimg.com/originals/a9/60/e6/a960e6362dc2e914a7ccbd8ca0047e7b.gif",
    "https://i.pinimg.com/originals/7e/4c/54/7e4c544cc8870b674ec0c7501c7d7819.gif",
    "https://i.pinimg.com/originals/e4/2f/b5/e42fb51d21c040ec9b775a0f1f853632.gif",
    "https://i.pinimg.com/originals/cc/12/9a/cc129ac21721298528003ee63e6d4491.gif",
  ] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});

// pageTwo ***************************

gsap.from(".page2 h2", {
  x: -100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    // markers: true,
    start: "10% 50%",
    end: "100% 90%",
    scrub: 1,
  },
});

// pageThree ***************************
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "-50% 20%",
    end: "10% 40%",
    scrub: 2,
    // markers: true,
  },
});
tl.from(
  ".page3-img-1",
  {
    y: "100%",
    duration: 0.8,
  },
  "s"
);
tl.from(
  ".page3-img-2",
  {
    y: "100%",
    duration: 0.8,
    delay: 0.2,
  },
  "s"
);

// pageFour***********************
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4",
    start: "-50% 20%",
    end: "10% 40%",
    scrub: 2,
    // markers: true,
  },
});
tl.from(
  ".page4-img-1",
  {
    y: "100%",
    duration: 0.8,
  },
  "s"
);
tl.from(
  ".page4-img-2",
  {
    y: "100%",
    duration: 0.8,
    delay: 0.2,
  },
  "s"
);
tl.from(
  ".page4-img-3",
  {
    y: "100%",
    duration: 0.8,
    delay: -0.3,
  },
  "s"
);

// pageFive***********************
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page5",
    start: "-50% 20%",
    end: "10% 40%",
    scrub: 2,
    // markers: true,
  },
});
tl.from(
  ".page5-img-1",
  {
    y: "100%",
    duration: 0.8,
    delay: 0.3,
  },
  "s"
);
tl.from(
  ".page5-img-2",
  {
    y: "100%",
    duration: 0.8,
  },
  "s"
);

// pageSix ***********

Shery.makeMagnet(".page6 button" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
// pageSeven******************
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    start: "0% 50%",
    end: "100% 50%",
    // markers: true,
    scrub: 1,
  },
});
tl.to(
  "#one",
  {
    x: "-400px",
    rotate: -30,
  },
  "a"
);
tl.to(
  "#three",
  {
    x: "400px",
    rotate: 30,
  },
  "a"
);

tl.to(
  "#two",
  {
    x: "-400px",
    rotate: -30,
    delay: -0.5,
  },
  "b"
);
tl.to(
  "#four",
  {
    x: "400px",
    rotate: 30,
    delay: -0.5,
  },
  "b"
);
tl.from(
  ".back h1",
  {
    y: 100,
    opacity: 0,
    delay: 0.2,
  },
  "a"
);
tl.from(
  ".back button",
  {
    y: 100,
    opacity: 0,
    delay: 0.2,
  },
  "a"
);

// pageEight***********************

tl.from(".page8-top .right-top", {
  y: 100,
  duration: 1.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".right-top",
    // markers: true,
    start: "0% 70%",
    end: "100% 0%",
    scrub: 1,
  },
});
tl.from(".page8-bottom h2", {
  x: -100,
  duration: 1.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page8-bottom h2",
    // markers: true,
    start: "-50% 50%",
    end: "80% 50%",
    scrub: 1,
  },
});

// pageNine********************
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
