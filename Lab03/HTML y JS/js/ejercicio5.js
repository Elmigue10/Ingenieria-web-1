const formId = document.getElementById("form")

const emailMsg = document.getElementById("emailMsg")
const telefonoMsg = document.getElementById("telefonoMsg")
const msg = document.getElementById("msg")

formId.addEventListener('submit', (e) => {
    e.preventDefault()
})

function validar(){
    let nombreId = document.getElementById("nombre").value
    let apellidosId = document.getElementById("apellidos").value
    let emailId = document.getElementById("email").value
    let telefonoId = document.getElementById("telefono").value

    let results = document.getElementById("form_results")

    let nombreResult = document.getElementById("nombreResult")
    let apellidosResult = document.getElementById("apellidosResult")
    let emailResult = document.getElementById("emailResult")
    let telefonoResult = document.getElementById("telefonoResult")
    
    const emailExpresion = /\w+@\w+\.+[a-z]/

    if (nombreId === "" || apellidosId === "" || emailId === "" || telefonoId === "") {
        msg.innerHTML = "Todos los campos son obligatorios. "
        msg.style.color = "red"
        setTimeout(function(){ msg.innerHTML = "" }, 3000)
        return false
    }
    else if (nombreId.length>30 || apellidosId.length >30 || emailId.length>30 || telefonoId.length>30) {
        msg.innerHTML = "La cantidad máxima de caracteres por dato es 30."
        msg.style.color = "red"
        setTimeout(function(){ msg.innerHTML = "" }, 3000)
    }
    else if(nombreId.length<5 || apellidosId.length<5|| emailId.length<5 || telefonoId.length<5) {
        msg.innerHTML = "La cantidad mínima de caracteres por dato es 5."
        msg.style.color = "red"
        setTimeout(function(){ msg.innerHTML = "" }, 3000)
    }
    else if (!emailExpresion.test(emailId)){
        emailMsg.innerHTML = "La dirección de email " + emailId + " no es válida."
        emailMsg.style.color = "red"
        setTimeout(function(){ emailMsg.innerHTML = "" }, 3000)
    }
    else if(isNaN(telefonoId)){
        telefonoMsg.innerHTML = "El teléfono ingresado no es un número."
        telefonoMsg.style.color = "red"
        setTimeout(function(){ telefonoMsg.innerHTML = "" }, 3000)
    }

    else{
        results.innerHTML = `<h1>Datos ingresados.</h1>
                                <label>Nombre: ${nombreId}</label>
                                <label>Apellidos: ${apellidosId}</label>
                                <label>Email: ${emailId}</label>
                                <label>Teléfono: ${telefonoId}</label>`
    }
}