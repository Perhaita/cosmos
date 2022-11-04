
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


const sandwich = document.querySelector('.menu-icon')
const sideNav = document.querySelector('.side-nav')

sandwich.addEventListener("click", (e) =>{
    sandwich.classList.toggle('change');
    sideNav.classList.toggle('side-nav-active');
})