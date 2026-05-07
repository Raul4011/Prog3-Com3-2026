// console.log("hello com3");

// const Random_Url = "http://www.thecocktaildb.com/api/json/v1/1/random.php"
// const Search_Url = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s="

// const Tragos = [];

// console.log(Random_Url);


// // const getCocktail = () => {
// //     fetch(Random_Url)
// //     .then(response=>response.json())
// //     .then(resp=>
// //         console.log(resp.drinks[0]))
// //     .catch(e=>console.error(e))

// // }

// // getCocktail()



// function saludar () {
// console.log("2do")
// }

// // console.log("1ro");
// // setTimeout(()=>saludar(),5000)
// // console.log("3ro")

// // async function getCocktail () {
// //     const response =await fetch(Random_Url)
// //     const datos = await response.json()

// //     console.log(datos);
// // }
// // getCocktail()

// async function getCocktail () {
//     const response =await axios.get(Random_Url)
//     //const datos = await response.json()

//     console.log(response.data.drinks[0]);
//     const datos= response.data.drinks[0]


//     document.getElementById("random").innerHTML = `<div class="card" style="width: 18rem;">
//   <img src=${datos.strDrinkThumb} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${datos.strDrink}</h5>
//     <p class="card-text">Instructions: ${datos.strInstructions}</p>
//     <p class="card-text">Alcoholic: ${datos.strAlcoholic}</p>
//     <p class="card-text">Tipo de Vaso: ${datos.strGlass}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
// }
// getCocktail()



// const searchCocktail =async (trago) => {
//     const response = await axios.get(Search_Url+trago)
//     console.log(response);
//     Tragos.push(response.data.drinks)

//    // Tragos.map(trago=> )


// }

// searchCocktail("cocktail")

// console.log(Tragos);


const Empleados = []

const Empleado = {
    nombre:prompt("ingresa tu nombre"),
    apellido:prompt("ingresa tu apellido"),
    dni:prompt("ingresa tu dni"),
    direccion:prompt("ingresa tu direccion"),
    sueldoxHs:parseInt(prompt("ingresa tu hs trabajadas")),
    precioxHs:parseInt(prompt("ingresa tu hprecio x hs")),
    salarioxMes:()=>console.log(this.sueldoxHs * this.precioxHs),
}
// document.getElementById("random").innerHTML = `
// <ul>
//         <li>${Empleado.nombre}</li>
//         <li>${Empleado.apellido}</li>
//         <li>${Empleado.direccion}</li>
//         <li>${Empleado.salarioxMes}</li>
//       </ul>
// `
Empleados.push(Empleado)


//recorre el array con foreach 
