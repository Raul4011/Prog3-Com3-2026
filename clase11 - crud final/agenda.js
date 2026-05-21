

let personas = []
let idPersona =0;

// "users":[{
//         "id":1,
//         "email":"admin@gmail.com",
//         "password":1234
//     },{
//         "id":2,
//         "email":"conrado@gmail.com",
//         "password":"conrado2026"
//     }],
//     "personas":[{
//         "id":1,
//         "nombre":"beatriz",
//         "apellido":"carrizo",
//         "dni":45000123,
//         "email":"bety@gmail.com",
//         "imagen":"sin imagen"

//     },{
//          "id":2,
//         "nombre":"alvaro",
//         "apellido":"llovera",
//         "dni":35456123,
//         "email":"alvaro@gmail.com",
//         "imagen":"sin imagen"
//     },
// {
//          "id":2,
//         "nombre":"marianela",
//         "apellido":"araoz",
//         "dni":40357985,
//         "email":"marianela@gmail.com",
//         "imagen":"sin imagen"
//     },
// {
//          "id":2,
//         "nombre":"ignacio",
//         "apellido":"flores",
//         "dni":35456123,
//         "email":"nachoflores@gmail.com",
//         "imagen":"sin imagen"
//     }]

const BASE_URL = "http://localhost:8000/personas/"
document.getElementById("btn-update").style.display = "none"

const handleDelete = async (id) => {
  console.log(id);
  let mensaje = prompt("esta seguro que quieres eliminar si/no")
  if (mensaje === "si") {
    try {
      let response = await axios.delete(BASE_URL + id)
      alert("persona eliminada")

    } catch (error) {
      console.log(error);
    }
  }
}

const handleActualizar = async(id) => {
let nombre= document.getElementById("nombre").value
let apellido = document.getElementById("apellido").value
let email = document.getElementById("email").value
let dni = document.getElementById("dni").value
let imagen = document.getElementById("imagen").value

try {
   let response = await axios.put(BASE_URL + idPersona,{
    nombre:nombre,
    apellido,
    email,
    dni,
    imagen
  })
  response && alert("persona editada correctamente")
} catch (error) {
  console.log(error);
}
 
}

const handleEditar = (persona) =>{
  idPersona = persona.id
//console.log(id)
//let response = await axios.get(BASE_URL+id)

document.getElementById("btn-update").style.display = "block"
document.getElementById("btn-agregar").style.display = "none"
  document.getElementById("nombre").value = persona.nombre
document.getElementById("apellido").value = persona.apellido
document.getElementById("email").value = persona.email
document.getElementById("dni").value = persona.dni
document.getElementById("imagen").value = persona.imagen
}

const getPersonas = async () => {
  let response = await axios.get(BASE_URL)
  personas = response.data
  console.log(response.data);

  if (personas.length > 0) {
    console.log("entro x aqui");
    response.data.map(p => document.getElementById("tbody").innerHTML += `
 <tr>
      <th scope="row">${p.id}</th>
      <td>${p.nombre} ${p.apellido}</td>
      <td>${p.email}</td>
      <td>${p.dni}</td>
      <td>
        <img src= ${p.imagen} class="img-thumbnail img-fluid" alt="">
     </td>
      <td>
      <button id="btnDelete" class="btn btn-danger" onclick='handleDelete(${p.id})'>eliminar</button>
      <button class="btn btn-warning" id="btn-editar" onclick='handleEditar(${JSON.stringify(p)})'>editar</button>
      <button class="btn btn-success">ver</button>
      </td>
    </tr>
`)
  } else {
    document.getElementById("tabla").innerHTML = "<td>NO hay Nada para mostrar</td>"
  }

}
 getPersonas()

const handleMostrar = (e) => {
  e.preventDefault()
  document.getElementById("formulario").style.display = "block"
}
//document.getElementById("btn-ver").addEventListener("click",handleMostrar)

const handleAgregar = async (e) => {
  e.preventDefault()
  //tomo los datos
  let nombre= document.getElementById("nombre").value
let apellido = document.getElementById("apellido").value
let email = document.getElementById("email").value
let dni = document.getElementById("dni").value
let imagen = document.getElementById("imagen").value

  try {
    let response = await axios.post(BASE_URL,{
    
      nombre:nombre,
      apellido:apellido,
      email,
      dni,
      imagen
    })

    alert("persona creada exitosamente")
  } catch (error) {
    console.error(error)
  }
}

document.getElementById("btn-agregar").addEventListener("click",handleAgregar)
document.getElementById("btn-update").addEventListener("click",handleActualizar)
