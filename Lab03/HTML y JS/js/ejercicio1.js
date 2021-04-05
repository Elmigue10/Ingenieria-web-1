const form = document.getElementById("form")

const nameId = document.getElementById("name")
const apellidoId = document.getElementById("apellido")
const direccionId = document.getElementById("direccion")
const telefonoId = document.getElementById("telefono")
const emailId = document.getElementById("email")

const nameMsg = document.getElementById("nameMsg")
const apellidoMsg = document.getElementById("apellidoMsg")
const direccionMsg = document.getElementById("direccionMsg")
const telefonoMsg = document.getElementById("telefonoMsg")
const emailMsg = document.getElementById("emailMsg")

let nameCount = 0,apellidoCount = 0,direccionCount = 0,telefonoCount = 0,emailCount = 0

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

nameId.addEventListener("keyup",()=>{
    nameCount ++
})
apellidoId.addEventListener("keyup",()=>{
    apellidoCount ++
})
direccionId.addEventListener("keyup",()=>{
    direccionCount ++
})
telefonoId.addEventListener("keyup",()=>{
    telefonoCount ++
})
emailId.addEventListener("keyup",()=>{
    emailCount ++
})

function validarName(){
    if(!nameId.addEventListener("keyup",()=>{}) && nameCount >= 4){
        nameMsg.innerHTML=("El nombre se ingreso por teclado.")
        nameMsg.style.color="lightgreen"
        nameCount=0
    }
    else{
        console.log("El nombre no se ingreso por teclado")
        nameMsg.innerHTML=("El nombre no se ingreso por teclado o es muy corto.")
        nameMsg.style.color="red"
    }
}

function validarApelldio(){
    if(!apellidoId.addEventListener("keyup",()=>{}) && apellidoCount >= 4){
        apellidoMsg.innerHTML = ("El apellido se ingreso por teclado.")
        apellidoMsg.style.color = "lightgreen"
        apellidoCount=0
    }
    else{
        apellidoMsg.innerHTML = ("El apellido no se ingreso por teclado o es muy corto.")
        apellidoMsg.style.color = "red"
    }
}

function validarDireccion(){
    if(!direccionId.addEventListener("keyup",()=>{}) && direccionCount >= 4){
        direccionMsg.innerHTML = ("La dirección se ingreso por teclado")
        direccionMsg.style.color = "lightgreen"
        direccionCount=0
    }
    else{
        direccionMsg.innerHTML = ("La dirección no se ingreso por teclado o es muy corta.")
        direccionMsg.style.color ="red"
    }
}

function validarTelefono(){
    if(!telefonoId.addEventListener("keyup",()=>{}) && telefonoCount >= 4){
        telefonoMsg.innerHTML = ("El teléfono se ingreso por teclado")
        telefonoMsg.style.color = "lightgreen"
        telefonoCount=0
    }
    else{
        telefonoMsg.innerHTML = ("El teléfono no se ingreso por teclado o es muy corto.")
        telefonoMsg.style.color ="red"
    }
}

function validarEmail(){
    if(!emailId.addEventListener("keyup",()=>{}) && emailCount >= 4){
        emailMsg.innerHTML = ("El email se ingreso por teclado")
        emailMsg.style.color = "lightgreen"
        direccionCount=0
    }
    else{
        emailMsg.innerHTML = ("El email no se ingreso por teclado o es muy corto.")
        emailMsg.style.color ="red"
    }
}

function validar () {
    validarName()
    validarApelldio()
    validarDireccion()
    validarTelefono()
    validarEmail()
}