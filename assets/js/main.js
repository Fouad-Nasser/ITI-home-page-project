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



/*================= CHANGE BACKGROUND HEADER =====================*/
const scrollHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg__header')
                      : header.classList.remove('bg__header');
}
window.addEventListener('scroll',scrollHeader);




/*============== TAPPED PRODUCTS ===============*/
const tabs = document.querySelectorAll(".products__filters li .product__item");
const productCard = document.querySelectorAll(".product__card");

for (const tab of tabs) {
   tab.addEventListener('click',(e)=>{
       tabs.forEach((el)=>{
           el.classList.remove('li-active');
           el.classList.add('li-not-active');
        });
         e.currentTarget.classList.add('li-active');
         e.currentTarget.classList.remove('li-not-active');


         productCard.forEach((el)=>{
            el.style.display='none';
         });

        //  debugger;
         const filteredProducts = document.querySelectorAll(e.currentTarget.dataset.cont);
         filteredProducts.forEach(el=>{el.style.display='block'})

   })
}


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show__scroll'); else scrollUp.classList.remove('show__scroll')
}
window.addEventListener('scroll', scrollUp)



/*==================== SCROLL ACTIVE SECTION ====================*/ 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav__list a[href*=${sectionId}]`).classList.add('active__link')
        }else{
            document.querySelector(`.nav__list a[href*=${sectionId}]`).classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme__button')
const darkTheme = 'dark__theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
