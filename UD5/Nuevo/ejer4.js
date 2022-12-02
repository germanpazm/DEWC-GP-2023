let papelera = document.getElementById("idPapelera")
let bola = document.getElementById("idBola")

function soltar(ev) {
  papelera.setAttribute("src","papeleraLLena.jpg")  
  bola.setAttribute("src","");

}

papelera.addEventListener("dragover",(e) => {console.log("hola") ; e.preventDefault()})
//Solo con el drop podría funcionar pero hace falta el dragover
papelera.addEventListener("drop",soltar)







