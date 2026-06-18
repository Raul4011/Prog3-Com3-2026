const express = require("express")
const verifyToken = require("../middlewares/auth.middleware")
//const { Login,register, Register} = require("../controllers/usuarios")


const router = express.Router()


router.get("/peliculas",verifyToken,getPeliculas)
router.post("/auth/register",Register)

module.exports =  router