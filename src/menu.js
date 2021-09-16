function loadMenu() {
    const content = document.querySelector('#content');
    content.id = 'content';

    const menuPage = document.createElement('div');
    menuPage.id = 'menu';
    menuPage.setAttribute('data-tab-content', 'menu')
    menuPage.classList.add('tab-content');

    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = 'Menu';
    menuPage.appendChild(menuTitle);

    const menuItem = document.createElement('div');

    const pokeTitle = document.createElement('h2');
    pokeTitle.classList.add('menu-item');
    pokeTitle.innerHTML = 'Poke Bowl .............................. $15';
    menuPage.appendChild(pokeTitle);

    const pokeDescription = document.createElement('p');
    pokeDescription.classList.add('menu-item');
    pokeDescription.innerHTML = 'Spicy ahi on a bed of white rice. Topped with furikake.'
    menuPage.appendChild(pokeDescription);

    const shoyuTitle = document.createElement('h2');
    shoyuTitle.classList.add('menu-item');
    shoyuTitle.innerHTML = 'Shoyu Poke Bowl .................. $15';
    menuPage.appendChild(shoyuTitle);

    const shoyuDescription = document.createElement('p');
    shoyuDescription.classList.add('menu-item');
    shoyuDescription.innerHTML = 'Shoyu ahi on a bed of white rice. Topped with furikake.'
    menuPage.appendChild(shoyuDescription);

    const wasabiTitle = document.createElement('h2');
    wasabiTitle.classList.add('menu-item');
    wasabiTitle.innerHTML = 'Wasabi Aioli Poke Bowl ........ $16';
    menuPage.appendChild(wasabiTitle);

    const wasabiDescription = document.createElement('p');
    wasabiDescription.classList.add('menu-item');
    wasabiDescription.innerHTML = 'Wasabi aioli ahi on a bed of white rice. Topped with furikake.'
    menuPage.appendChild(wasabiDescription);

    const srirachaTitle = document.createElement('h2');
    srirachaTitle.classList.add('menu-item');
    srirachaTitle.innerHTML = 'Sriracha Aioli Poke Bowl ...... $16';
    menuPage.appendChild(srirachaTitle);

    const srirachaDescription = document.createElement('p');
    srirachaDescription.classList.add('menu-item');
    srirachaDescription.innerHTML = 'Sriracha aioli ahi on a bed of white rice. Topped with furikake.'
    menuPage.appendChild(srirachaDescription);

    const foodTitle = document.createElement('h2');
    foodTitle.classList.add('menu-item');
    foodTitle.innerHTML = 'Loco Moco ............................. $10';
    menuPage.appendChild(foodTitle);

    const foodDescription = document.createElement('p');
    foodDescription.classList.add('menu-item');
    foodDescription.innerHTML = '2 Hamburger patties topped with an egg.'
    menuPage.appendChild(foodDescription);

    menuPage.appendChild(menuItem);
    
    content.appendChild(menuPage)
    document.body.appendChild(content);
}

export default loadMenu