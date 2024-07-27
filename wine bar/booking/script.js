const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
  const start = new Date(year, month, 1).getDay();
  const endDate = new Date(year, month + 1, 0).getDate();
  const end = new Date(year, month, endDate).getDay();
  const endDatePrev = new Date(year, month, 0).getDate();

  let datesHtml = "";

  for (let i = start; i > 0; i--) {
    datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
  }

  for (let i = 1; i <= endDate; i++) {
    let className =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? ' class="today"'
        : "";
    datesHtml += `<li${className}>${i}</li>`;
  }

  for (let i = end; i < 6; i++) {
    datesHtml += `<li class="inactive">${i - end + 1}</li>`;
  }

  dates.innerHTML = datesHtml;
  header.textContent = `${months[month]} ${year}`;
}

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "prev" && month === 0) {
      year--;
      month = 11;
    } else if (btnId === "next" && month === 11) {
      year++;
      month = 0;
    } else {
      month = btnId === "next" ? month + 1 : month - 1;
    }

    date = new Date(year, month, new Date().getDate());
    year = date.getFullYear();
    month = date.getMonth();

    renderCalendar();
  });
});

renderCalendar();

var calbut = document.getElementById("calbut")
var cal = document.getElementById("cal")
var days = document.getElementById("days")
var datess = document.getElementById("dates")
var years = document.getElementById("yearss")
var minus = document.getElementById("minusbut")


calbut.addEventListener("click", function(){
    cal.style.display = "block"
    days.style.color = "black"
    datess.style.color = "black"
    years.style.color = "black"
    calbut.style.display = "none"
    minus.style.display = "flex" 
})

minus.addEventListener ("click", function(){
    cal.style.display = "none"
    calbut.style.display = "block"
    minus.style.display = "none"
})

const minusButton = document.getElementById('minuss');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});

plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});

const minusButton1 = document.getElementById('minusss');
const plusButton1 = document.getElementById('pluss');
const inputField1 = document.getElementById('inputs');

minusButton1.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField1.value) || 0;
  inputField1.value = currentValue - 1;
});

plusButton1.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField1.value) || 0;
  inputField1.value = currentValue + 1;
});

var bookingbtn = document.getElementById("bookingbtn")
var erorpep = document.getElementById("erorpep")
var erortab = document.getElementById("erortab")
var saati = document.getElementById("saati")
var email = document.getElementById("email")
var numb = document.getElementById("number")
var reg =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var emaileror = document.getElementById("emaileror")

bookingbtn.addEventListener("click", function(){
  if(inputField.value <= 0 ) {
    erortab.innerText = "Error"
    erortab.style.color = "red"
  }

  if(inputField1.value <= 0) {
    erorpep.innerText = "Error"
    erorpep.style.color = "red"
  }

  if(!email.value.match(reg)) {
    emaileror.innerText = "ERROR"
  }

  else {
    var booker = {
      Day: "12ianvari",
      Saati: saati.value,
      Xalxi: inputField.value,
      Magida: inputField1.value,
      Email: email.value,
      Number: numb.value,
    }
  
    console.log(booker)
  }

})




