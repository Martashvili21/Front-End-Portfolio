var nav2 = document.getElementById("nav2")

function sub() {
    nav2.style.display = "flex"
}

function cenc() {
    nav2.style.display = "none"
}

var fb = document.getElementById("fb")
var yt = document.getElementById("yt")
var inst = document.getElementById("inst")

fb.addEventListener("click", function(){
    window.open("https://www.facebook.com/luka.martashvili")
})

yt.addEventListener("click", function(){
    window.open("https://www.youtube.com/channel/UCzt_quy4AC52048Dq3iRpHg")
})

inst.addEventListener("click", function(){
    window.open("https://www.instagram.com/luka.martashvili/")
})

var nameq = document.getElementById("name")
var email = document.getElementById("email")
var prob = document.getElementById("problem")
var com = document.getElementById("com")
var btncom = document.getElementById("btncon")

btncom.addEventListener("click", function(){
    var user = {
        Name: nameq.value,
        Email: email.value,
        Problem: prob.value,
        Message: com.value,
      }
    console.log(user)
})