function loadHome() {
    let content = document.querySelector('#content');
    content.id = 'content';

    let h1 = document.createElement('h1');
    h1.innerHTML = 'Come and try our tasty food!';
    content.appendChild(h1);

    let p = document.createElement('p');
    p.innerHTML = 'Tasty Hawaiian food at an affordable price'
    content.appendChild(p);

    document.body.appendChild(content);
}

export default loadHome