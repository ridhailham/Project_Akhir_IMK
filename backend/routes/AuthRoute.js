    const express = require("express")
    const { 
        Login, 
        Me, 
        logOut,
        Register,
        RegisterBasket,
        RegisterMobileLegend,
        RegisterPubg,
        RegisterSilat,
        LoginAdmin
     } = require("../controllers/Auth.js")

    const { verifyToken } = require('../middleware/verifyToken.js');
const { adminOnly } = require("../middleware/AuthUser.js");

    const router = express.Router();

    router.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'Authorization, Origin, Content-Type, Accept'
        )
        next()

    })



    router.post('/basket/register', RegisterBasket)
    router.post('/mobilelegend/register', RegisterMobileLegend)
    router.post('/pubg/register', RegisterPubg)
    router.post('/silat/register', RegisterSilat)



    router.get('/me', verifyToken ,Me)
    router.post('/login', Login)
    router.delete('/logout', logOut)



    // PAGE ADMIN LOGIN
    router.post('/admin/login', LoginAdmin)


    module.exports = router;