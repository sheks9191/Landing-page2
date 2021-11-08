const products = document.products
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


let activeSlide = 0

setBgToProducts()

function setBgToProducts() {
    products.style.backgroundImage = slides[activeSlide].style.backgroundImage
}