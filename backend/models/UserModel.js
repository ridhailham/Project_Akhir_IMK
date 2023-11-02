
const { Sequelize } = require("sequelize")
const db = require("../config/Database.js")

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    tim:{
        type: DataTypes.STRING,
        allowNull: true,
        
    },
    lomba:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "belum tervalidasi",
        validate:{
            notEmpty: true
        }
    },
    wa:{
        type: DataTypes.STRING,
        allowNull: false,
        
        validate:{
            notEmpty: true
        }
    },
    form_peserta:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    bukti_pembayaran:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },


    // refresh_token:{
    //     type: DataTypes.STRING,
        
    //     validate: {
    //         notEmpty: true,
    //     }
    // }
},{
    freezeTableName: true
});

module.exports = Users;