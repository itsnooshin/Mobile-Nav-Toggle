const hambuerger =document.querySelector('.hamburger');
const navMenu = document.querySelector('.mobile-nav');

hambuerger.addEventListener('click' , function(){
  hambuerger.classList.toggle('is-active');
  navMenu.classList.toggle('is-active');

})