function loadHome() {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    let h1 = document.createElement('h1');

    h1.innerHTML = '<p>Welcome to the restaurant!!</p>';

    document.body.appendChild(h1);
}

export default loadHome