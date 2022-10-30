let nombres= new Map();
let edades=[];
let dupla="";
for (let i=0;i<6;i++){
dupla = prompt("Introduce (nombre,edad)").split(",");
//Validar que tenemos un array de 2 elementos
if(dupla.length===2){
nombres.add(dupla[0]);
edades.push(dupla[1]);
}
else{
    document.write("Introduzca solo 2 elementos");
}
}

for(let i=0; i<nombres.length;i++){
        console.log(edades[i]);
    }







/*nombres.forEach(nom => console.log)
for(const nom of nombres.values()){
    console.log(nom)
}
*/




