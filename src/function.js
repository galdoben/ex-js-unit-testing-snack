function getInitials(fullName) {
    return fullName.split(" ")[0][0] + fullName.split(" ")[1][0];
}

function createSlug(string) {
    return string.toLowerCase();
}




module.exports = {
    getInitials,
    createSlug
}