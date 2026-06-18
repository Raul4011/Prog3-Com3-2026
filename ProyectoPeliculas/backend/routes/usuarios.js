const express = require("express")
const { Login,register, Register} = require("../controllers/usuarios")


const router = express.Router()


router.post("/auth/login",Login)
router.post("/auth/register",Register)

module.exports =  router