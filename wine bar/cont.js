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
    bg1.style.height = "1100px"
})

btnx.addEventListener("click", function(){
    sub.style.display = "none"
    btnmenu.style.display = "block"
    nav.style.height = "100px"
    btnx.style.display = "none"
    bg1.style.height = "650px"
})


var btncon = document.getElementById("btncont")

var name1 = document.getElementById("namee")
var last = document.getElementById("last")
var email = document.getElementById("email")
var subj = document.getElementById("subj")
var mesij = document.getElementById("mesij")

var regemail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var ername = document.getElementById("ername")
var erlast = document.getElementById("erlast")
var ersubj = document.getElementById("subjeror")
var ermail = document.getElementById("emaileror")
var ermesij = document.getElementById("mesijeror")

btncon.addEventListener("click", function(){
    if (name1.value == "" || name1.value == null) {
        ername.innerText = "Error"
        ername.style.color = "red"
        name1.style.border = "1px solid red"
    }

    if (last.value == "" || last.value == null) {
        erlast.innerText = "Error"
        erlast.style.color = "red"
        last.style.border = "1px solid red"
    }

    if(!email.value.match(regemail)) {
        emaileror.innerText = "Error"
        emaileror.style.color = "red"
        email.style.border = "1px solid red"
    }

    if(subj.value == "" || subj.value == null) {
        ersubj.innerText = "Error"
        ersubj.style.color = "red"
        subj.style.border = "1px solid red"
    }

    if(mesij.value == "" || mesij.value == null) {
        ermesij.innerText = "Error"
        ermesij.style.color = "red"
        mesij.style.border = "1px solid red"
    }

    else {
        var user = {
            Saxeli: name1.value,
            Gvari: last.value,
            Email: email.value,
            Subject: sub.value,
            Massage: mesij.value,
        }

        console.log(user)
    }
})
