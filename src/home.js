function loadHome() {  
    const content = document.querySelector('#content');
    content.id = 'content';

    const homePage = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Come and try our ono (delicious) food!';
    homePage.appendChild(h1);

    const p = document.createElement('p');
    p.innerHTML = 'Tasty Hawaiian food at an affordable price';
    homePage.appendChild(p);

    content.appendChild(homePage)
    document.body.appendChild(content);
}

export default loadHome