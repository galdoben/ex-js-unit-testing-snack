const { getInitials } = require('../src/function');
const { createSlug } = require('../src/function');

test('la funzione "getInitials" deve restituire le iniziali di un nome completo', () => {
    expect(getInitials("Mario Rossi")).toBe("MR");
});

test('la funzione "createSlug" deve restituire una stringa tutta in minuscolo', () => {
    expect(createSlug('CIAO')).toBe('ciao');
}); 