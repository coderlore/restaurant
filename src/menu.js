import locoMocoPic from '../asset/loco.jpeg';

function loadMenu() {
    const content = document.querySelector('#content');
    content.id = 'content';

    const menuPage = document.createElement('div');
    menuPage.setAttribute('data-tab-content', 'menu')
    menuPage.classList.add('active');

    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = 'Menu';
    menuPage.appendChild(menuTitle);

    const menuItem = document.createElement('div');
    
    const foodImage = new Image();
    foodImage.src = locoMocoPic;
    foodImage.alt = 'Loco Moco';
    foodImage.style.height = '100px';
    foodImage.style.width = '100px';
    menuPage.appendChild(foodImage);

    const foodTitle = document.createElement('h2');
    foodTitle.innerHTML = 'Loco Moco';
    menuPage.appendChild(foodTitle);

    const foodDescription = document.createElement('p');
    foodDescription.innerHTML = '2 Hamburger patties topped with an egg (prepared how you like it)'
    menuPage.appendChild(foodDescription);

    menuPage.appendChild(menuItem);
    
    content.appendChild(menuPage)
    document.body.appendChild(content);
}

export default loadMenu