let button = document.getElementById('button')
let overflow = document.getElementById('overflow')
let overlay = document.getElementById('overlay')
let close = document.getElementById('close')
let menu = document.getElementById('menu')
let navbar = document.getElementById('navbar')
let n = 1
menu.onclick = function (){
    if (n === 1){
        navbar.style.right = '0'
        n = 0
    } else {
        navbar.style.right = '-100%'
        n = 1
    }
}

button.onclick = function (){
    overflow.style.bottom = '0'
    overlay.style.display = 'initial'
}
close.onclick = function (){
    overflow.style.bottom = '-50%'
    overlay.style.display = 'none'
}