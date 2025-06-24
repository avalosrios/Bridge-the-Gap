//Import Prisma client library and instantiate
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//Export functions to interact with prisma database
module.exports = {

    //-----------------------User DB Requests------------------------//

    async findUser() {
        console.log('findUser request made')
    },

    async createUser() {
        console.log('createUser request made')
    },

    async updateUser() {
        console.log('updateUser request made')
    },

    async deleteUser() {
        console.log('deleteUser request made')
    },

    //---------------------------------------------------------------//

    //-----------------------Group DB Requests-----------------------//

    async findGroup() {
        console.log('findGroup request made')
    },

    async createGroup() {
        console.log('createGroup request made')
    },

    async updateGroup() {
        console.log('updateGroup request made')
    },

    async deleteGroup() {
        console.log('deleteGroup request made')
    },
    //---------------------------------------------------------------//

}