console.log("hello com3");

const Random_Url = "http://www.thecocktaildb.com/api/json/v1/1/random.php";
const Search_Url = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Id_search_cocktail = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const Tragos = [];

//console.log(Random_Url);

// const getCocktail = () => {
//     fetch(Random_Url)
//     .then(response=>response.json())
//     .then(resp=>
//         console.log(resp.drinks[0]))
//     .catch(e=>console.error(e))

// }

// getCocktail()

function saludar() {
  console.log("2do");
}

// console.log("1ro");
// setTimeout(()=>saludar(),5000)
// console.log("3ro")

// async function getCocktail () {
//     const response =await fetch(Random_Url)
//     const datos = await response.json()

//     console.log(datos);
// }
// getCocktail()

async function getCocktail() {
  const response = await axios.get(Random_Url);
  //const datos = await response.json()

  //console.log(response.data.drinks[0]);
  const datos = response.data.drinks[0];

  document.getElementById("random").innerHTML =
    `<div class="card" style="width: 18rem;">
  <img src=${datos.strDrinkThumb} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${datos.strDrink}</h5>
    <p class="card-text">Instructions: ${datos.strInstructions}</p>
    <p class="card-text">Alcoholic: ${datos.strAlcoholic}</p>
    <p class="card-text">Tipo de Vaso: ${datos.strGlass}</p>
    <button type="button" class="btn btn-success" onclick='viewCocktail(${datos.idDrink})'>ver cocktail</button>
  </div>
</div>`;
}
getCocktail();



const viewCocktail = async (id) =>{
    //document.getElementById("random").innerHTML = ""
    console.log("disparo viewcobtail");
    console.log(id);
    //llamo fetch + id
    const response = await axios.get(Id_search_cocktail+id)
    console.log(response.data.drinks[0]);
    // //response 
    document.getElementById("random").innerHTML =
    `<div class="card" style="width: 18rem;">
  <img src=${datos.strDrinkThumb} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${datos.strDrink}</h5>
    <p class="card-text">Instructions: ${datos.strInstructions}</p>
    <p class="card-text">Alcoholic: ${datos.strAlcoholic}</p>
    <p class="card-text">Tipo de Vaso: ${datos.strGlass}</p>
    <button type="button" class="btn btn-success" onclick='viewCocktail(${datos.idDrink})'>ver cocktail</button>
  </div>
</div>`;
    // //m,uesto en la card 
    // //limpiar el div 

}

const searchCocktail = async (trago) => {
  const response = await axios.get(Search_Url + trago);
  console.log(response);
  //Tragos.push(response.data.drinks);

  document.getElementById("random").innerHTML = "";
  document.getElementById("buscar").value =""

  response.data.drinks.map((trago) => {
    document.getElementById("random").innerHTML +=
      `<div class="card col-4-md g-4" style="width: 18rem;">
        <img src=${trago.strDrinkThumb} class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title">${trago.strDrink}</h5>
        <p class="card-text">Instructions: ${trago.strInstructions}</p>
        <p class="card-text">Alcoholic: ${trago.strAlcoholic}</p>
        <p class="card-text">Tipo de Vaso: ${trago.strGlass}</p>
        <a href="#" class="btn btn-primary" onclick="${()=>{viewCocktail(trago.idDrink)}}">ver cocktail</a>
            </div>
        </div>`;
  });
};

// searchCocktail("cocktail")

const handleClick = () => {
  let valor = document.getElementById("buscar").value;
  searchCocktail(valor);
};

document.getElementById("search").addEventListener("click", handleClick);



const getProducts =async () =>{
    try {
        const response = await axios.get("http://localhost:5000/productos")
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getProducts()