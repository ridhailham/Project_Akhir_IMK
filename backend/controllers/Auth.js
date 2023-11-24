
const User = require("../models/UserModel.js")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const nodemailer = require('nodemailer');

dotenv.config()


const { secret } = require("../config/auth.js");
const { refreshToken } = require("./RefreshToken.js")




exports.Login = async (req, res, next) => {

  const { body } = req;

  try {
      const user = await User.findOne({
          where: {
              email: body.email
          }
      });

      if (!user) {
          return res.status(403).json({
              message: 'User Not Found'
          });
      }

      if(user.role != "user") {
        return res.status(400).json({
          message: "bukan user"
        })
      }

      const passwordIsValid = bcrypt.compareSync(body.password, user.password);

      if (!passwordIsValid) {
          return res.status(400).json({
              accessToken: null,
              message: 'Invalid password'
          });
      }

      const data = {
          uuid: user.uuid,
          name: user.name,
          email: user.email,
          // role: user.role
        };

      const token = jwt.sign( data,
          secret, // Secret key
          {
              expiresIn: '1h', // Token expiration time (adjust as needed)
          }
      );

      // res.cookie("token", token, {
      //   httpOnly: true
      // });

      // const refreshToken = jwt.sign({ userId }, config.secret, {
      //     expiresIn: '86400'
      // });

      // await User.update({ refresh_token: refreshToken }, {
      //     where: {
      //         uuid: userId
      //     }
      // });

      // res.cookie("refreshToken", refreshToken, {
      //     httpOnly: true,
      //     maxAge: 12,
      // });

      console.log(user.lomba);

      res.status(200).json({ 
        token: token,
        lomba: user.lomba,
        message: "login berhasil"
       });

      next();
      
  } catch (err) {
      console.error(err);
      res.status(500).json({
          message: "Internal Server Error"
      });
  }
}


exports.LoginAdmin = async (req, res, next) => {

  const { body } = req;

  try {
      const user = await User.findOne({
          where: {
              email: body.email
          }
      });

      console.log(user);

      if (!user) {
          return res.status(403).json({
              message: 'User Not Found'
          });
      }

     

      if(user.role != "admin") {
        return res.status(400).json({
          message: "bukan admin " 

        })
      }

      const passwordIsValid = bcrypt.compareSync(body.password, user.password);

      if (!passwordIsValid) {
          return res.status(400).json({
              accessToken: null,
              message: 'Invalid password'
          });
      }

      const data = {
          uuid: user.uuid,
          name: user.name,
          email: user.email,
          // role: user.role
        };

      const token = jwt.sign( data,
          secret, // Secret key
          {
              expiresIn: '1h', // Token expiration time (adjust as needed)
          }
      );

      

      // const refreshToken = jwt.sign({ userId }, config.secret, {
      //     expiresIn: '86400'
      // });

      // await User.update({ refresh_token: refreshToken }, {
      //     where: {
      //         uuid: userId
      //     }
      // });

      // res.cookie("refreshToken", refreshToken, {
      //     httpOnly: true,
      //     maxAge: 12,
      // });

      res.status(200).json({ 
        token: token,
        message: "login berhasil"
        
      });

      

      next();
      
  } catch (err) {
      console.error(err);
      res.status(500).json({
          message: "Internal Server Error"
      });
  }
}




// exports.Login = async (req, res) => {

//   try {
//     const user = await User.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });
  
//     if (!user) {
//       return res.status(400).json({
//         message: 'Email not found',
//       });
//     }
  
//     const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
  
//     if (!isPasswordValid) {
//       return res.status(400).json({
//         message: 'Incorrect password',
//       });
//     }
//     const userId = user.uuid
//     const name = user.name
//     const email = user.email
//     const role = user.role
  
//     // Generate a JWT token
//     const accessToken = jwt.sign({ userId, name, email, role},
//       'secret-key', // Secret key
//       {
//         expiresIn: '3h', // Token expiration time (adjust as needed)
//       }
//     );
  
//     const refreshToken = jwt.sign({userId}, 
//       'secret-key',
//       {
//         expiresIn: '1d'
//       })
  
//     await User.update({refresh_token: refreshToken}, {
//       where: {
//         uuid: userId
//       }
//     })
  
//     res.cookie("refreshToken", refreshToken, {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000,
      
//     });

//     res.json({accessToken})

//   } catch (error) {
//     console.log(error);
//   }
  

  





  // res.status(200).json({
  //   token,
  //   uuid: user.uuid,
  //   name: user.name,
  //   email: user.email,
  //   role: user.role,
  // });




exports.Me = async (req, res) => {
    // if(!req.session.userId) {
    //     return res.status(400).json({
    //         message: "silakan login ke akun anda dahulu"
    //     })
    // }

    if(!req.user) {
        return res.status(400).json({
            message: "silakan login ke akun anda dahulu"
        })
}

    
    // console.log(req.user.dataValues.uuid);

    const user = await User.findOne({
      
        attributes: ['uuid', 'name', 'email', 'lomba', 'tim', 'wa', 'status'],
        where: {
            uuid: req.user.dataValues.uuid
        }
    })

    // console.log(user);

    if(!user) {
        return res.status(400).json({
            message: "User tidak ditemukan"
        })
    }

    res.status(200).json(user)
}


exports.logOut = async(req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if(!refreshToken) return res.status(204).json({
    message: "anda belum login dan token tidak ada sejak awal"
  })

  const user = await User.findOne({
      where: {
          refresh_token: refreshToken
      }
  })
  if(!user) return res.status(204)

  const userId = user.uuid
  await User.update({refresh_token: null}, {
    where: {
      uuid: userId
    }
  })

  res.clearCookie('refreshToken')
  return res.status(200).json({
    message: "berhasil logout"
  })
}







exports.Register = async (req, res) => {
    const { name, email, password, confPassword, tim } = req.body;
    const role = "user"
    const lomba = "lomba"

    if (name == null || email == null || password == null || confPassword == null || role == null) {
      return res.status(400).json({
        message: "mohon diisi dengan lengkap",
      });
    }
  
    if (password !== confPassword) {
      return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    }
  
    // Email validation using regular expression for Gmail addresses
    const isGmail = /@gmail\.com$/.test(email);
    if (!isGmail) {
      return res.status(400).json({ msg: "Email harus menggunakan Gmail" });
    }
   
    const isUserExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
  
    if (isUserExist) {
      return res.status(400).json({
        message: "email sudah digunakan",
      });
    }


    const hashPassword = await bcrypt.hash(password, 8)

  

    try {
      User.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        lomba: lomba
      });
      res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };


  exports.RegisterBasket = async (req, res) => {
    const { name, email, password, confPassword, tim, wa, form_peserta, bukti_pembayaran } = req.body;
    const role = "user"
    const lomba = "musik"
    
    
    

    // const email = em + "@gmail.com"

    if (name == null || email == null || password == null || confPassword == null || role == null || lomba == null || form_peserta == null || bukti_pembayaran == null) {
      return res.status(400).json({
        message: "mohon diisi dengan lengkap",
      });
    }
  
    if (password !== confPassword) {
      return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    }
  
    // Email validation using regular expression for Gmail addresses
    const isGmail = /@gmail\.com$/.test(email);
    if (!isGmail) {
      return res.status(400).json({ msg: "Email harus menggunakan Gmail" });
    }
   
    const isUserExist = await User.findOne({
      where: {
        email: email,
      },
    });
  
    if (isUserExist) {
      return res.status(400).json({
        message: "email sudah digunakan",
      });
    }


    const hashPassword = await bcrypt.hash(password, 8)


 

    try {
      const user = await User.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        lomba: lomba,
        tim: tim,
        wa: wa,
        form_peserta: form_peserta,
        bukti_pembayaran: bukti_pembayaran
      });

      

      res.status(201).json({ 
        msg: "Register Berhasil",
     });
    } catch (error) {
      if (error.message && error.message.includes("No recipients defined")) {
        
        
      } else {
        res.status(400).json({ message: error.message });
      }
    }
  };


  exports.RegisterMobileLegend = async (req, res) => {
    const { name, email, password, confPassword, tim, wa, form_peserta, bukti_pembayaran } = req.body;
    const role = "user"
    const lomba = "tari"
    

    if (name == null || email == null || password == null || confPassword == null || role == null || form_peserta == null || bukti_pembayaran == null) {
      return res.status(400).json({
        message: "mohon diisi dengan lengkap",
      });
    }
  
    if (password !== confPassword) {
      return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    }
  
    // Email validation using regular expression for Gmail addresses
    const isGmail = /@gmail\.com$/.test(email);
    if (!isGmail) {
      return res.status(400).json({ msg: "Email harus menggunakan Gmail" });
    }
   
    const isUserExist = await User.findOne({
      where: {
        email: email,
      },
    });
  
    if (isUserExist) {
      return res.status(400).json({
        message: "email sudah digunakan",
      });
    }


    const hashPassword = await bcrypt.hash(password, 8)


    try {
      User.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        lomba: lomba,
        tim: tim,
        wa: wa,
        form_peserta: form_peserta,
        bukti_pembayaran: bukti_pembayaran
      });
      res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };


  exports.RegisterPubg = async (req, res) => {
    const { name, email, password, confPassword, tim, wa, form_peserta, bukti_pembayaran } = req.body;
    const role = "user"
    const lomba = "teater"
    

    if (name == null || email == null || password == null || confPassword == null || role == null || form_peserta == null || bukti_pembayaran == null) {
      return res.status(400).json({
        message: "mohon diisi dengan lengkap",
      });
    }
  
    if (password !== confPassword) {
      return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    }
  
    // Email validation using regular expression for Gmail addresses
    const isGmail = /@gmail\.com$/.test(email);
    if (!isGmail) {
      return res.status(400).json({ msg: "Email harus menggunakan Gmail" });
    }
   
    const isUserExist = await User.findOne({
      where: {
        email: email,
      },
    });
  
    if (isUserExist) {
      return res.status(400).json({
        message: "email sudah digunakan",
      });
    }


    const hashPassword = await bcrypt.hash(password, 8)


    try {
      User.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        lomba: lomba,
        tim: tim,
        wa: wa,
        form_peserta: form_peserta,
        bukti_pembayaran: bukti_pembayaran
      });
      res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };

  exports.RegisterSilat = async (req, res) => {
    const { name, email, password, confPassword, wa, form_peserta, bukti_pembayaran } = req.body;
    const role = "user"
    const lomba = "wayang kulit"
    
    const tim = null

    if (name == null || email == null || password == null || confPassword == null || role == null || form_peserta == null || bukti_pembayaran == null) {
      return res.status(400).json({
        message: "mohon diisi dengan lengkap",
      });
    }
  
    if (password !== confPassword) {
      return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    }
  
    // Email validation using regular expression for Gmail addresses
    const isGmail = /@gmail\.com$/.test(email);
    if (!isGmail) {
      return res.status(400).json({ msg: "Email harus menggunakan Gmail" });
    }
   
    const isUserExist = await User.findOne({
      where: {
        email:email,
      },
    });
  
    if (isUserExist) {
      return res.status(400).json({
        message: "email sudah digunakan",
      });
    }


    const hashPassword = await bcrypt.hash(password, 8)


    try {
      User.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        lomba: lomba,
        tim: tim,
        wa: wa,
        form_peserta: form_peserta,
        bukti_pembayaran: bukti_pembayaran
      });
      res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };

// exports.logOut = (req, res) => {

//     res.session.destroy((err) => {
//         if(err) {
//             return res.status(400).json({
//                 message: "tidak dapat logout"
//             })
//         }

//         res.status(200).json({
//             message: "anda telah logout"
//         })
//     })
    


// }
