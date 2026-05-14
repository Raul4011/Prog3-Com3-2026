
const BASE_URL = "http://localhost:3000/users"

const getUsers = async (e) => {
    e.preventDefault()
    // fetch(BASE_URL)
    // .then(resp=>resp.json())
    // .then(response=>console.log(response))

    let usuarioMail = document.getElementById("email").value
    let usuarioPass = document.getElementById("pass").value

    let response = await axios.get(BASE_URL) 
    console.log(response.data);


    const filteredUsers = response.data.find(user => user.email == usuarioMail && user.password == usuarioPass )
    console.log(filteredUsers);
    if(filteredUsers){
        console.log("Binevenido JEFE");
        window.location.href = "./agenda.html"
    }else {
        console.log("fuera");
    }
}




document.getElementById("btnSubmit").addEventListener("click",getUsers)


