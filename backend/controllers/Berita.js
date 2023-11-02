
const { response } = require("express")
const Berita = require("../models/BeritaModel.js")
const User = require("../models/UserModel.js")
const {Op, where} = require("sequelize")


exports.getBerita = async (req, res) => {
    try {
        let response;

        response = await Berita.findAll({
            attributes: ['name', 'link', 'image'], // Memilih atribut yang ingin ditampilkan
        });

        // if (response.length === 0) {
        //     return res.status(200).json({
        //         message: req.role === "admin" ? "Tidak ada produk yang ditemukan" : "Produk milik user tidak ditemukan"
        //     });
        // }

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Terjadi kesalahan pada server"
        });
    }
};




exports.getBeritaOnAdmin = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Berita.findAll({
                // attributes: ['uuid', 'name', 'link' ],
                attributes: ['uuid', 'name', 'link', 'image'],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Berita.findAll({
                // attributes: ['uuid', 'name', 'link'],
                attributes: ['uuid', 'name', 'link', 'image'],
                where: {
                    userUuid: req.user.uuid
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }

        if (response.length === 0) {
            return res.status(200).json({
                message: req.role === "admin" ? "Tidak ada berita yang ditemukan" : "Berita milik user tidak ditemukan"
            });
        }

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Terjadi kesalahan pada server"
        });
    }
};


exports.getBeritaById = async (req, res) => {
    try {
        const berita = await Berita.findOne({
            where: {
                uuid: req.params.id
            }
        });

        if (!berita) {
            return res.status(400).json({
                message: "Berita tidak ditemukan"
            });
        }

        let response;

        if (req.role === "admin") {
            response = await Berita.findOne({
                attributes: ['uuid', 'name', 'link', 'image'],
                where: {
                    id: berita.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });

        } else {
            response = await Berita.findOne({
                attributes: ['uuid', 'name', 'link', 'image'],
                where: {
                    [Op.and]: [{ id: berita.id }, { userId: req.userId }]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }

        if (!response) {
            return res.status(400).json({
                message: req.role === "admin" ? "User tidak ditemukan" : "Berita milik user tidak ditemukan"
            });
        }

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Terjadi kesalahan pada server"
        });
    }
};


exports.createBerita = async (req, res) =>{
    try {
        const { name, link, userId } = req.body

        

        await Berita.create({
            name: name,
            link: link,
            image: req.file.path,
            userUuid: req.user.uuid
        })

        res.status(200).json({
            content: {name, link},
            message: "berita created successfully"
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
    
}


// exports.updateBerita = async (req, res) => {
//     try {
//         const { name, link } = req.body

//         await Berita.update({
//             name: name,
//             link: link,
//             image: req.file.path,
//             userId: req.userId
//         }, {
//             where: {
//                 uuid: req.params.uuid
//             }
//         })

//         res.status(200).json({
//             message: "berita created successfully"
//         })
//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// }



exports.updateBerita = async (req, res) => {
    try {
        const { name, link } = req.body;
        const beritaUUID = req.params.id; // Get the berita UUID from the URL

        const berita = await Berita.findOne({
            where: {
                uuid: beritaUUID,
            },
        });

        if (!berita) {
            return res.status(400).json({
                message: "Berita not found",
            });
        }

        // Prepare fields for update
        const updateFields = {
            name,
            link,
        };

        // Check if a new image has been uploaded
        

        if (req.file) {
            updateFields.image = req.file.path;
        }

        // Update the berita using the updateFields and the berita's UUID
        await Berita.update(updateFields);

        res.status(200).json({
            data: updateFields,
            message: "Berita updated successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred on the server",
        });
    }
};




exports.deleteBerita = async (req, res) => {
    try {
        const berita = await Berita.findOne({
            where: {
                uuid: req.params.id
            }
        })

        if (!berita) {
            return res.status(404).json({
                message: "Berita tidak ditemukan"
            });
        }

        await Berita.destroy({
            where: {
                uuid: berita.uuid
            }
        });

        res.status(204).json({
            message: "berhasil delete berita"
        }); // Mengembalikan status 204 No Content setelah menghapus berita
    } catch (error) {
        console.error(error); // Log kesalahan
        res.status(500).json({ message: "Terjadi kesalahan saat menghapus berita" });
    }
}



// exports.deleteBerita = async (req, res) =>{
//     try {
//         const berita = await Berita.findOne({
//             where: {
//                 uuid: req.params.id
//             }
//         })

//         if(!berita) {
//             return res.status(400).json({
//                 message: "produk tidak ditemukan"
//             })
//         }

//         const {name, link} = req.body

        
//             await Berita.destroy({
//                 where: {
//                     uuid: berita.uuid
//                 }
//             })
        

//         res.status(200).json({
//             message: "berita deleted successfully"
//         })
//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// }
