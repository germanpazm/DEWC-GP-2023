/*********************************************************************************************
/*********************************************************************************************
        Rellenar el valor del campo nombre utilizando un "prompt" para introducir los datos
*********************************************************************************************
*********************************************************************************************/

document.getElementById('id_input_text').addEventListener("click",(event) => {
  event.target.value = prompt("Introduce tu nombre: ");
});

//event.target.text Content me devuelve el texto contenido dentro del elemento HTML 
//en el que se ha producido el evento.

//event.target.value me permite modificar el valor del elemento HTML en el que se ha producido el evento

//el event.target.value es el value de la etiqueta del html

/*********************************************************************************************
*********************************************************************************************
    Modificar el color del fondo del formulario
*********************************************************************************************
*********************************************************************************************/


for(let e of document.getElementsByName('form-color')){
  e.addEventListener("click",(event) => {
    console.log(event.target.value)
    document.getElementById('id_form').style.backgroundColor = event.target.value;
  });
}  




/*********************************************************************************************
*********************************************************************************************
     Resetear el formulario
*********************************************************************************************
*********************************************************************************************/

//el reset me llama a la etiquta que tiene como name reset
document.forms[0]['reset'].addEventListener("click",function() {
  
  alert("Empezamos de nuevo");
  document.getElementById("answers").innerHTML="<h2>Respuestas</h2>";
 
});


/*********************************************************************************************
*********************************************************************************************
      Recoger, recorrer y mostrar el contenido del formulario
*********************************************************************************************
*********************************************************************************************/
document.forms[0].addEventListener("submit",(event) => {
  
  document.getElementById("answers").innerHTML="<h2>Respuestas</h2>";
  
  for(let e of document.forms[0].elements){
    let contentText = "";
    let container = document.createElement("p");
    
    switch(e.type){
      case "checkbox":
        if(e.checked) contentText+=`${e.name}: ${e.value}`;
        break;
      case "radio":
        if(e.checked) contentText+=`${e.name}: ${e.value}`;
        break;  
      case "color":
        if(e.value!="") contentText+=`${e.name}: ${e.value}`;
        break;  
      default:
        if(e.value!="" && e.type!="submit" && e.type!="reset") contentText+=`${e.name}: ${e.value}`;
        break;    
    }

    if(e.type=="color") container.style.color = `${e.value}`;
    container.appendChild(document.createTextNode(contentText));
    document.getElementById("answers").appendChild(container);
  }

  event.preventDefault();
})

/*********************************************************************************************
*********************************************************************************************
      Cambio dinámico del día preferente
*********************************************************************************************
*********************************************************************************************/
let dias = new Set();

for(let e of document.getElementsByClassName('day-available')){

  e.addEventListener("click",(event) => {
    let diaMarcado = event.target.id.substring(9);
    if(dias.has(diaMarcado)){
      dias.delete(diaMarcado);
    }else{
      dias.add(diaMarcado);
    }
    let selectDiaPreferente = document.forms[0].elements['id_select'];
    
    if(dias.size == 0 ){
      selectDiaPreferente.innerHTML = '<option value="" selected disabled>Ningún elemento seleccionado</option>';
    }else{
      selectDiaPreferente.innerHTML = "";
    }

    let i = 0;
    for(d of dias){
      let textday = "";
      switch(d){
        case "monday":
          textday = "Lunes";
          break;
        case "tuesday":
          textday = "Martes";
          break;
        case "wednesday":
          textday = "Miércoles";
          break;
        case "thursday":
          textday = "Jueves";
          break;
        case "friday":
          textday = "Viernes";
          break;
        default:
          break;          
      }
      let contentText = document.createTextNode(textday);  
      let container = document.createElement("option");
      container.appendChild(contentText);
      container.value = d;
      if(i == dias.size - 1 ){
        container.selected = true;
      }
      selectDiaPreferente.appendChild(container);
      i++;
    }
  });
}  