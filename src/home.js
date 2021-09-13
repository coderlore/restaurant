import chef from '../asset/chef.jpeg';

function loadHome() {  
    const content = document.querySelector('#content');
    content.id = 'content';

    const homePage = document.createElement('div');
    homePage.id = 'home';
    homePage.setAttribute('data-tab-content', 'home')
    homePage.classList.add('show');
    homePage.classList.add('tab-content');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Come and try our ono (delicious) food!';
    homePage.appendChild(h1);

    const p = document.createElement('p');
    p.innerHTML = 'Tasty Hawaiian food at an affordable price';
    homePage.appendChild(p);

    const chefImage = new Image();
    chefImage.src = chef;
    chefImage.alt = 'Chef Sherry';
    chefImage.style.height = '300px';
    chefImage.style.width = '300px';
    homePage.appendChild(chefImage);

    const message = document.createElement('p');
    message.innerHTML = 'Come and visit us!';
    homePage.appendChild(message);

    content.appendChild(homePage)
    document.body.appendChild(content);
}

export default loadHome