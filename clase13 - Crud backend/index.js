const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express();

app.use(express.json())

const conection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"4011",
    database:"com3electro"
})



app.get("/",(req,res)=>{
    res.send({message:"bienvenido a mi api REST"})
})

app.get("/productos",(req,res)=>{
    //console.log(req);
    const query = `select * from productos`

    conection.query(query,(err,results)=>{
        if (err) throw err
        res.json(results)

    })
})

app.get("/productos/:id",(req,res)=>{

    const idProducto = req.params.id
    //console.log(id);

    const query = `select * from productos where id=?`

conection.query(query,[idProducto],(err,results)=>{
    if (err) throw err
    res.json(results)
})

})

app.post("/productos/create",(req,res)=>{

    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const cantidad = req.body.cantidad
    const precio = req.body.precio

    const query = `insert into productos (nombre,descripcion,precio,cantidad) values (?,?,?,?)`

    conection.query(query,[nombre,descripcion,precio,cantidad],(err,results)=>{
         if (err) throw err
        res.json(results)
    })

})

app.put("/productos/editar/:id",(req,res)=>{
    const {nombre,descripcion,cantidad,precio} = req.body
    const {id} = req.params

    const query = `UPDATE productos set nombre=? , descripcion=?,cantidad=?,precio=? where id=?`

conection.query(query,[nombre,descripcion,cantidad,precio,id],(err,results)=>{
    if (err) throw err
        res.json(results)
})
})

app.delete("/productos/eliminar/:id",(req,res)=>{
    const {id} = req.params
    const query = `delete from productos where id=?`

    conection.query(query,[id],(err,results)=>{
         if (err) throw err
        res.json(results)
    })
})

conection.connect((err)=>{
    if (err)
         throw err
        console.log("conectado a mi DB")
})

app.listen(8000,()=>{
    console.log("escuchanco ern el puertop 8000");
})