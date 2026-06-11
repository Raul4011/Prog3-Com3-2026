const express = require("express")
const connection = require("./config/database")

const app = express();

app.get("/",(req,res)=>{
    res.send({message:"Bienvenido a mi API"})
})




connection.connect((err)=>{
if(err) throw err
console.log("conectado a mi db");
})


app.listen(8000,()=>{
    console.log("escuchando en el puerto 8000");
})

