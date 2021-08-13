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
const imgAnt = document.querySelector('.imgAnt');
const imgAct = document.querySelector('.imgAct');
const imgSig = document.querySelector('.imgSig');

const obj = arrayPromos.length;
let arrow;
let promo = 0;
let promo2 = (promo - 1);
let promo3 = (promo + 1);

function correccion (){
    if (promo2 < 0){
        promo2 = (obj - 1);
    }
    if (promo2 == obj){
        promo2 = 0;
    }
    if (promo3 < 0){
        promo3 = (obj - 1);
    }
    if (promo3 == obj){
        promo3 = 0;
    }
    if (promo < 0){
        promo = (obj - 1);
    }
    if (promo == obj){
        promo = 0;
    }
}
function slider (){
    if (arrow == 0){
        imgAct.classList.add('leftMoveAct');
        imgSig.classList.add('leftMoveSig');
        promo += 1;
        promo2 += 1;
        promo3 += 1;
        correccion();
        setTimeout(() => {
            imgAct.setAttribute('src', arrayPromos[promo][0]);
            imgAnt.setAttribute('src', arrayPromos[promo2][0]);
            imgSig.setAttribute('src', arrayPromos[promo3][0]);
            imgAct.classList.remove('leftMoveAct');
            imgSig.classList.remove('leftMoveSig');
        }, 500);
    }
    if (arrow == 1){
        imgAct.classList.add('rightMoveAct');
        imgAnt.classList.add('rightMoveAnt');
        promo -= 1;
        promo2 -= 1;
        promo3 -= 1;
        correccion();
        setTimeout(() => {
            imgAct.setAttribute('src', arrayPromos[promo][0]);
            imgAnt.setAttribute('src', arrayPromos[promo2][0]);
            imgSig.setAttribute('src', arrayPromos[promo3][0]);
            imgAct.classList.remove('rightMoveAct');
            imgAnt.classList.remove('rightMoveAnt');
        }, 500);
    }
}
imgAct.setAttribute('src', arrayPromos[promo][0]);
correccion();
imgAnt.setAttribute('src', arrayPromos[promo2][0]);
imgSig.setAttribute('src', arrayPromos[promo3][0]);

leftA.addEventListener('click', e => {
    arrow = 0;
    slider();
})
rightA.addEventListener('click', e => {
    arrow = 1;
    slider();
})

//promoContainer.style.backgroundImage = `url(${arrayPromos[promo][0]})`;
//promoTitle.setAttribute('href', arrayPromos[promo][1])
//
//function movePromo(arrow){
//    if (arrow == 0){
//        promo -= 1;
//        if (promo < 0){
//            promo = (obj - 1);
//        }
//        promoContainer.style.backgroundImage = `url(${arrayPromos[promo][0]})`;
//        promoTitle.setAttribute('href', arrayPromos[promo][1])
//    }
//    else if (arrow == 1){
//        promo++;
//        if (promo >= obj){
//            promo = 0;
//        }
//        promoContainer.style.backgroundImage = `url(${arrayPromos[promo][0]})`;
//        promoTitle.setAttribute('href', arrayPromos[promo][1])
//    }
//}
//
//leftA.addEventListener('click', e => {
//    arrow = 0;
//    movePromo(arrow);
//});
//rightA.addEventListener('click', e => {
//    arrow = 1;
//    movePromo(arrow);
//});
