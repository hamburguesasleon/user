// ABRIR CERRAR NAV-------------------------------------------------------

const bars = document.getElementById('navButton')
const nav = document.querySelector('nav').content;
const ulNav = document.querySelector('.navList');
let navOpen = false;

bars.addEventListener('click', e => {
    if (navOpen == false){
        ulNav.style.display = "block";
        bars.classList.replace('fa-bars', 'fa-times');
        navOpen = true;
        ulNav.classList.toggle('open');
        ulNav.classList.toggle('close');
    }
    else {
        bars.classList.replace('fa-times', 'fa-bars');
        navOpen = false;
        ulNav.classList.toggle('open');
        ulNav.classList.toggle('close');
    }
})

//MENU LINKS

const menuLink = document.querySelector('.menuLink');
const mainPage = document.querySelector('.mainPage');
const menuHover = document.querySelector('.menuHover');
let hoverValue = false;

menuLink.addEventListener('mouseover', e => {
    mainPage.classList.toggle('actualPage');
        menuHover.style.display = 'flex';
        menuLink.style.color = '#348AC0'
        hoverValue = true;
    
})
menuHover.addEventListener('mouseover', e => {
    mainPage.classList.toggle('actualPage');
        menuHover.style.display = 'flex';
        menuLink.style.color = '#348AC0'
        hoverValue = true;
    
})
menuLink.addEventListener('mouseout', e => {
    mainPage.classList.toggle('actualPage');
    menuHover.style.display = 'none';
    menuLink.style.color = '#C9C7E3'
})
menuHover.addEventListener('mouseout', e => {
    mainPage.classList.toggle('actualPage');
    menuHover.style.display = 'none';
    menuLink.style.color = '#C9C7E3'
})