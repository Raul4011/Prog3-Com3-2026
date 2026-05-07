
// const fecha = new Date()
// console.log(fecha);
// const anio = fecha.getFullYear()
// console.log(anio);

// const anioNac = Alumno.fechaNacimiento.split("/")
// console.log(anioNac);
// const edadActual = anio - anioNac[0]

const Alumno = {
    nombre:"raul politi",
    ocupacion: "docente",
    materias : ["programacion 1 ","programacion 2" ,"base de datos" ,"getsion desarrollo de software"],
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQh3ovwjt8aVJcdIOUiegviF1pxy7Ypz4sQ&s",
    fechaNacimiento:"2000/03/03",
    edad: 40,

    
}

const Facultad = {
nombre:"frt utn",
direccion:"rivadavia 1050",
decano:"Ing Egea Martin"
}

const lenguajes =[{
id:1,
    nombre:"C#",
    año:1920

},{
    id:2,
    nombre:"JS",
    año:1990
},{
id:3,
    nombre:"Python",
    año:1950
}]


lenguajes.map(lenguaje => document.getElementById("aside").innerHTML += `<h3>${lenguaje.nombre}</h3>`)


document.getElementById("article").innerHTML = `<ul>
<li>${Facultad.nombre}</li>
<li>${Facultad.direccion}</li>
<li>${Facultad.decano}</li>

</ul>`







