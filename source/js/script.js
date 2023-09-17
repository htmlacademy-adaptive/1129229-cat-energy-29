let navMain = document.querySelector(".main-nav");
let navBurger = document.querySelector(".main-nav__burger");

navBurger.addEventListener('click', function() {
  navMain.classList.toggle("main-nav--active");
})
