const express = require("express")
const { getUsers } = require("../controllers/usuarios")


const router = express.Router()


//router.get("/usuarios")
router.post("/usuarios",getUsers)

module.exports =  router