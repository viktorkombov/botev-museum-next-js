const { hash, compare } = require('bcryptjs');
const db = require('./db');

async function hashPassword(password) {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
}

async function verifyPassword(password, hashedPassword) {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}

function findUserById(id) {
    return db.execute(`SELECT * FROM users WHERE username = ?`, [id]);
}

module.exports = {
    hashPassword,
    verifyPassword,
    findUserById
}