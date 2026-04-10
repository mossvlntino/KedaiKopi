// toggle if active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};      

// klik di luar sidebar buat nutup navbar
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})