const burger = document.querySelector('#burger');
const header__navbar = document.querySelector('.header__navbar');
const header = document.querySelector('.header');
const header__login = document.querySelector('.header__login');
const header__logo = document.querySelector('.header__logo');

burger.addEventListener('click', ()=>{
   header__navbar.classList.toggle('_active');
   header__login.classList.toggle('_active');
   header__logo.classList.toggle('active');
   burger.classList.toggle('active');
   header.classList.toggle('active');

   document.addEventListener('keydown', (e)=>{
      if (e.key == 'Escape' && header__navbar.classList.contains('_active')){
            header__navbar.classList.remove('_active');
            header__login.classList.remove('_active');
            header__logo.classList.remove('active');
            header.classList.remove('active');
            burger.classList.remove('active');
         }
   })
})