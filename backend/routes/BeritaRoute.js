const express = require("express")
const { 
    getBerita, 
    getBeritaById, 
    createBerita, 
    updateBerita, 
    deleteBerita, 
    getBeritaOnAdmin} = require("../controllers/Berita.js")

const { verifyUser, adminOnly } = require("../middleware/AuthUser.js")

const multer = require('multer')

const path = require('path');
const { verifyToken } = require("../middleware/verifyToken.js");

const router = express.Router()



const storageProducts = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./assets/products");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// Filter untuk menerima hanya data gambar
const imageFilter = function (req, file, cb) {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    
    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        cb(new Error('File format not supported'));
    }
};

// UPLOAD PRODUCTS dengan filter
const uploadProducts = multer({
    storage: storageProducts,
    fileFilter: imageFilter
});

router.use(function(req, res, next) {
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, Origin, Content-Type, Accept'
    )
    next()

})

router.get('/berita', getBerita)



// =========================== ADMIN PAGE ================================= //
router.post('/admin/berita', uploadProducts.single('image'), verifyToken, adminOnly, createBerita);

router.get('/admin/berita', verifyToken, adminOnly ,getBeritaOnAdmin)

router.get('/berita/:id', verifyToken, adminOnly, getBeritaById)


router.patch('/berita/:id', verifyToken, adminOnly, updateBerita)
router.delete('/admin/berita/:id', verifyToken, adminOnly, deleteBerita)

module.exports = router