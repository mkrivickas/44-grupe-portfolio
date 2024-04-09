/**
 * @jest-environment jsdom
 */

import { services } from './services.js';

describe('Wrong params: selector', () => {
    test('No params', () => {
        expect(services()).toBe(false);
    });

    test('Selector as number', () => {
        expect(services(5)).toBe(false);
    });

    test('Selector as boolean', () => {
        expect(services(true)).toBe(false);
    });

    test('Selector as array', () => {
        expect(services([])).toBe(false);
    });

    test('Selector as object', () => {
        expect(services({})).toBe(false);
    });

    test('Selector as empty string', () => {
        expect(services('')).toBe(false);
    });
});

describe('Wrong params: data', () => {
    test('No data', () => {
        expect(services('a')).toBe(false);
    });

    test('Data as number', () => {
        expect(services('a', 5)).toBe(false);
    });

    test('Data as boolean', () => {
        expect(services('a', false)).toBe(false);
    });

    test('Data as function', () => {
        expect(services('a', services)).toBe(false);
    });

    test('Data as empty string', () => {
        expect(services('a', '')).toBe(false);
    });

    test('Data as non-empty string', () => {
        expect(services('a', 'asd')).toBe(false);
    });

    test('Data as object', () => {
        expect(services('a', {})).toBe(false);
    });

    test('Data as null', () => {
        expect(services('a', null)).toBe(false);
    });

    test('Data as empty array', () => {
        expect(services('a', [])).toBe(false);
    });
});

describe('Partialy invalid params: selector', () => {
    test('No element with id: "a"', () => {
        const data = [
            {
                icon: 'desktop',
                title: 'Search optimization',
                desc: 'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading.',
            },
        ];
        document.body.innerHTML = '<div></div>';
        expect(services('a', data)).toBe(false);
    });

    test('No element with id: "a"', () => {
        const data = [
            {
                icon: 'desktop',
                title: 'Search optimization',
                desc: 'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading.',
            },
        ];
        document.body.innerHTML = '<div id="b"></div>';
        expect(services('a', data)).toBe(false);
    });
});

describe('Partialy invalid params: data', () => {
    test('All data elements are incorrect type (not true object)', () => {
        const data = [5, 'asd', true, [], services, null, undefined];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    });

    test('Empty object', () => {
        const data = [{}];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    });

    test('Incorrect object: not enough keys (1)', () => {
        const data = [
            {
                icon: 'desktop',
            },
        ];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    });

    test('Incorrect object: not enough keys (2)', () => {
        const data = [
            {
                icon: 'desktop',
                title: 'My service',
            },
        ];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    });

    test('Incorrect object: too many keys (4)', () => {
        const data = [
            {
                icon: 'desktop',
                title: 'My service',
                desc: 'My service',
                extra: 'extra',
            },
        ];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    });

    test('Incorrect object: key names', () => {
        const data = [
            {
                a: 'desktop',
                b: 'My service',
                c: 'My service',
            },
            {
                i: 'desktop',
                title: 'My service',
                desc: 'My service',
            },
            {
                icon: 'desktop',
                t: 'My service',
                desc: 'My service',
            },
            {
                icon: 'desktop',
                title: 'My service',
                d: 'My service',
            },
            {
                icon: 'desktopdesktop',
                title: 'My service',
                desc: 'My service',
            },
            {
                icon: 'desktop',
                title: ' ',
                desc: 'My service',
            },
            {
                icon: 'desktop',
                title: 'My service',
                desc: ' ',
            },
            {
                icon: 'desktop',
                title: '             ',
                desc: 'My service',
            },
            {
                icon: 'desktop',
                title: 'My service',
                desc: '             ',
            },
            {
                icon: 'desktop',
                title: '?><|',
                desc: 'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading.',
            },
        ];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(0);
    });
});

describe('Valid params', () => {
    test('Element with id: "a"', () => {
        const data = [
            {
                icon: 'desktop',
                title: 'Search',
                desc: 'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading.',
            },
            {
                icon: 'desktop',
                title: 'Search optimization',
                desc: 'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading.',
            },
            {
                icon: 'desktop',
                title: ' Search optimization',
                desc: 'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading.',
            },
            {
                icon: 'desktop',
                title: '        Search optimization         ',
                desc: 'The9 is a graphically polished, interactive, easily customizable, highly modern, fast loading.',
            },
        ];
        document.body.innerHTML = '<div id="a"></div>';
        const response = services('a', data);
        expect(response).toBe(true);
        expect(document.body.querySelectorAll('.service').length).toBe(4);
    });
});
