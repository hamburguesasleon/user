//Hamburguesas

const arrayHam = [
    ['Papas a la Francesa (Orden)', '23', "../../img/papas.jpg"],
    ['Salchipulpos (Orden)', '25', "../../img/pulpos.png"],
    ['Aros de Cebolla (Orden)', '40', '../../img/cebolla.jpg'],
]

//Tarjetas-Hamburguesas

const containerTemplate = document.querySelector('#ham-card').content;
const frag = document.createDocumentFragment();
const containerHTML = document.querySelector('.container');
let count = 0;

arrayHam.forEach(ham => {
    containerTemplate.querySelector('.hamName').textContent = arrayHam[count][0];
    containerTemplate.getElementById('extraImg').setAttribute('src', arrayHam[count][2]);
    containerTemplate.querySelector('.hamPrice i p').textContent = arrayHam[count][1];
    const clone = containerTemplate.cloneNode(true);
    frag.appendChild(clone);
    count++;
})

containerHTML.appendChild(frag);