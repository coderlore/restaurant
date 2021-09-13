function contact() {
    const content = document.querySelector('#content');
    content.id = 'content';

    const contactPage = document.createElement('div');
    contactPage.setAttribute('data-tab-content', 'contact')
    contactPage.classList.add('tab-content');

    const contactTitle = document.createElement('h1');
    contactTitle.innerHTML = 'Contact us';
    contactPage.appendChild(contactTitle);
    content.appendChild(contactPage)
    document.body.appendChild(content);
}

export default contact