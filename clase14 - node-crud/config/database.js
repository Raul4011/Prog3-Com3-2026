const mysql = require("mysql")
const dotenv = require("dotenv")

dotenv.config();

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"4011",
    database:"com3electro"
})
module.exports = connection
