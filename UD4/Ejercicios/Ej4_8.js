function enviar(){
let inputs=document.querySelectorAll('input[type=text]');
let divs=document.querySelectorAll('.respuesta');

for(let i=0;i<inputs.length;i++){
    if(inputs[i].value!=' '){
        //No existe una respuesta previa
        if(divs[i].getElementsByTagName("p").length===0){
        let elemento=document.createElement('p');
        elemento.innerHTML=inputs[i].value
        divs[i].appendChild(elemento)
        }
        //Existe una respuesta previa,habra un p,editar el P
        else{
            divs[i].getElementsByTagName('p')[0].innerHTML=inputs[i].value;
    }


    }
    else{
        if(divs[i].getElementsByTagName("p").length!=0){
         divs[i].getElementsByTagName('p')[0].remove
        }
        else{
            console.log("No haya parrafo")
        };
    }
}
}

//Mirar este ejercicio para el examen