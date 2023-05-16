var menuBtn = document.querySelector(".menu-icon");
var nav = document.querySelector("nav");

menuBtn.addEventListener("click", function() {
  nav.classList.toggle("responsive");
});
