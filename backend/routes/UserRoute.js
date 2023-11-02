
const express = require("express")

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    cancelValidationUser,
    validationUser,


} = require("../controllers/Users.js")

const { adminOnly } = require('../middleware/AuthUser.js')
const { verifyToken } = require('../middleware/verifyToken.js')


const router = express.Router();

router.use(function(req, res, next) {
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, Origin, Content-Type, Accept'
    )
    next()

})


// ==================== PESERTA ========================== //
router.get('/users/:id', verifyToken, getUserById)



// ==================== ADMIN PAGE ======================= //
router.get('/users', verifyToken, adminOnly, getUsers)
router.get('/users/:id', verifyToken, adminOnly, getUserById)
router.patch('/users/verify/:id', verifyToken, adminOnly, validationUser)

router.patch('/users/unverify/:id', verifyToken, adminOnly, cancelValidationUser)
router.delete('/users/:id', verifyToken, adminOnly, deleteUser)
router.get('/test', (req, res) => {
    res.send("Test berhasil dilakukan")
})


module.exports = router

