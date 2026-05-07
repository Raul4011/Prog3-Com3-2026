//console.log("hello world");


let nombre = null

//console.log(typeof nombre)


const getApi =()=> {
    // fetch("https://rickandmortyapi.com/api/character")
    // .then(
    //     response => response.json()
    // ).then(respuesta=>console.log(respuesta))
    // .then(consulta=> console.log("aqui consulto"))
    // .catch(e=> console.log(e)
    // )
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response=>console.log(response.data))

}

//AXIOS no necesita parsear a JSON y nos deveulve la info en una carpeta Data


getApi()






