const { getInitials } = require('../src/function');
const { createSlug } = require('../src/function');
const { average } = require('../src/function');
const { isPalindrome } = require('../src/function');
const { findPostById } = require('../src/function');

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

test('la funzione "createSlug" lancia un errore se il titolo è vuoto', () => {
    expect(() => createSlug("")).toThrow();
    expect(() => createSlug(null)).toThrow();
    expect(() => createSlug(undefined)).toThrow();
});

test('la funzione findPostById restituisce il post corretto', () => {
    const posts = [
        { id: 1, title: "Post 1", slug: "post-1" },
        { id: 2, title: "Post 2", slug: "post-2" }
    ];
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Post 1", slug: "post-1" });
    expect(findPostById(posts, 999)).toBeUndefined();
});

test('la funzione findPostById lancia errori per dati non validi', () => {
    const validPosts = [
        { id: 1, title: "Post 1", slug: "post-1" }
    ];
    // se post non è un array
    expect(() => findPostById(null, 1)).toThrow();
    expect(() => findPostById("stringa", 1)).toThrow();
    // se id non è un numero
    expect(() => findPostById(validPosts, "stringa")).toThrow();
    expect(() => findPostById(validPosts, null)).toThrow();
    // se post non ha id, title o slug
    const badPosts = [
        { id: 1, title: "Post senza slug" },
        { id: 2, slug: "post-senza-title" }
    ];
    expect(() => findPostById(badPosts, 1)).toThrow();
});