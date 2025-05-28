const { getInitials } = require('../src/function');
const { createSlug } = require('../src/function');
const { average } = require('../src/function');
const { isPalindrome } = require('../src/function');

test('la funzione "getInitials" deve restituire le iniziali di un nome completo', () => {
    expect(getInitials("Mario Rossi")).toBe("MR");
});

test('la funzione "createSlug" deve restituire una stringa tutta in minuscolo', () => {
    expect(createSlug('CIAO')).toBe('ciao');
});

test('la funzione "average" calcola la media aritmetica di un array di numeri', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
});

test('la funzione "createSlug" deve sostituire gli spazi con "-"', () => {
    expect(createSlug('ciao mondo')).toBe('ciao-mondo');
});

test('La funzione "isPalindrome" verifica se una stringa si legge in ugual modo da sinistra a destra e viceversa', () => {
    expect(isPalindrome('radar')).toBeTruthy();
});