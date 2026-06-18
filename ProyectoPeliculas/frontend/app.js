


const handleSubmit = (e) =>{ 
    e.preventDefault()
    let email = document.getElementById("mail").value
    let password = document.getElementById("pass").value

    //enviar estos datos al backend
    axios.post("",{
        
    })


}

document.getElementById("btnForm").addEventListener("click",handleSubmit)


