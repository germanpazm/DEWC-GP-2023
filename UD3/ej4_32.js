let informacion= new Map();
let dupla="";
for (let i=0;i<2;i++){
dupla = prompt("Introduce (nombre,edad)").split(",");
//Validar que tenemos un array de 2 elementos
if(dupla.length===2){
    informacion.set[dupla[0],dupla[1]];

}
else{
    document.write("Introduzca solo 2 elementos");
}
}

for (const [n,e] of informacion.entries()){
    console.log("Nombre"+n+"Edad"+e);
    }

let socio1;
let edad1;
function anadir(){
    socio1=prompt("Introduzca el nombre del usuario");
    edad1=prompt("Introduzca la edad del usuario")
    informacion.set(socio1,edad1);
    console.log(informacion);
    
}

let socio2
function borrar(){
    socio2=prompt("Introduzca el nombre del usuario");
    if(socio2===informacion.get[dupla[0]]){
    informacion.delete(dupla[0],dupla[1]);
    }
}



/* n,elistar for..of
Añadir    set
consultar get
Borrar  delete




/*for(let i=0; i<nombres.length;i++){
        console.log(edades[i]);
    }







/*nombres.forEach(nom => console.log)
for(const nom of nombres.values()){
    console.log(nom)
}
*/




