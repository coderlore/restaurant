function loadHome() {
    let content = document.querySelector('#content');
    content.id = 'content';

    let h1 = document.createElement('h1');
    h1.innerHTML = 'Come and try our tasty food!';
    content.appendChild(h1);
    document.body.appendChild(content);
}

export default loadHome