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
   // body.classList.toggle('_lock');
   // emptyContainer.addEventListener('click', ()=>{
   //    if(header_block.classList.contains('_active')){
   //       header_block.classList.remove('_active');
   //       burger.classList.remove('active');
   //       body.classList.remove('_lock');
   //    }
   // })
})