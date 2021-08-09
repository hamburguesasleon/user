//Hamburguesas

const arrayHam = [
    ['Sencillo', 'Salchicha, Jitomate, Cebolla Caramelizada, Queso de Hebra<br><span>¡SIN papas a la Francesa!</span>', '20', "../../img/hotDog.jpg"],
    ['Clásico', 'Salchicha, Jitomate, Cebolla Caramelizada, Tocino, Queso de Hebra, Papas a la Francesa', '25', "../../img/hotDog.jpg"],
    ['Hawaiano', 'Salchicha, Jitomate, Cebolla Caramelizada, Piña, Queso de Hebra, Papas a la Francesa', '30', '../../img/hotDog.jpg'],
    ['De la Ramfla', 'Salchicha, Jitomate, Cebolla Caramelizada, Chistorra, Aguacate, Queso de Hebra, Papas a la Francesa', '40', '../../img/hotDog.jpg']
]

//Tarjetas-Hamburguesas

const containerTemplate = document.querySelector('#ham-card').content;
const frag = document.createDocumentFragment();
const containerHTML = document.querySelector('.containerHam');
let count = 0;

arrayHam.forEach(ham => {
    containerTemplate.querySelector('.hamNameDesk').textContent = arrayHam[count][0];
    containerTemplate.getElementById('hamImg').setAttribute('src', arrayHam[count][3]);
    containerTemplate.querySelector('.ingr').innerHTML = arrayHam[count][1];
    containerTemplate.querySelector('.hamPrice i p').textContent = arrayHam[count][2];
    const clone = containerTemplate.cloneNode(true);
    frag.appendChild(clone);
    count++;
})

containerHTML.appendChild(frag);