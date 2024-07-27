var btnmenu = document.getElementById("btnmenu")
var sub = document.getElementById("submenu")
var nav = document.getElementById("nav")
var btnx = document.getElementById("btnx")
var bg1 = document.getElementById("bg1")

btnmenu.addEventListener("click", function(){
    sub.style.display = "block"
    nav.style.height = "700px"
    btnmenu.style.display = "none"
    btnx.style.display = "block"
    bg1.style.height = "1700px"
})

btnx.addEventListener("click", function(){
    sub.style.display = "none"
    btnmenu.style.display = "block"
    nav.style.height = "100px"
    btnx.style.display = "none"
    bg1.style.height = "1000px"
})

var inst = document.getElementById("soc1")
var fb = document.getElementById("soc2")

inst.addEventListener("click", function(){
    window.open("https://www.instagram.com/luka.martashvili/")
})

fb.addEventListener("click", function(){
    window.open("https://www.facebook.com/luka.martashvili")
})

