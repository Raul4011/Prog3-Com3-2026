
let personas = []


const BASE_URL = "http://localhost:3000/personas"

const getPersonas = async() =>{
let response = await axios.get(BASE_URL)
personas.push(response.data)
console.log(response.data);

response.data.map(p => document.getElementById("tbody").innerHTML += `
 <tr>
      <th scope="row">${p.id}</th>
      <td>${p.nombre} ${p.apellido}</td>
      <td>${p.email}</td>
      <td>${p.dni}</td>
      <td>${p.imagen}</td>
      <td><i class="fa-solid fa-trash"></i></td>
    </tr>
`)

}
getPersonas()

