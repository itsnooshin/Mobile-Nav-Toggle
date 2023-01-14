'use strict';


const btnMenu = document.querySelector('.header__menu');
const navLinks = document.querySelector('.main-list');
btnMenu.addEventListener('click' , function(){
 
  if(btnMenu.classList.contains('close')){
    btnMenu.classList.remove('close');
  } else{
    btnMenu.classList.add('close');
    console.log(navLinks);
    navLinks.style.display = 'block';
   

  }
  
});



