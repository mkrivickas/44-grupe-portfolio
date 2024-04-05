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
    test('Selector as function', () => {
        expect(services(services)).toBe(false);
    });
    test('Selector as empty string', () => {
        expect(services(services('')).toBe(false);
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

describe('Partially invalid params: selector', () => {
    test('No element with id: "a"', () => {
        const data = [{
            icon: 'desktop',
            title: 'Search optimization',
            desc: 'The9 is a graphically polished, interactive'
        }];
        document.body.innerHTML = '<div></div>';
        expect(services('a', data)).toBe(false);
    });
    test('No element with id: "a"', () => {
        const data = [{
            icon: 'desktop',
            title: 'Search optimization',
            desc: 'The9 is a graphically polished, interactive'
        }];
        document.body.innerHTML = '<div id="b"></div>';
        expect(services('a', data)).toBe(false);
    });
});

describe('Valid params: selector', () => {
    test('Element with id: "a"', () => {
        const data = [{
            icon: 'desktop',
            title: 'Search optimization',
            desc: 'The9 is a graphically polished, interactive'
        }];
        document.body.innerHTML = '<div id="a"></div>';
        expect(services('a', data)).toBe(true);
    });
});

// describe('Correct params', () => {
//     test('No params', () => {
//         expect(services('a', [])).toBe(undefined);
//     });
// });

