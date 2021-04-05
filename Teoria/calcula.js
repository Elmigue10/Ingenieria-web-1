function dividir(){
    x=document.form1.xx.value

    y=document.form1.yy.value

    if(isNaN(x)||isNaN(y)){

        //Uno o ambos valores son numeros
        a = "Ingrese numeros"

    }
    else{
        if(y==0){
            a="Error"
        }
        else{
            a=x/y
        }
    }
    document.form1.z.value=a
}

function multiplicar(){
    x=document.form1.xx.value
    y=document.form1.yy.value

    if(isNaN(x)||isNaN(y)){
        a="Ingrese numeros"
    }
    else{
        a=x*y
    }
    document.form1.z.value=a
}

function sumar(){
    x=document.form1.xx.value
    y=document.form1.yy.value

    if(isNaN(x)||isNaN(y)){
        a="Ingrese numeros"
    }
    else{
        a= parseInt(x)+parseInt(y)
    }
    document.form1.z.value=a
}

function restar () {
    x=document.form1.xx.value
    y=document.form1.yy.value

    if(isNaN(x)||isNaN(y)){
        a = "Ingrese numeros"
    }

    else{
        a=x-y
    }

    document.form1.z.value = a
}