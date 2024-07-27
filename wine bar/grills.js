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
    bg1.style.height = "300px"
})


var cenc = document.getElementById("cenc")
var cart = document.getElementById("cart")

cenc.addEventListener("click", function(){
    cart.style.display = "none"
    bg2.style.margin = "150px auto"
    bg2.style.width = "50%"
    bg3.style.margin = "auto"
    bg3.style.width = "50%"
})


var raodd1 = 0
var raodd2 = 0
var raodd3 = 0
var raodd4 = 0
var raodd5 = 0
var raodd6 = 0
var raodd7 = 0
var raodd8 = 0
var raodd9 = 0
var raodd10 = 0

var card1 = document.getElementById("card1")
var card2 = document.getElementById("card2")
var card3 = document.getElementById("card3")
var card4 = document.getElementById("card4")
var card5 = document.getElementById("card5")


var addbtn1 = document.getElementById("addbtn1")
var addbtn2 = document.getElementById("addbtn2")
var addbtn3 = document.getElementById("addbtn3")
var addbtn4 = document.getElementById("addbtn4")
var addbtn5 = document.getElementById("addbtn5")
var addbtn6 = document.getElementById("addbtn6")
var addbtn7 = document.getElementById("addbtn7")
var addbtn8 = document.getElementById("addbtn8")
var addbtn9 = document.getElementById("addbtn9")
var addbtn10 = document.getElementById("addbtn10")

var raod = document.getElementById("raod")
var raod2 = document.getElementById("raod2")
var raod3 = document.getElementById("raod3")
var raod4 = document.getElementById("raod4")
var raod5 = document.getElementById("raod5")
var raod6 = document.getElementById("raod6")
var raod7 = document.getElementById("raod7")
var raod8 = document.getElementById("raod8")
var raod9 = document.getElementById("raod9")
var raod10 = document.getElementById("raod10")


var bg2 = document.getElementById("bg2")
var bg3 = document.getElementById("bg3")


var minusbtn1 = document.getElementById("minus1")
var minusbtn2 = document.getElementById("minus2")
var minusbtn3 = document.getElementById("minus3")
var minusbtn4 = document.getElementById("minus4")
var minusbtn5 = document.getElementById("minus5")
var minusbtn6 = document.getElementById("minus6")
var minusbtn7 = document.getElementById("minus7")
var minusbtn8 = document.getElementById("minus8")
var minusbtn9 = document.getElementById("minus9")
var minusbtn10 = document.getElementById("minus10")


addbtn1.addEventListener("click", function(){
    raod.innerText = ++raodd1
    cart.style.display = "block"
    bg2.style.margin = "15px"
    bg2.style.width = "60%"
    bg3.style.margin = "15px"
    bg3.style.width = "60%"
})

addbtn2.addEventListener("click", function(){
    raod2.innerText = ++raodd2
    cart.style.display = "block"
    bg2.style.margin = "15px"
    bg2.style.width = "60%"
    bg3.style.margin = "15px"
    bg3.style.width = "60%"
})

addbtn3.addEventListener("click", function(){
    raod3.innerText = ++raodd3
    cart.style.display = "block"
    bg2.style.margin = "15px"
    bg2.style.width = "60%"
    bg3.style.margin = "15px"
    bg3.style.width = "60%"
})

addbtn4.addEventListener("click", function(){
    raod4.innerText = ++raodd4
    cart.style.display = "block"
    bg2.style.margin = "15px"
    bg2.style.width = "60%"
    bg3.style.margin = "15px"
    bg3.style.width = "60%"
})

addbtn5.addEventListener("click", function(){
    raod5.innerText = ++raodd5
    cart.style.display = "block"
    bg2.style.margin = "15px"
    bg2.style.width = "60%"
    bg3.style.margin = "15px"
    bg3.style.width = "60%"
})

addbtn6.addEventListener("click", function(){
    raod6.innerText = ++raodd6
    cart.style.display = "block"
    bg2.style.margin = "15px"
    bg2.style.width = "60%"
    bg3.style.margin = "15px"
    bg3.style.width = "60%"
})

addbtn7.addEventListener("click", function(){
    raod7.innerText = ++raodd7
    cart.style.display = "block"
    bg2.style.margin = "15px"
    bg2.style.width = "60%"
    bg3.style.margin = "15px"
    bg3.style.width = "60%"
})

addbtn8.addEventListener("click", function(){
    raod8.innerText = ++raodd8
    cart.style.display = "block"
    bg2.style.margin = "15px"
    bg2.style.width = "60%"
    bg3.style.margin = "15px"
    bg3.style.width = "60%"
})

addbtn9.addEventListener("click", function(){
    raod9.innerText = ++raodd9
    cart.style.display = "block"
    bg2.style.margin = "15px"
    bg2.style.width = "60%"
    bg3.style.margin = "15px"
    bg3.style.width = "60%"
})

addbtn10.addEventListener("click", function(){
    raod10.innerText = ++raodd10
    cart.style.display = "block"
    bg2.style.margin = "15px"
    bg2.style.width = "60%"
    bg3.style.margin = "15px"
    bg3.style.width = "60%"
})


minusbtn1.addEventListener("click", function(){
    raod.innerText = --raodd1
})
minusbtn2.addEventListener("click", function(){
    raod2.innerText = --raodd2
})
minusbtn3.addEventListener("click", function(){
    raod3.innerText = --raodd3
})
minusbtn4.addEventListener("click", function(){
    raod4.innerText = --raodd4
})
minusbtn5.addEventListener("click", function(){
    raod5.innerText = --raodd5
})
minusbtn6.addEventListener("click", function(){
    raod6.innerText = --raodd6
})
minusbtn7.addEventListener("click", function(){
    raod7.innerText = --raodd7
})
minusbtn8.addEventListener("click", function(){
    raod8.innerText = --raodd8
})
minusbtn9.addEventListener("click", function(){
    raod9.innerText = --raodd9
})
minusbtn10.addEventListener("click", function(){
    raod10.innerText = --raodd10
})

var cartbtn = document.getElementById("cartbtn")

cartbtn.addEventListener("click", function(){

    var Order = {
        SteakAlePie: raod,
        HaggisTower: raod2,
        VenisonRump: raod3,
        ChickenMushroomSauce: raod4,
        HaddockChips: raod5,
        VegetarianMezze: raod6,
        BritishSpecialSharingBoard: raod7,
        ItalianBoard: raod8,
        EuropeanBoard: raod9,
        MeatSharingBoard: raod10,
    }

    console.log(Order)
    
})


