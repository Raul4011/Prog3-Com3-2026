
//common js
const express = require("express")
const cors = require("cors")
const  usuarios  = require("./routes/usuarios.js")
const { pool } = require("./config/database.js")
 
const app = express();


app.use(express.json())
app.use(cors())
app.use("/",usuarios)

app.get("/",(req,res)=>{
    res.send({message:"Welcome to my API",})
})

//

pool.getConnection()


app.listen(process.env.DB_PORT,()=>{
    console.log("escuchando en el puerto 5000");
})

