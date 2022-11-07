let nombres=[];
let edades=[];
let personas;
let mapapersonas=new Map();

for(i=0;i<2;i++){
    personas=prompt("Introduce (nombre,edad)");
    let arraypersonas=personas.split(",");
    if(arraypersonas.length==2){
    nombres.push(arraypersonas[0]);
    edades.push(arraypersonas[1]);
    mapapersonas.set(arraypersonas[0],arraypersonas[1])

    }
    else{
        console.log("Introduzca solo 2 elementos")
    }



}
let suma=0;
function calcularMedia(){
    edades.forEach(e=>suma+=parseInt(e))
    numelementos=edades.length
    let media=suma/numelementos
    return console.log(media);
}

mapapersonas.forEach((valor,clave)=>console.log(`${clave}:${valor}`))

function consultar(){
    let nombreabuscar=prompt("Introduzca un nombre");
    //Devuelve true o false dependiendo si está incluido o no
    let consulta=nombres.includes(nombreabuscar);
    if(consulta===true){
         console.log("Si está incluido")
    }
    else{
          console.log("No está incluido")
    }
}