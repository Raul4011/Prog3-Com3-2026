// public class Animal {
//     private string nombre {get;set;}
    
//     public Animal (nombre) {
//         nombre= this.nombre
//     }

//     public void Dormir () {
//         console.writeline("zzZZZzz")
//     }
// }

// public class Pato : Animal {

// }


class Animal {
    nombre ;
    peso;
    altura 
    constructor(nombre,peso,altura){
        nombre = this.nombre
        peso=this.peso
    }
    dormir (){
        console.log("ZZZzzzzZZZ");
    }

}

let pato = new Animal("patito","0.50",15)

class Pato extends Animal {


    tipoPluma;
    tipoPico;

    // getTipoPico (tipoPico){
    //     return this.tipoPico
    // }
    constructor(nombre,asltura,peso){
        super(this.tipoPico,this.tipoPluma)
    }

    nadar (){
        console.log("estoy nadando");
    }
}




const Persona = {
    nombre:"alvaro",
    edad:35,
    altura:1.75,
    mascota:{
        nombreMascota:"uma",
        raza:"caniche",
        especie:"canina"
    },
    hobbies:["cantar","rugby","programar"],
    vacunas:[{
        id:1,
        nombreVacuna:"moderna",
        dosis:"5ml",
        farmaceutica:{
            direccion:"las piedras 1050",
            licencia:"otorgada",
            BPM:["iso9001","iso9002"]
        }
    },{},{}],
    casado:false,
    estadoCivil:"soltero"
}

//BPM.forEach(iso => { console.log(iso)});

//Destructuring

//console.log(Persona.altura);


const {altura,nombre,casado,estadoCivil,edad} = Persona

console.log(altura);

//console.log(Persona.mascota.raza);

let {mascota:{raza}} = Persona

console.log(raza);

//.map destructuring 


const perritos = ["firulais","paco","blanquita"]

const gatitos = ["michifuz","felix","garfield"]


const animales = perritos.concat(gatitos)

//console.log(animales);
const animales2 = perritos


const numeros = [1,5,7,2,4,19]

console.log(numeros.sort((a,b)=>a-b))

//const ordenados = new set([...numeros])
//console.log(ordenados);

const animales3 = perritos.concat(...gatitos)
console.log(animales3);