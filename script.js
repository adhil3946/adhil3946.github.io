
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarmenu = document.querySelector('.nav-menu');

navbarToggle.addEventListener('click', () =>{
    navbarToggle.classList.toggle('active');
    navbarmenu.classList.toggle('active');
});