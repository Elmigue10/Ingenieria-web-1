const respuestaId = document.getElementById("respuesta")

function redirect(){
    if(document.getElementById("google").checked){
        location.replace(document.getElementById("google").value)
    }
    else if(document.getElementById("yahoo").checked){
        location.replace(document.getElementById("yahoo").value)
    }
    else if(document.getElementById("bing").checked){
        location.replace(document.getElementById("bing").value)
    }
    else if(document.getElementById("ask").checked){
        location.replace(document.getElementById("ask").value)
    }
    else{
        respuestaId.innerHTML = "Seleccione un navegador."
        respuestaId.style.color = "red" 
    }
}