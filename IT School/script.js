var but = document.getElementById("")
var nav = document.getElementById("nav22")

function marta() {
    nav.style.display = "block";
}

function cenc() {
    nav.style.display = "none";
}

var name121 = document.getElementById("name121");
var email121 = document.getElementById("email121");
var phone121 = document.getElementById("phone121");
var subj121 = document.getElementById("subj121");
var mesij121 = document.getElementById("mesij121");
var emailtxt = document.getElementById("emailtxt121")
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$ /;

var btn121 = document.getElementById("btn121");

btn121.addEventListener("click", function(){
    var user121 = {
        Name: name121.value,
        Email: email121.value,
        Phone: phone121.value,
        Subject: subj121.value,
        Massage: mesij121.value,
    }
    console.log(user121);
    if(email121.value.match(reg)) {
        emailtxt.innerText = "Error"
        emailtxt.style.color = "red"
        emailtxt.style.fontSize = "25px"
    }

})

var fb = document.getElementById("fb");
var insta = document.getElementById ("insta");
var yt = document.getElementById ("yt");
var twit = document.getElementById("twit");

fb.addEventListener("click", function(){
    window.open("https://www.facebook.com/luka.martashvili")
})

insta.addEventListener("click", function(){
    window.open("https://www.instagram.com/luka.martashvili/")
})

yt.addEventListener("click", function(){
    window.open("https://www.youtube.com/channel/UCzt_quy4AC52048Dq3iRpHg")
})