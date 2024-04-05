function services(selector, data) {
    if (typeof selector !== 'string' || selector === '') {
        return false;
    }
    if (!Array.isArray(data) || data.length === 0) {
        return false;
    }

    const servicesDOM = document.getElementById(selector); // null

    if (servicesDOM === null) {
        return false;
    }

    let HTML = '';

    for (const service of data) {
        HTML += `<div class="service">
                    <i class="et-line icon-${service.icon}"></i>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.desc}</p>
                </div>`;
    }

    servicesDOM.innerHTML = HTML;

    return;
}

export { services };
