const respuestaId = document.getElementById("respuesta")

function validar(){
    
    let a = document.getElementById("number").value
    
    if(isNaN(a)){

        respuestaId.innerHTML = "No es un número entero"
        respuestaId.style.color = "red"

    }
    else{
        
        console.log(a)
        respuestaId.innerHTML = `La entrada de texto es un número entero de ${a.length} dijitos`

        respuestaId.style.color = "lightgreen"
    }
}