const toggle = document.querySelector("#toggleDark");
const toggleTwo = document.querySelector("#toggleDarkTwo");
const body = document.querySelector("body");
let logo = document.querySelector("#logo");
console.log(toggle);

toggle.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  body.classList.toggle("darkActive");
  console.log(logo);

  if (this.classList.toggle("fa-sun")) {
    logo.src = "/assets/images/logo_black.png";
  } else {
    logo.src = "/assets/images/logo_white.png";
  }
});
toggleTwo.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  body.classList.toggle("darkActive");
  console.log(logo);

  if (this.classList.toggle("fa-sun")) {
    logo.src = "../../assets/images/logo_black.png";
  } else {
    logo.src = "../../assets/images/logo_white.png";
  }
});

window.addEventListener("scroll", function () {
  let navbar = this.document.querySelector(".navbar");
  navbar.classList.toggle("sticky", this.window.scrollY > 0);
});

let menuToggle = document.getElementById("menu__toggler");
let menu = document.getElementById("links");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("toggleActive");
  menu.classList.toggle("toggleActive");
});

let profileName = document.getElementById("profileName");
let dropdownMenu = document.querySelector(".dropdown-menu");

profileName.addEventListener("click", function () {
  profileName.classList.toggle("activeProfile");
  dropdownMenu.classList.toggle("activeProfile");
});
