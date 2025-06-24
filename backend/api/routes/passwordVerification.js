// Hash and verify passwords using argon2
// Wiki for argon2: https://github.com/ranisalt/node-argon2/wiki/Options
const argon2 = require('argon2');

async function hashPassword (password) {

}

function verifyPassword(password, hash) {

}

module.exports = { hashPassword, verifyPassword }