let nombres= [];
let edades=[];
let dupla="";
for (let i=0;i<6;i++){
dupla = prompt("Introduce (nombre,edad)").split(",");
//Validar que tenemos un array de 2 elementos
if(dupla.length===2){
nombres.push(dupla[0]);
edades.push(dupla[1]);
}
else{
    document.write("Introduzca solo 2 elementos");
}
}

let total=0;
for(let i=0; i<nombres.length;i++){
        //console.log(edades[i]);
        total+=edades[i];
        console.log(total);
        }


function buscar(){
   let nombrebuscar=prompt("Introduzca el nombre que quiera buscar");
    array.some(nombrebuscar);

}







/*nombres.forEach(nom => console.log)
for(const nom of nombres.values()){
    console.log(nom)
}
*/




