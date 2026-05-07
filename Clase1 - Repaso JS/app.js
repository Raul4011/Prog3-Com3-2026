
console.log("hello");


let nombre = 35
const animal = "perro salchicha"
var edad = 20 //ya no se usa

const handelMouseEnter = () =>{
    console.log("aqui cambio el color a orange");
    document.getElementById("h4").style.backgroundColor = "lightblue"
}


document.getElementById("h4").style.backgroundColor = "orange"

document.getElementById("h4").addEventListener("mouseenter",handelMouseEnter)


