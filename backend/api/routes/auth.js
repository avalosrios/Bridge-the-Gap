const router = require('express').Router()

//  [POST/ REGISTER]
//  Check username for uniqueness, hash password and add user to db
router.post('api/auth/register', async (req, res, next) => {
    const {username, password: plainPassword} = req.body;
})

//  [POST/ LOGIN]
//  Check username matches user in db, and password matches hash in db
router.post('api/auth/login', async (req, res, next) => {
    const { username, password: plainPassword } = req.body
})

//  [POST/ LOGOUT]
//  Destroy current user session
router.post('api/auth/logout', async (req, res, next) => {

})