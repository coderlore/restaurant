function navbar() {
    const restaurantName = document.createElement('h2');
    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    
    restaurantName.textContent = 'Hawaiian Restaurant';
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact Us';

    nav.appendChild(restaurantName);
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    document.body.appendChild(nav);
}

export default navbar