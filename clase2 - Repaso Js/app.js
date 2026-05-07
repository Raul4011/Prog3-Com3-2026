
let edad = 19

if (edad >= 18) {
    console.log("eres mayor de edad");
}else {
    console.log("eres menor de edad")
}


edad <= 18 ? console.log("eres menor de edad") :  console.log("eres mayor de edad");

// condicion ? : 

edad > 100 && console.log("eres preshistorico") 
//si se cumple entonces hace esto

let perrenques = ["firulais","negrito","dog","hachiko"]

//for each - for - .map - for of - for in - 
let contador = 0
// for (let i = 0 ; i < perrenques.length ; i++){
//     console.log('el perro esta en la posicion ' + [i]+ " "+ perrenques[i]);
//     contador++;
// }
// console.log("el total de perrenques que tengo es de: "+contador);
// for (const perro of perrenques) {
//     console.log(perro);
//     contador++
// }

// perrenques.forEach(perro => {
//     console.log(perro);
// });

//perrenques.map(perro => console.log(perro))


//funciones


function sumar (num1,num2) {
let suma;
suma = num1+num2;
console.log(suma);
//return suma
}
sumar(6,4)

const restar = (num1,num2=5) => {
console.log(num1-num2);
}

restar(11)

const respirar = () =>{
    console.log("respirando...");
}
//respirar()

//setInterval(respirar,2000)



function getTime () {
    const tiempo = new Date()
    console.log(tiempo);
    const horas = tiempo.getHours()
    const minutos = tiempo.getMinutes()
    const segundos = tiempo.getSeconds()
    console.log(horas +" :"+minutos+": "+segundos);
}

const multiplicar = (num1,num2) => num1*num2;
console.log(multiplicar(10,2))

//setTimeout(getTime,2000)


//objetos vs json

class person {
    name ;
    apellido;

    //()=>dormir();
}

const Estudiante = {
    nombre:"maxi torres",
    edad:16,
    hobbies:["dormir","nadar","futbol"],
    materias:[{
        nombre:"prog 3",
        profesor:"raul politi",
        cantHoras:8
    },{
        nombre:"base de datos",
        profesor:"jorge lamberti",
        cantHoras:12
    },{
        nombre:"ingles",
        profesor:"mariana octaviano",
        cantHoras:10
    }],
    dormir:()=>{console.log("zzzZZZZzzzzZZZ");}
}

