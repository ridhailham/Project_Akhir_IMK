
const Products = require("../models/BeritaModel.js");
const User = require("../models/UserModel.js")
const bcrypt = require("bcryptjs")
const {Op} = require('sequelize')

exports.getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['uuid','name','email','role', 'lomba', 'tim', 'status', 'wa', 'form_peserta', 'bukti_pembayaran']
        });
        res.status(200).json(response);
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

exports.getUserById = async (req, res) =>{

    try {
        const response = await User.findOne({
            attributes:['uuid','name','email','role', 'lomba', 'tim', 'status', 'wa', 'form_peserta', 'bukti_pembayaran'],
            where: {
                uuid: req.params.id
            }
        })
        res.status(200).json(response);
        
    } catch (error) {
        res.status(500).json({msg: error.message});
    }


    
}

// exports.createUser = async (req, res) => {
//     const { name, email, password, confPassword, role } = req.body;
  
//     if (name == null || email == null || password == null || confPassword == null || role == null) {
//       return res.status(400).json({
//         message: "mohon diisi dengan lengkap",
//       });
//     }
  
//     if (password !== confPassword) {
//       return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
//     }
  
//     // Email validation using regular expression for Gmail addresses
//     const isGmail = /@gmail\.com$/.test(email);
//     if (!isGmail) {
//       return res.status(400).json({ msg: "Email harus menggunakan Gmail" });
//     }
   
//     const isUserExist = await User.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });
  
//     if (isUserExist) {
//       return res.status(400).json({
//         message: "email sudah digunakan",
//       });
//     }


//     const hashPassword = await bcrypt.hash(password, 8)


//     try {
//       User.create({
//         name: name,
//         email: email,
//         password: hashPassword,
//         role: role,
//       });
//       res.status(201).json({ msg: "Register Berhasil" });
//     } catch (error) {
//       res.status(400).json({ msg: error.message });
//     }
//   };
  
exports.validationUser = async (req, res) => {
    console.log(req.params.id);
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!user) return res.status(404).json({ msg: "User not found" });

    


    try {
        await User.update({
            status: "sudah tervalidasi"
        }, {
            where: {
            uuid: user.uuid
            }
        });
        res.status(200).json({ msg: "Status telah tervalidasi" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

exports.cancelValidationUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!user) return res.status(404).json({ msg: "User not found" });

    


    try {
        await User.update({
            status: "belum tervalidasi"
        }, {
            where: {
                uuid: user.uuid
            }
        });
        res.status(200).json({ msg: "validasi dibatalkan" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}
  
  exports.updateUser = async (req, res) => {
      const user = await User.findOne({
          where: {
              uuid: req.params.id
          }
      });
      if (!user) return res.status(404).json({ msg: "User not found" });
  
      const { newPassword, confPassword } = req.body;
    //   const { oldPassword, newPassword, confPassword } = req.body;
  
      // Periksa apakah oldPassword sesuai dengan password yang ada dalam database
    //   const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
  
    //   if (!isOldPasswordValid) {
    //       return res.status(400).json({ msg: "Old Password is incorrect" });
    //   }
  
      let hashedPassword = user.password;
  
      if (newPassword && newPassword !== "") {
          if (newPassword !== confPassword) {
              return res.status(400).json({ msg: "New Password and Confirm Password do not match" });
          }
          hashedPassword = await bcrypt.hash(newPassword, 10);
      }
  
      try {
          await User.update({
              password: hashedPassword
          }, {
              where: {
                  uuid: user.uuid
              }
          });
          res.status(200).json({ msg: "Password Updated" });
      } catch (error) {
          res.status(400).json({ msg: error.message });
      }
  };
  


exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                uuid: req.params.id
            }
        });

        if (!user) {
            return res.status(404).json({ msg: "User tidak ditemukan" });
        }

        await user.destroy();
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

// exports.deleteUser = async (req, res) =>{
//     const user = await User.findOne({
//         where: {
//             uuid: req.params.id
//         }
//     })

//     if(!user) {
//         return res.status(404).json({msg: "User tidak ditemukan"})
//     }

//     try {
//         await User.destroy({
//             where:{
//                 id: user.id
//             }
//         });
//         res.status(200).json({msg: "User Deleted"});
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }