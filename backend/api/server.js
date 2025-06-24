const express = require('express')
const session = require('express-session')

const server = express()
server.use(express.json())

// ------------------------USER ROUTING------------------------- //

//[GET] /api/user/?name
//  Use prisma db commands to request for users based on usernames
server.get('/api/user', async (req, res, next) => {
    console.log('GET request for user')
})

//[PUT] /api/user/?name
server.put('/api/user', async (req, res, next) => {
    console.log('PUT request for user')
})

//[DELETE] /api/user/?name
server.delete('/api/user', async (req, res, next) => [
    console.log('DELETE request for user')
])

// ------------------------------------------------------------ //

// -----------------------GROUP ROUTING------------------------ //

server.get('api/groups', async (req, res, next) => {
    console.log("GET request for groups")
})

server.put('api/groups', async (req, res, next) => {
    console.log("PUT request for groups")
})

server.post('api/groups', async (req, res, next) => {
    console.log("POST request for groups")
})

server.delete('api/groups', async (req, res, next) => {
    console.log("DELETE request for groups")
})

// ------------------------------------------------------------ //

// [CATCH-ALL]
server.use((req, res, next) => {
    console.log("Server catch all")
})

//  [ERROR-HANDLING]
server.use((err, req, res, next) => {
    const { message, status = 500 } = err;
    res.status(status).json({ message }); // REMOVE FROM PROD
})

module.exports = server