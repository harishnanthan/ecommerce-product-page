let navButton = document.getElementById('navButton')
let navList = document.getElementById('navList')

let navClose = document.getElementById('navClose')

navButton.addEventListener('click', () => {
    navList.style.display = 'block'
})

navClose.addEventListener('click', () => {
    navList.style.display = 'none'
})

// add cart section
let count = 0
let add = document.getElementById('add')
let remove = document.getElementById('remove')
let ans = document.getElementById('ans')
ans.innerHTML = count

add.addEventListener('click', () => {
    ans.innerHTML = ++count
})
remove.addEventListener('click', () => {
    ans.innerHTML = --count
})

// model card

let modelCard = document.getElementById('modelCard')
let cartIcon = document.getElementById('cardIcon')

cartIcon.addEventListener('click', () => {
    modelCard.classList.toggle('model_card')
    modelCard.classList.toggle('active')
})

// thumbnail image
let showingImg = document.getElementById('showingImg')
let imgClose = document.getElementById('imgClose')
let shownImg = document.getElementById('shownImg')
let thumbnailImg = document.querySelectorAll("#thumnailImg")
console.log(thumbnailImg)
thumbnailImg.forEach((item) => {
    item.addEventListener('click', () => {
        showingImg.style.display = 'block'
        shownImg.src = item.src;
    })
})

imgClose.addEventListener('click', () => {
    showingImg.style.display = 'none'
})

// add to cart
let addCart = document.getElementById('addCart')
let totalPrice = document.getElementById('totalPrice')
addCart.addEventListener('click', () => {
    modelCard.classList.toggle('model_card')
    modelCard.classList.toggle('active')
    totalPrice.innerHTML = ans;
})

