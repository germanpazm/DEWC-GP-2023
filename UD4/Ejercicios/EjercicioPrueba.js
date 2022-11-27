/*let nuevoLi = document.createElement('li');
let textoLi = document.createTextNode('Nuevo elemento de lista');
let b=nuevoLi.appendChild(textoLi);
let a =document.getElementsByTagName("li");
*/
letras.forEach((e,i)=>{
    return console.log(`Elemento ${e} en la posicion ${i}`);
}   );


letras.forEach((e,i)=> console.log(`Elemento ${e} en la posicion ${i}`));

letras.some(function (e){
    return e.length ==1;
});

letras.map( e=>e.length  )

letras.find(e=>e.length==2);