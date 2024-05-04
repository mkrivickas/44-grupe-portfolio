// return -> error-first

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    const x = window.innerWidth || document.documentElement.clientWidth;
    const y = window.innerHeight || document.documentElement.clientHeight;

    return rect.bottom > 0 && rect.right > 0 && rect.left < x && rect.top < y;
}

function socialMetrics(selector, data) {
    if (typeof selector !== 'string' || selector === '') {
        return [true, 'ERROR: selector has to be non-empty string'];
    }

    const DOM = document.querySelector(selector);
    if (DOM === null) {
        return [true, 'ERROR: could not find DOM element'];
    }

    if (!Array.isArray(data) || data.length === 0) {
        return [true, 'ERROR: data has to be non-empty array'];
    }

    // Generuojame turinį
    let HTML = '';

    for (const item of data) {
        HTML += `<li class="metric">
                  <div class="number">${item.number}</div>
                  <div class="label">${item.label}</div>
                </li >`;
    }

    DOM.classList.add('social-metrics');
    DOM.innerHTML = HTML;

    // Stebim scroll'ą
    const metricsDOM = DOM.querySelectorAll('.metric');
    const animatedMetrics = new Array(metricsDOM.length).fill(false);

    window.addEventListener('scroll', () => {
        let i = -1;
        for (const metricDOM of metricsDOM) {
            i++;
            if (animatedMetrics[i]) {
                continue;
            }
            if (isElementInViewport(metricDOM)) {
                animatedMetrics[i] = true;
                console.log('animuojame:', i);
            }
        }
    });

    return [false, 'OK'];
}

export { socialMetrics };
