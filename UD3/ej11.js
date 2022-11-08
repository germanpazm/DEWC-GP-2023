let modulos = new Map([
    ["DWEC", "Desarrollo Web en Entorno Cliente"],
]);

modulos.set("DAW", "Despliegue de Aplicaciones Web")
modulos.set("DWES", "Desarrolllo Web en Entorno Servidor")
modulos.set("ING", "Ingles")
modulos.set("EIE", "Empresa e Iniciativa Emprendedora")
modulos.set("DIW", "Diseño de Interfaces Web")

console.log(modulos.size);

modulos.forEach((valor,clave)=>console.log(`${clave}:${valor}`));

modulos.forEach((valor,clave)=>console.log(`${clave}`));

for(let[clave,valor] of modulos.entries()){
    console.log(valor);
}


let consulta=prompt("Introduzca el nombre del modulo que quiera consultar con sus inciales")
let comprobar=modulos.has(consulta);
if (comprobar==true){
    modulos.delete(consulta)
    console.log("Se ha borrado correctamente");
}
else{
    console.log("El modulo que ha introducido se encuentra en el map")
}