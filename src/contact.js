import mapRestaurant from '../asset/map.jpeg';

function contact() {
    const content = document.querySelector('#content');
    content.id = 'content';

    const contactPage = document.createElement('div');
    contactPage.id = 'contact'
    contactPage.setAttribute('data-tab-content', 'contact')
    contactPage.classList.add('tab-content');

    const contactTitle = document.createElement('h1');
    contactTitle.innerHTML = 'Contact us';
    contactPage.appendChild(contactTitle);

    const phone = document.createElement('p');
    phone.innerHTML = '(808)123-4567';
    contactPage.appendChild(phone);
    
    const address = document.createElement('p');
    address.innerHTML = '123 Kamehameha Hwy, Honolulu, HI';
    contactPage.appendChild(address);

    const hours = document.createElement('p');
    hours.innerHTML = 'Hours: Mon-Fri 8am-10pm Sat-Sun 10am-10pm';
    contactPage.appendChild(hours);

    const mapImage = new Image();
    mapImage.id = 'mapImage';
    mapImage.src = mapRestaurant;
    mapImage.alt = 'Location on map';
    mapImage.style.height = '300px';
    mapImage.style.width = '400px';
    contactPage.appendChild(mapImage);

    content.appendChild(contactPage)
    document.body.appendChild(content);
}

export default contact