// Hash and verify passwords using argon2
// Wiki for argon2: https://github.com/ranisalt/node-argon2/wiki/Options
// Using argon2i hash type as it's slower and resistant against tradeoff attacks, 
// which is preferred for password hashing and key derivation

const argon2 = require('argon2');

async function hashPassword (plainPassword) {
    try {
        const hash = await argon2.hash(plainPassword, {type: argon2.argon2i});
        return hash;
    } catch (error) {
        console.log("Error Hashing Password")
    }
}

async function verifyPassword(plainPassword, hash) {
    try {
        return await argon2.verify(hash, plainPassword);
    } catch (error) {
        return false;
    }
}

module.exports = { hashPassword, verifyPassword }