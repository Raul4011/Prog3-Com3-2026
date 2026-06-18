const jwt = require("jsonwebtoken")


const verifyToken = (req,res,next)=> {

    //recibo el token x la cabecera 

    const headerToken = req.headers.authorization

    //valido si el token esta bien

    if (!headerToken) {
        return res.status(401).json({message:"token invalido"})
    }

    //extraer el token correctamente

    //bearer eyasgsfvavhnas65dsa8d6
    const token = headerToken.split(" ")[1]

    //verificar el token
    const decoded = jwt.verify(token,process.env.SECRET_KEY)

    req.user = decoded

    //respondo con next
next()

}
module.exports = verifyToken