/*===================== SHOW MENU =======================*/
const navMenu = document.getElementById("nav__menu");
const navToggle = document.getElementById("nav__toggle");
const navClose = document.getElementById("nav__close");

/*=========== MENU SHOW ============*/
/* validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show__menu');
    })
}

/*=========== MENU HIDDEN ============*/
/* validate if constant exists */
if (navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show__menu');
    })
}

/*================= REMOVE MENU MOBILE =====================*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav__menu');
    navMenu.classList.remove('show__menu');
}

navLink.forEach(l => l.addEventListener('click',linkAction));