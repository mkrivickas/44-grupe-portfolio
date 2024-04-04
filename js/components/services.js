function services(selector, data) {
    let HTML = '';

    for (const service of data) {
        HTML += `<div class="service">
                    <i class="et-line icon-${service.icon}"></i>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.desc}</p>
                </div>
`;
    }

    const servicesDOM = document.getElementById(selector);

    servicesDOM.innerHTML = HTML;

    return;
}

export { services };
