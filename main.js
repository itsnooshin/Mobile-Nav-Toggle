"use strict";
// select element
const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const header = document.querySelector(".menub");
const hide = document.querySelector('.hidden-list')

header.addEventListener("click", function () {
   btnOpen.classList.toggle('hidden');
   btnClose.classList.toggle('hidden');
    hide.classList.toggle('hidden')
});

