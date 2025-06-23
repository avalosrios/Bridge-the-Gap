const express = require('express')

const server = express()

// [CATCH-ALL]
server.use((req, res, next) => {
    console.log("Server catch all")
})

module.exports = server