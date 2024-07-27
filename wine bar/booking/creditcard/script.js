var name1 = document.getElementById("name1")
var numb = document.getElementById("number")
var date = document.getElementById("date")
var cv = document.getElementById("cv")
var random = document.getElementById("random")

var erorname = document.getElementById("erorname")
var erornumb = document.getElementById("erornumb")
var erordate = document.getElementById("erordate")
var erorcv = document.getElementById("erorcv")

var regnumb = /^[1-9]/g;
var regtxt =  /^[a-zA-z]/g;
var datereg = /^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))$/

let x = Math.floor((Math.random() * 1000) + 1);


var mainbtn = document.querySelector(".mainbtn")

mainbtn.addEventListener("click", function(){
    if(!numb.value.match(regnumb)) {
        erornumb.innerText = "Error"
        erornumb.style.color = "red"
    }

    if (!date.value.match(datereg)) {
        erordate.innerText = "Error"
        erordate.style.color = "red"
    }

    if (!name1.value.match(regtxt)) {
        erorname.innerText = "Error"
        erorname.style.color = "red"
    }

    if (!cv.value.match(regnumb)){
        erorcv.innerText = "Error"
        erorcv.style.color = "red"
    }

    random.innerText = "$" + x 

    User = {
        Name: name1.value,
        Nomeri: numb.value,
        Tarigi: date.value,
        CVV: cv.value,
    }

    console.log(User)

})
