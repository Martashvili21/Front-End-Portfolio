var nick = document.getElementById("nick");
var ernick = document.getElementById("ernick")
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var reppas = document.getElementById ("repass")
var btn = document.getElementById("subm")
var er = document.getElementById("passer")
var emaileror = document.getElementById("emaileror")
var enterpass = document.getElementById("enterpass")
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,5})$/;

btn.addEventListener("click", function(){
    var user = {
        Nickname: nick.value,
        email: email.value,
        pass: pass.value,
        repeatpass: repass.value,
    }
    console.log(user)

    if(pass.value == reppas.value) {
        console.log("zd")
    }

    else {
        er.innerText = "Error Password"
        er.style.color = "red"
    }

    if(!email.value.match(reg)) {
        emaileror.innerText = "Error Email"
        emaileror.style.color = "red"
    }

    if(reppas.value == "" || reppas.value == null) {
        er.innerText = "Repeat Password"
        er.style.color = "red"
    }

    if(pass.value == "" || pass.value == null) {
        enterpass.innerText = "Enter Password"
        enterpass.style.color = "red"
    }

    return erorrnick()
})

function erorrnick() {
    if(nick.value == "" || nick.value == null) {
        ernick.innerText = "Enter Nick"
        ernick.style.color = "red"
    }
}

