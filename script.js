const sliderItems = document.querySelectorAll('.slider-item')
const sliderBox = document.querySelector('.slider-box')
const slideText = document.querySelector('.slide-text span')
const radiosBox = document.querySelector('.radios')
const pauseBtn = document.querySelector('.pause i')
let sliderCount = 0
slideText.innerHTML = sliderCount + 1
function setSlide(box, text, slideNumber) {
    text.innerHTML = slideNumber + 1
    box.style.transform = `translateX(${-100 * slideNumber}%)`
    setActiveRadio()
}
function setActiveRadio() {
    const radios = radiosBox.querySelectorAll('button')
    radios.forEach(radio => {
        if (radio.dataset.child == sliderCount) {
            radio.classList.add('active-radio')
        } else {
            radio.classList.remove('active-radio')
        }
    })
}
function rightBorder() {
    if (sliderCount < sliderItems.length-1 ) {
        sliderCount += 1
    } else {
        sliderCount = 0
    }
}
function leftBorder() {
    if (sliderCount > 0) {
        sliderCount -= 1
    } else {
        sliderCount = sliderItems.length - 1
    }
}

function stopSlider() {
    startSlider = false
    pauseBtn.classList = ['bx bx-play']
    // setTimeout(() => {
    //     startSlider = true
    //     pauseBtn.classList = ['bx bx-pause']
    // }, 5000)
    clearInterval(id)
}

sliderItems.forEach((item, index) => {
    item.style.transform = `translateX(${100 * index}%) translateY(${-100 * index}%)`
    const radio = document.createElement('button')
    radio.innerHTML = index + 1
    radio.setAttribute('data-child', index)
    radiosBox.appendChild(radio)
})

document.querySelector('.right').addEventListener('click', () => {
    rightBorder()
    setSlide(sliderBox, slideText, sliderCount)

})

document.querySelector('.left').addEventListener('click', () => {
    leftBorder()
    setSlide(sliderBox, slideText, sliderCount)
})

radiosBox.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        sliderCount = +e.target.dataset.child
        setSlide(sliderBox, slideText, +e.target.dataset.child)
        setActiveRadio()
    }
})
pauseBtn.addEventListener('click', (e) => {
    // clearInterval(id)
    startSlider = !startSlider
    if (startSlider) {
        e.target.classList = ['bx bx-pause']
    } else {
        e.target.classList = ['bx bx-play']
    }
})
setActiveRadio()
let startSlider = true
// let id = setInterval(() => {
//     if (startSlider) {
//         rightBorder()
//         setSlide(sliderBox, slideText, sliderCount)
//     }
// }, 1500)

document.addEventListener('keydown', e => {
    if (e.key == 'ArrowLeft') {
        leftBorder()
        setSlide(sliderBox, slideText, sliderCount)
    } else if (e.key == 'ArrowRight') {
        rightBorder()
        setSlide(sliderBox, slideText, sliderCount)
    }
})