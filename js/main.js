const burger = document.querySelector('#burger');
const header__navbar = document.querySelector('.header__navbar');
const header = document.querySelector('.header');
const header__login = document.querySelector('.header__login');
const header__logo = document.querySelector('.header__logo');
const competitions_card = document.querySelectorAll('.competitions-card');
const competitions_cards = document.querySelector('.competitions-cards');
const swiper = document.querySelector('.swiper');
const menu = document.querySelector('.menu');
const body = document.body;


burger.addEventListener('click', ()=>{
   menu.classList.toggle('_active');
   body.classList.toggle('_lock');
   header__navbar.classList.toggle('_active');
   header__login.classList.toggle('_active');
   header__logo.classList.toggle('active');
   burger.classList.toggle('active');
   header.classList.toggle('active');

   document.addEventListener('keydown', (e)=>{
      if (e.key == 'Escape' && header__navbar.classList.contains('_active')){
            menu.classList.remove('_active');
            body.classList.remove('_lock');
            header__navbar.classList.remove('_active');
            header__login.classList.remove('_active');
            header__logo.classList.remove('active');
            header.classList.remove('active');
            burger.classList.remove('active');
         }
   })
});
new Swiper('.competitions-cards, .latest_boxs', {
   grabCursor: true,
   slideToClickedSlide: true,
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   // mousewheel: {
   //    invert: true,
   //  },
   slidesPerView: 'auto',

   spaceBetween: 30,
   initialSlide: 0,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    speed: 800
});

new Swiper('.reviews_description', {
   grabCursor: true,
   slideToClickedSlide: true,
   slidesPerView: '1',
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   pagination: {
      el: ".swiper-pagination",
    }
})
