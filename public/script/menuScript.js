const menuCard = document.getElementById('menu-cards').content;
const fragmentMenuCard = document.createDocumentFragment();
const containerMenuCard = document.querySelector('.promoContainer');
const links = menuCard.querySelector('a');
const menuArray = [['Hamburguesas', 'menu/hamburguesas.html'], ['Hot-Dogs', 'menu/hotDogs.html'], ['Extras', 'menu/extras.html']];

let ham = 0;

menuArray.forEach(title => {
    menuCard.querySelector('.card-name').textContent = menuArray[ham][0];
    menuCard.querySelector('.menu-links').setAttribute('href', menuArray[ham][1]);
    const cloneCard = menuCard.cloneNode(true);
    fragmentMenuCard.appendChild(cloneCard);
    ham += 1;
})

containerMenuCard.appendChild(fragmentMenuCard);
