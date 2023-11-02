const { Sequelize } = require("sequelize")
const db = require("../config/Database.js");
const Users = require("./UserModel.js")


const { DataTypes } = Sequelize;

const Berita = db.define('berita',{
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
            len: [2, 100]
        }
    },
    link:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
        
    },
},{
    freezeTableName: true
});

Users.hasMany(Berita);
Berita.belongsTo(Users, {foreignKey: 'userUuid'});

module.exports = Berita;