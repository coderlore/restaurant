import contact from "./contact.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";

function navbar() {
    const content = document.querySelector('#content');
    content.id = 'content';
    const restaurantName = document.createElement('h2');
    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    
    restaurantName.textContent = 'Hawaiian Restaurant';
    
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('page-nav');
    homeBtn.classList.add('active');
    homeBtn.addEventListener('click', (e) => {
        setActive(homeBtn);
        loadHome();
    });

    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('page-nav');
    menuBtn.addEventListener('click', (e) => {
        setActive(menuBtn);
        loadMenu();
    });

    contactBtn.textContent = 'Contact Us';
    contactBtn.classList.add('page-nav');
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActive(contactBtn)
        contact();
    });

    nav.appendChild(restaurantName);
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    content.appendChild(nav)
    document.body.appendChild(content);
}

function setActive(button) {
    const buttons = document.querySelectorAll('.page-nav');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            });
        };
    });
    button.classList.add('active');
}

export default navbar