/*let zFondos150 = ["url('./img/150x150/coche-1.jpg')","url('./img/150x150/coche-2.jpg')","url('./img/150x150/coche-3.jpg')","url('./img/150x150/coche-4.jpg')"];
let zFondos600 = ["url('./img/600x400/coche-1.jpg')","url('./img/600x400/coche-2.jpg')","url('./img/600x400/coche-3.jpg')","url('./img/600x400/coche-4.jpg')"];
*/

let imagenPrincipal = document.querySelector(".imagen-principal");
let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');


let imagenes150=new Map();
imagenes150.set("imagen1","url('./img/150x150/coche-1.jpg')")  
imagenes150.set("imagen2","url('./img/150x150/coche-2.jpg')")
imagenes150.set("imagen3","url('./img/150x150/coche-3.jpg')")
imagenes150.set("imagen4","url('./img/150x150/coche-4.jpg')")

let imagenes600=new Map();
imagenes600.set("imagen1","url('./img/600x400/coche-1.jpg')") 
imagenes600.set("imagen2","url('./img/600x400/coche-2.jpg')")
imagenes600.set("imagen3","url('./img/150x150/coche-3.jpg')")
imagenes600.set("imagen4","url('./img/150x150/coche-4.jpg')")

imagenPrincipal.addEventListener("mouseover",abc);
function abc(evento){
    imagenes150.forEach((valor,clave)=>
    console.log(clave)
    )
}
