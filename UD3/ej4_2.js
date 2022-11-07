let alumnos=new Map();
let numalumnos=parseInt(prompt("Introduzca el numero de alumnos"));
let nombre="";
let nota=0;
let suma=0;
for(let i=0;i<numalumnos;i++){
nombre=prompt("Introduzca el nombre del alumno ");
nota=prompt("Introduzca la  nota del alumno ");
alumnos.set(nombre,nota);
}

for (const [clave, valor] of alumnos.entries()) {
    console.log(clave + ' = ' + valor)
    let suma2=parseInt(valor);
    suma+=suma2;
    }
numalumnos=alumnos.size;
media=suma/numalumnos;
console.log(media);




