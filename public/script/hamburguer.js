//Hamburguesas

const arrayHam = [
    ['Godinez', 'Carne de Res, Jitomate, Lechuga, Cebolla Caramelizada, Queso Manchego<br><span>¡SIN papas a la Francesa!</span>', '40', "../../img/ham.jpg", '0', 'Lorem ipsum'],
    ['Clásica', 'Carne de Res, Jitomate, Lechuga, Cebolla Caramelizada, Jamón, Queso Amarillo, Queso Manchego, Papas a la Francesa', '50', "../../img/classic.jpg", '1', 'Lorem ipsum'],
    ['Hawaiana', 'Carne de Res, Jitomate, Lechuga, Cebolla Caramelizada, Piña, Jamón, Queso Amarillo, Queso de Hebra, Papas a la Francesa', '58', '../../img/ham.jpg', '2', 'Lorem ipsum'],
    ['Porcina', 'Carne de Res, Jitomate, Lechuga, Cebolla Caramelizada, Chistorra, Jamón, Queso de Hebra, Queso Manchego, Papas a la Francesa', '59', '../../img/ham.jpg', '3', 'Lorem ipsum'],
    ['BBQ Clásica', 'Carne de Res, Aros de Cebolla, Tocino, Queso Amarillo, Queso Manchego, Salsa BBQ, Papas a la Francesa', '65', '../../img/bbq.jpg', '4', 'Lorem ipsum'],
    ['De León', 'Carne de Res, Jitomate, Lechuga, Aros de Cebolla, Tocino, Jamón, Queso Amarillo, Queso Manchego, Aguacate, Papas a la Francesa', '68', "../../img/hamLeon.jpg", '5', 'Lorem ipsum'],
    ['Rascacielos', 'Carne de Res, Jitomate, Lechuga, Aros de Cebolla, Chistorra, Salchicha, Tocino, Queso De Hebra, Queso Manchego, Aguacate, Papas a la Francesa', '78', '../../img/skyline.jpg', '6', 'Lorem ipsum']
]

//Tarjetas-Hamburguesas

const containerTemplate = document.querySelector('#ham-card').content;
const frag = document.createDocumentFragment();
const containerHam = document.querySelector('.containerHam');
let count = 0;

arrayHam.forEach( () => {
    containerTemplate.querySelector('.hamNameDesk').textContent = arrayHam[count][0];
    if (count == 3){
        containerTemplate.querySelector('.hamPrice').classList.add('porcina');
    }
    else {
        containerTemplate.querySelector('.hamPrice').classList.remove('porcina');
    }
    if (count == 6){
        containerTemplate.querySelector('.hamPrice').classList.add('sky');
    }
    else {
        containerTemplate.querySelector('.hamPrice').classList.remove('sky');
    }
    containerTemplate.getElementById('hamImg').setAttribute('src', arrayHam[count][3]);
    containerTemplate.querySelector('.ingr').innerHTML = arrayHam[count][5];
    containerTemplate.querySelector('.hamPrice i p').textContent = arrayHam[count][2];
    containerTemplate.querySelector('.menu').setAttribute('value', `ham${count}`)
    containerTemplate.querySelector('.plusHam').setAttribute('value', count)
    const clone = containerTemplate.cloneNode(true);
    frag.appendChild(clone);
    count++;
})

containerHam.appendChild(frag);

//ABRIR INFO HAMBURGUESAS

const hamInfoCard = document.querySelector('.hamInfoCard');
const hamInfoTitle = document.querySelector('.hamInfoTitle');
const hamInfoIngr = document.querySelector('.hamInfoIngr');
const closeCard = document.querySelector('.closeCard');
const priceInCard = document.querySelector('.hamInfoPrice');
const hamInfoImg = document.querySelector('.hamInfoImg');
const hamInfoType = document.querySelector('.hamInfoType');

const type = 'Hamburguesa'

containerHam.addEventListener('click', e => {
    const plus = e.target;
    let select,
        ham = 0;
    //Hacemos busqueda en el array
    arrayHam.forEach( ham => {
        if(plus.getAttribute('value') == ham[4]){
            select = ham[4];
            hamInfoCard.style.display = 'flex';
        }
    })
    //Solucionar error en consola UNDEFINED
    if (select != undefined){
        hamInfoImg.setAttribute('src', arrayHam[select][3])
        hamInfoTitle.textContent = arrayHam[select][0];
        hamInfoIngr.innerHTML = arrayHam[select][1];
        hamInfoType.textContent = type;
        priceInCard.textContent = arrayHam[select][2];
    }
})

closeCard.addEventListener('click', e => {
    hamInfoCard.style.display = 'none'
})
