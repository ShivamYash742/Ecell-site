console.log("running...");

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.addEventListener("click", () => {
    console.log("btnrunning...");
    let boxes = [...document.querySelectorAll('.box')];
    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'flex';
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
})

// <-----------------gallery carousels---------------------->
$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 3,             
        slidesToScroll: 1,          
        infinite: true,             
        autoplay: true,             
        autoplaySpeed: 0,           
        speed: 2000,               
        cssEase: 'linear',          
        arrows: false,             
        dots: false,
        responsive: [
            {
                breakpoint: 1024,   
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,    
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,    
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.ltrcarousel').slick({
        slidesToShow: 3,             
        slidesToScroll: 1,         
        infinite: true,             
        autoplay: true,             
        autoplaySpeed: 0,          
        speed: 3000,                
        cssEase: 'linear',         
        arrows: false,              
        dots: false,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,   
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,    
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,    
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// <-----------------Animations---------------->

// <-----------HamMenu--------------->
let ham = document.querySelector('.ham');
var htl = gsap.timeline()
htl.to(".hmenu", {
    left: 0,
    duration: 0.1,
})
htl.from(".head .hlogo", {
    y: 100,
    duration: 0.2,
    delay: 0.2,
    opacity: 0,
})
htl.from(".hbody ul li", {
    y: 80,
    stagger: 0.1,
    opacity: 0,
})
htl.pause()
ham.addEventListener('click', function () {
    htl.timeScale(1)
    htl.play()
});
let sham = document.querySelector(".cross");
sham.addEventListener('click', function () {
    htl.timeScale(3)
    htl.reverse()
});


// <--------------Navbar------------->
var navtl = gsap.timeline()
navtl.from("nav", {
    y: -200,
    duration: 1,
    delay: 3,
})
navtl.from(".navlogo", {
    y: 300,
    duration: 0.5,
})
navtl.from(".navlinks ul li", {
    y: -200,
    stagger: 0.2,
})

gsap.from("nav", {
    backgroundColor: "rgb(11, 11, 113,0)",
    // opacity:0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "body",
        start: "30% 10%",
        end: "90% 40%",
        scrub: 2,
    }
});

// <--------------heroSection------------->
let head = document.querySelector(".herosection h1")
let text = "EVENTS"
let text2 = text.split("")
section4head(text2);
function section4head(text) {
    text.forEach(e => {
        let elems = document.createElement("span")
        elems.classList.add("gsap")
        elems.innerText = e
        head.appendChild(elems)
    });
}
var herotl = gsap.timeline()
herotl.from(".heroOverlay", {
    opacity: 0,
    delay: 2.7,
    duration: 2
})
herotl.from(".gsap", {
    y: 200,
    duration: 0.5,
    stagger: 0.2,
})


// <--------------EventsSection------------->
const boxes = document.querySelectorAll(".box");
const boxState = new Map();
boxes.forEach((box) => {
    boxState.set(box, { number: 0, interval: null });
    box.addEventListener("mouseover", () => {
        const info = box.querySelector(".info");
        const regg = box.querySelector(".regg .counter");

        gsap.to(info, {
            ease: "expo.Out",
            top: 0,
        });
        const state = boxState.get(box);
        if (state.number !== 101 && regg && !state.interval) {
            state.interval = setInterval(() => {
                regg.innerText = `${state.number}+`;
                state.number++;

                if (state.number === 101) {
                    clearInterval(state.interval);
                    state.interval = null;
                }
            }, 20);
        }
    });
    box.addEventListener("mouseleave", () => {
        const info = box.querySelector(".info");
        gsap.to(info, {
            top: "100%",
        });
        const state = boxState.get(box);
        clearInterval(state.interval);
        state.interval = null;
        state.number = 0;
    });
});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "-20% 70%",
        end: "20% 60%",
        scrub: 2,
    }
});

tl.from(".container .box", {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
});


// <--------------Gallery------------->
gsap.from(".gallery h2", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".gallery",
        start: "-10% 80%",
        end: "-15% 70%",
        scrub: 4,
    }
})