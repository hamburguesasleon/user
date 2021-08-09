//PROMOCIONES----------------------------------------------------------------

const arrayPromos = [
    ['public/img/hamLeon.jpg', 'public/html/menu.html'],
    ['public/img/hotDog.jpg', 'public/html/menu/hotDogs.html'], 
    ['public/img/leon2x120.jpg', 'public/html/menu/hamburguesas.html'], 
    ['public/img/map.jpg', 'public/html/location.html']
]

const leftA = document.getElementById('left');
const rightA = document.getElementById('right');
const promoContainer = document.querySelector('.promoContainer');
const promoTitle = document.querySelector('.promoTitle');

const obj = arrayPromos.length;
let arrow;
let promo = 0;

promoContainer.style.backgroundImage = `url(${arrayPromos[promo][0]})`;
promoTitle.setAttribute('href', arrayPromos[promo][1])

function movePromo(arrow){
    if (arrow == 0){
        promo -= 1;
        if (promo < 0){
            promo = (obj - 1);
        }
        promoContainer.style.backgroundImage = `url(${arrayPromos[promo][0]})`;
        promoTitle.setAttribute('href', arrayPromos[promo][1])
    }
    else if (arrow == 1){
        promo++;
        if (promo >= obj){
            promo = 0;
        }
        promoContainer.style.backgroundImage = `url(${arrayPromos[promo][0]})`;
        promoTitle.setAttribute('href', arrayPromos[promo][1])
    }
}

leftA.addEventListener('click', e => {
    arrow = 0;
    movePromo(arrow);
});
rightA.addEventListener('click', e => {
    arrow = 1;
    movePromo(arrow);
});
