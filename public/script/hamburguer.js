//Hamburguesas

const arrayHam = [
    ['Godinez', 'Carne de Res, Jitomate, Lechuga, Cebolla Caramelizada, Queso Manchego<br><span>¡SIN papas a la Francesa!</span>', '40', "../../img/ham.jpg"],
    ['Clásica', 'Carne de Res, Jitomate, Lechuga, Cebolla Caramelizada, Jamón, Queso Amarillo, Queso Manchego, Papas a la Francesa', '50', "../../img/ham.jpg"],
    ['Hawaiana', 'Carne de Res, Jitomate, Lechuga, Cebolla Caramelizada, Piña, Jamón, Queso Amarillo, Queso de Hebra, Papas a la Francesa', '58', '../../img/ham.jpg'],
    ['Porcina', 'Carne de Res, Jitomate, Lechuga, Cebolla Caramelizada, Chistorra, Jamón, Queso de Hebra, Queso Manchego, Papas a la Francesa', '59', '../../img/ham.jpg'],
    ['BBQ Clásica', 'Carne de Res, Aros de Cebolla, Tocino, Queso Amarillo, Queso Manchego, Salsa BBQ, Papas a la Francesa', '65', '../../img/ham.jpg'],
    ['De León', 'Carne de Res, Jitomate, Lechuga, Aros de Cebolla, Tocino, Jamón, Queso Amarillo, Queso Manchego, Aguacate, Papas a la Francesa', '68', "../../img/ham.jpg"],
    ['Rascacielos', 'Carne de Res, Jitomate, Lechuga, Aros de Cebolla, Chistorra, Salchicha, Tocino, Queso De Hebra, Queso Manchego, Aguacate, Papas a la Francesa', '78', '../../img/ham.jpg']
]

//Tarjetas-Hamburguesas

const containerTemplate = document.querySelector('#ham-card').content;
const frag = document.createDocumentFragment();
const menu = document.querySelector('.menu');
const containerHTML = document.querySelector('.containerHam');
let count = 0;
let menuCount = ('menu' + count);

arrayHam.forEach(ham => {
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
    containerTemplate.querySelector('.ingr').innerHTML = arrayHam[count][1];
    containerTemplate.querySelector('.hamPrice i p').textContent = arrayHam[count][2];
    const clone = containerTemplate.cloneNode(true);
    frag.appendChild(clone);
    count++;
})

containerHTML.appendChild(frag);
