
//common js
const express = require("express")
const cors = require("cors")
const  usuarios  = require("./routes/usuarios.js")
const { connection } = require("./config/database.js")
 
const app = express();


app.use(express.json())
app.use(cors())
app.use("/",usuarios)

app.get("/",(req,res)=>{
    res.send({message:"Welcome to my API",})
})

//


connection.connect((err)=>{
    if (err) throw err
    console.log("conectado a mi DB");
})


app.listen(5000,()=>{
    console.log("escuchando en el puerto 5000");
})

