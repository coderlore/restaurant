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
    
    restaurantName.textContent = 'Aloha Poke';
    
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('page-nav');
    homeBtn.classList.add('active');
    homeBtn.setAttribute('data-for-tab', 'home');
    homeBtn.addEventListener('click', (e) => {
        setActive(homeBtn);
    });

    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('page-nav');
    menuBtn.setAttribute('data-for-tab', 'menu');
    menuBtn.addEventListener('click', (e) => {
        setActive(menuBtn);
    });

    contactBtn.textContent = 'Contact Us';
    contactBtn.classList.add('page-nav');
    contactBtn.setAttribute('data-for-tab', 'contact');
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActive(contactBtn)
    });

    nav.appendChild(restaurantName);
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    content.appendChild(nav)
    document.body.appendChild(content);
}

function setActive(button) {
    document.querySelectorAll('.page-nav').forEach(button => {
        button.addEventListener('click',() => {
            const sidebar = button.parentElement;
            const contentDiv = sidebar.parentElement;
            const tabData = button.dataset.forTab;
            const tabActivate = contentDiv.querySelector(`.tab-content[data-tab-content="${tabData}"]`)

            sidebar.querySelectorAll('.page-nav').forEach(button => {
                button.classList.remove('active')
            })
            contentDiv.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('show')
            })
            button.classList.add('active')
            tabActivate.classList.add('show')
        })
    });
}

export default navbar