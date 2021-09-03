function loadHome() {
    const content = document.querySelector('#content');
    content.id = 'content';

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Come and try our ono (delicious) food!';
    content.appendChild(h1);

    const p = document.createElement('p');
    p.innerHTML = 'Tasty Hawaiian food at an affordable price';
    content.appendChild(p);

    document.body.appendChild(content);
}

export default loadHome