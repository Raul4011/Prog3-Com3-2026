const { pool } = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  try {
    //tomar los datos del cuerpo de la request
    //email usuario password
    const { usuario, email, password } = req.body;
    //validar esos datos
    if (!usuario || !email || !password) {
      return res.status(400).json({ message: "faltan rellenar los campos" });
    }
    //buscar el email en la db
    const searchEmail = `select * from usuarios where email=?`;
    const [rows] = await pool.query(searchEmail, [email]);
    //si existe le envio un error diciendo email registrado

    if (rows.length > 0) {
      return res.status(400).json({ message: "el correo ya esta en uso" });
    }

    //encriptar la password

    const hashedPassword = await bcrypt.hash(password, 10);

    //insertar el nuevo usuario
    const query = `insert into usuarios (usuario,email,password) values (?,?,?})`;

    const [user] = await pool.query(query, [usuario, email, hashedPassword]);
    console.log(user);
    //generar un token
    const token = jwt.sign({ id: user.insertId }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    //responder con un usuario creado correctamemte + token

    res.status(201).json({ message: "usuario creado correctamente", token });
  } catch (error) {
    res.status(500).json({ messgae: error.message });
  }
};

const Login = async (req, res) => {
  try {
    //recibo los datos x el cuerpo de la request
    //email y contraseña
    const email = req.body.email;
    const password = req.body.password;

    //valido ese mail y contraseña
    if (!email || !password) {
      return res.status(400).json({ messgae: "campos invalidos" });
    }

    //busco ese mail en mi db
    const query = `select * from usuarios where email=?`;

    const [rows] = await pool.query(query, [email]);

    //si no existe mando mensjae de error
    if (rows.length === 0) {
      return res.status(400).json({ message: "no existe el mail en la db" });
    }

    //creo un usuario desde rows
    const user = rows[0];

    //comparar la password ingresada con la hasheada
    const comparedPass = await bcrypt.compare(password, user.password);

    //si no coinciden las contrase;as
    if (!comparedPass) {
      return res.send(400).json({ message: "contrase;a incorrecta" });
    }

    //generar token
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    //respondo con usuario logueado + token

    res.status(200).json({ message: "logueado correctamente", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { Register, Login };
