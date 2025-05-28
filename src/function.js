//funzione per calcolare le iniziali di un nome e cognome
function getInitials(fullName) {
    return fullName.split(" ")[0][0] + fullName.split(" ")[1][0];
}
//funzione per creare uno slug
function createSlug(string) {
    if (string === "") {
        throw new Error("Il titolo non può essere vuoto");
    }
    return string.toLowerCase().replaceAll(" ", "-");
}
//funzione per calcolare la media aritmetica di un array di numeri
function average(array) {
    return array.reduce((a, b) => a + b) / array.length
}

//funzione per verificare se una stringa è palindroma
function isPalindrome(string) {
    return string.split("").reverse().join("") === string;
}

//funzione per trovare un post per id
function findPostById(posts, id) {
    if (!Array.isArray(posts)) {
        throw new Error("I post devono essere un array");
    }
    if (typeof id !== 'number') {
        throw new Error("L'id deve essere un numero");
    }
    if (posts.some(post => typeof post.id !== 'number' || !post.title || !post.slug)) {
        throw new Error("Ogni post deve avere un id, un titolo e uno slug");
    }
    return posts.find(post => post.id === id);
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById

}