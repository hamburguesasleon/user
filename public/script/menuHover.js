// ABRIR CERRAR NAV-------------------------------------------------------

const bars = document.getElementById('navButton');
const ulNav = document.querySelector('.navList');
const menuNav = document.querySelector('.navListMenu');
const close = document.querySelector('.fa-times');
const menuClick = document.querySelector('.navMenu');
const home = document.getElementById('home');
const locationNav = document.getElementById('locationNav');

let menuOpen = 0;

bars.addEventListener('click', e => {
    ulNav.classList.toggle('open');
    ulNav.style.display = 'flex';
    if (ulNav.classList.contains('close')){
        ulNav.classList.toggle('close');
    }
})
close.addEventListener('click', e => {
    //Resuelve errores al cerrar el Nav
    if (menuOpen == 1){
        setTimeout(function (){
            locationNav.classList.remove('locationNav');
            menuNav.style.display = 'none';
            home.classList.toggle('actualPage');
            menuClick.classList.toggle('actualPage');
        }, 1000);
        menuOpen = 0;
    }
    if (ulNav.classList.contains('open')){
        ulNav.classList.toggle('close');
    }
    ulNav.classList.toggle('open');
    setTimeout(function (){
        ulNav.style.display = 'none';
    }, 1000 );
})

menuClick.addEventListener('click', e => {
    if (menuOpen == 0){
        if(menuClick.classList.contains('actualPage')){

        }
        else{    
            home.classList.toggle('actualPage');
            menuClick.classList.toggle('actualPage');
        }
        menuNav.classList.remove('menuListClose');
        locationNav.classList.toggle('locationNav');
        setTimeout(function (){
            menuNav.style.display = 'block';
            menuNav.classList.add('menuList');
        }, 500);
        menuOpen = 1;
    }
    else if (menuOpen == 1){
        if (menuClick.classList.contains('actualPage') && document.querySelector('.containerHam')){

        }
        else{
            home.classList.toggle('actualPage');
            menuClick.classList.toggle('actualPage');
        }
        menuNav.classList.remove('menuList');
        menuNav.classList.add('menuListClose');
        setTimeout(function (){
            locationNav.classList.remove('locationNav');
            locationNav.classList.add('locationNavClose');
            menuNav.style.display = 'none';
        }, 500);
        menuOpen = 0;
    }
    locationNav.classList.remove('locationNavClose');
})

//MENU LINKS

const menuLink = document.querySelector('.menuLink');
const mainPage = document.querySelector('.mainPage');
const menuHover = document.querySelector('.menuHover');
let hoverValue = false;

menuLink.addEventListener('mouseover', e => {
    mainPage.classList.toggle('actualPage');
        menuHover.style.display = 'flex';
        menuLink.style.color = '#348AC0';
        hoverValue = true;
    
})
menuHover.addEventListener('mouseover', e => {
    mainPage.classList.toggle('actualPage');
        menuHover.style.display = 'flex';
        menuLink.style.color = '#348AC0';
        hoverValue = true;
    
})
menuLink.addEventListener('mouseout', e => {
    mainPage.classList.toggle('actualPage');
    menuHover.style.display = 'none';
    menuLink.style.color = '#C9C7E3';
})
menuHover.addEventListener('mouseout', e => {
    mainPage.classList.toggle('actualPage');
    menuHover.style.display = 'none';
    menuLink.style.color = '#C9C7E3';
})