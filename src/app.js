var scrollUp = document.querySelector('.scroll-up')
window.onscroll = function () {
    if (window.scrollY > 100) {
        scrollUp.classList.add('show')
    } else {
        scrollUp.classList.remove('show')
    }
}

//slider
var index = 1;
var slide = document.querySelector('.banner-list img')
var nextBtn = document.querySelector('.next-btn');
var prevBtn = document.querySelector('.prev-btn');
console.log(nextBtn, prevBtn);

function nextSlider() {
    index++;
    if (index > 4) index = 1
    slide.src = `./img/banner/slide${index}.png`
}

function prevSlider() {
    index--;
    if (index < 1) index = 4
    slide.src = `./img/banner/slide${index}.png`
}

nextBtn.onclick = () => {
    nextSlider()
}

prevBtn.onclick = () => {
    prevSlider()
}

var slideBtn = document.querySelectorAll('.slide-btn ul li')
slideBtn.forEach((btn, i) => {
    btn.onclick = () => {
        slide.src = `./img/banner/slide${i + 1}.png`
    }
})