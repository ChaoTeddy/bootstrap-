const toggleMenuBtn = document.querySelector('#menu-toggle-btn');
const body = document.querySelector('body');
toggleMenuBtn.addEventListener('click',(evt) =>{
  evt.preventDefault();
  body.classList.toggle('sidebar-toggle');
})


  
