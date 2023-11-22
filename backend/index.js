const express = require("express")
const cors = require("cors")
const session = require("express-session")
const dotenv = require("dotenv")
const db = require("./config/Database.js")
const SequelizeStore = require("connect-session-sequelize")
const UserRoute =  require("./routes/UserRoute.js")
// const BeritaRoute = require("./routes/BeritaRoute.js")
const AuthRoute = require("./routes/AuthRoute.js")
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')

const { secret } = require('./config/auth.js')

dotenv.config();

const app = express();



app.use('/assets', express.static('assets'));
// app.use('/assets/products', express.static('./assets/products'))

// (async()=>{
//     await db.sync();
// })();
const User = require('./models/UserModel.js')
 
function initial() {
    User.create({
        name: "admin imk",
        email: "adminimk@gmail.com",
        password: bcrypt.hashSync('123', 8),
        lomba: "admin",
        tim: "admin",
        role: 'admin',
        wa: "082",
        form_peserta: "1",
        bukti_pembayaran: "1"

    })
}


db.sync()
.then(() => {
    // initial();
    console.log("database connected");

}).catch(() => {
    console.log("database failed");
})

// app.use(cors());

app.use(cors(
    {
    credentials: true,
    origin: 'http://localhost:5173'
}
));

app.use(cookieParser())
app.use(express.json());
app.use(UserRoute);
// app.use(BeritaRoute);
app.use(AuthRoute)


// store.sync();

const APP_PORT = process.env.APP_PORT

app.listen(4000, ()=> {
    console.log("SERVER IS RUNNING")
});
