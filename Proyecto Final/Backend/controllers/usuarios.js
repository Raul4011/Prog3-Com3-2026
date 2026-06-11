const { connection } = require("../config/database");

const getUsers = (req, res) => {
  console.log(req.body);

  //
  const { mail, password } = req.body;
  if (!mail || !password) {
    res.status(402).send({ message: "credenciales invalidas" });
  }

  const query = `select * from usuarios where email=? and password=?;`

  connection.query(query,[mail,password],(error,results)=>{

  })

};

const createUser = () => {};
module.exports = { getUsers, createUser };
