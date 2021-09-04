import contact from "./contact.js";
import loadHome from "./home.js";

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
    homeBtn.addEventListener('click', (e) => {
        loadHome();
    });

    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('page-nav');
    menuBtn.addEventListener('click', (e) => {
        alert('Im menu');
    });

    contactBtn.textContent = 'Contact Us';
    contactBtn.classList.add('page-nave');
    contactBtn.addEventListener('click', (e) => {
        contact();
    });

    nav.appendChild(restaurantName);
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    content.appendChild(nav)
    document.body.appendChild(content);
}

export default navbar