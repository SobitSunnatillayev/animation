let headerCloud = document.querySelectorAll(".header__cloud")
let headerBoat = document.querySelector(".header__boat")
let headerFantasy = document.querySelector(".header__fantasy")

// headerCloud.forEach((clouds, i, array) => {
//     console.log(array[i]);
// });

window.addEventListener("scroll", () => {
    // console.log(this.scrollY);

    headerFantasy.style.objectPosition = `center ${this.scrollY / 10}%`

    const speed = +headerBoat.getAttribute("data-speed")

    headerBoat.style.transform = `translateX(${this.scrollY * speed}px)`

    headerCloud.forEach(clouds => {

        const speed = +clouds.getAttribute("data-speed")
        // console.log(speed);

        clouds.style.transform = `translateX(${this.scrollY * speed}px)`

    });
})

// run text

let headerTitle = document.querySelector(".header__title")
let fullText = headerTitle.innerHTML
let stop = 0

headerTitle.innerHTML = ""

function runText(x = 0) {
    headerTitle.innerHTML += fullText[x]
    x++

    stop = setTimeout(() => {
        runText(x)
    }, 200);

    if (x == 15) {
        clearTimeout(stop)
        headerTitle.classList.add("active")
    }

}

runText()

// run text

// parallax move

let parallaxBall = document.querySelectorAll(".parallax__ball")

window.addEventListener("mousemove", (event) => {
    // console.log(event.clientX / 50);
    // console.log(window.innerWidth);

    parallaxBall.forEach(balls => {

        const speed = balls.getAttribute("data-speed")

        const X = event.clientX / 50 * speed
        const Y = event.clientY / 50 * speed

        balls.style.transform = `translate(${X}px, ${Y}px)`
    })

})

// parallax move

// timer

let timer = document.querySelector(".timer")

let timerNum = document.querySelectorAll(".timer__num")

let stopTimer

function timerSet() {
    for (let i = 0; i < timerNum.length; i++) {

        const count = +timerNum[i].getAttribute("data-num")

        timerNum[i].innerHTML = 0

        function timerStart(x = 0) {
            x++
            timerNum[i].innerHTML = x

            stopTimer = setTimeout(() => {
                timerStart(x)
            }, 10);

            if (x == count) {
                clearTimeout(stopTimer)
            }
        }
        timerStart()
    }
}

// this.scrollY = 1329 + 609
// timer.offsetTop = 1938
// console.log(timer.clientHeight);
// console.log(timer.offsetHeight); 360
// console.log(timer.scrollHeight);

// this.scrollY + timer.offsetHeight

window.addEventListener("scroll", function scrollTimer() {
    // console.log(this.scrollY);
    // console.log(timer.offsetTop);
    // 1329 >= 1218
    if (this.scrollY >= timer.offsetTop - timer.offsetHeight * 2) {
        // timer.style.background = "red"
        timerSet()
        this.removeEventListener("scroll", scrollTimer)
    }

})

// timer

// bubble

let timerBtn = document.querySelectorAll(".timer__btn")

for (let i = 0; i < timerBtn.length; i++) {
    timerBtn[i].addEventListener("mousemove", (e) => {
        // timerBtn[i].innerHTML = e.pageX
        // timerBtn[i].innerHTML = e.pageX - timerBtn[i].offsetLeft

        const X = e.pageX - timerBtn[i].offsetLeft
        const Y = e.pageY - timerBtn[i].offsetTop

        timerBtn[i].style.setProperty("--x", `${X}px`)
        timerBtn[i].style.setProperty("--y", `${Y}px`)
    })
}

// bubble

// burger

let headerMenu = document.querySelector(".header__menu")
let headerMenuLine = document.querySelector(".header__menu-line")
let headerBurger = document.querySelector(".header__burger")

headerMenu.addEventListener("click", function () {
    headerMenuLine.classList.toggle("active")
    headerBurger.classList.toggle("active")
    // if (headerMenuLine.classList.contains("active")) {
    //     headerMenuLine.classList.remove("active")
    // } else {
    //     headerMenuLine.classList.add("active")
    // }
})

// burger

// scroll animate

let about = document.querySelector(".about")
let contacts = document.querySelector(".contacts")

// console.log(about.offsetTop);
// console.log(about.offsetHeight);
// console.log(about.offsetTop - about.offsetHeight * 2);

window.addEventListener("scroll", () => {
    // console.log(this.scrollY);
    fadeRight(about, 2)
    fadeRight(contacts, 2)
})

function fadeRight(section, coordinate) {
    let fadeRight = section.querySelectorAll(".fade-right")

    for (let i = 0; i < fadeRight.length; i++) {

        const speed = fadeRight[i].getAttribute("data-speed")

        fadeRight[i].style.transition = speed + "ms"

        if (this.scrollY >= section.offsetTop - section.offsetHeight * coordinate) {
            fadeRight[i].classList.add("active")
        } else {
            fadeRight[i].classList.remove("active")
        }
    }
}

// scroll animate

// 3D card

let card3DCard = document.querySelectorAll(".card3D__card")

for (let i = 0; i < card3DCard.length; i++) {
    card3DCard[i].addEventListener("mousemove", rotate)
    card3DCard[i].addEventListener("mouseout", rotateNone)
}

function rotate(e) {
    const X = (this.offsetHeight / 2 - e.offsetY) / 10
    const Y = (e.offsetX - this.offsetWidth / 2) / 10
    this.style.transform = `perspective(400px) rotateX(${X}deg) rotateY(${Y}deg)`
}

function rotateNone() {
    this.style.transform = `rotate(0)`
}

// 3D card
