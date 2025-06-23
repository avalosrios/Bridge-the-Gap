const express = require('express')
const session = require('express-session')
const authRouter = require('./routes/auth')

const server = express()
app.use(express.json())

app.use(authRouter)

// [CATCH-ALL]
server.use((req, res, next) => {
    console.log("Server catch all")
})

//  [ERROR-HANDLING]
server.use((err, req, res, next) => {
    const { message, status = 500 } = err;
    res.status(status).json({ message }); // Unsafe in prod
})

module.exports = server