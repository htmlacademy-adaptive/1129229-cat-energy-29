let navMain = document.querySelector('.main-nav');
let navBurger = document.querySelector('.main-nav__burger');

navMain.classList.remove('main-nav--active');
navMain.classList.remove('main-nav--no-js');

navBurger.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--active');
})
