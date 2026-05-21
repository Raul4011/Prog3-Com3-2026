
//express
const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())


//base de datos de personas
const personas = [{
        id:1,
        nombre:"beatriz",
        apellido:"carrizo",
        dni:45000123,
        email:"bety@gmail.com",
        imagen:"sin imagen"
    },{
         id:2,
        nombre:"alvaro",
    apellido:"llovera",
        dni:35456123,
        email:"alvaro@gmail.com",
        imagen:"sin imagen"
    },
{
         id:3,
        nombre:"marianela",
        apellido:"araoz",
        dni:40357985,
        email:"marianela@gmail.com",
        imagen:"sin imagen"
    },
{
         id:4,
        nombre:"ignacio",
        apellido:"flores",
        dni:35456123,
        email:"nachoflores@gmail.com",
        imagen:"sin imagen"
    }]


app.get("/",(req,res)=>{
    res.send("welcome to my API")
})


app.get("/personas",(req,res)=>{
    res.send({personas})
})

app.listen(8000,()=>{
    console.log("escuchando en el puerto 8000");
})



