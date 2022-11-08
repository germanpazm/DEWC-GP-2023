//Creo array para introducir nombres
let nombres=[];
//Creo array para introducir edades
let edades=[];
let personas;
//Creo array para introducir como clave clavo nombres y edades
let mapapersonas=new Map();
//Bucle for para que me introduzca 6 socios
for(i=0;i<6;i++){
    //cadena donde guarda la info del usuario
    personas=prompt("Introduce (nombre,edad)");
    //guardo en arraypersonas la separacion del nombre de la edade
    let arraypersonas=personas.split(",");
    //Si me ha introducido solo 2 elementos
    if(arraypersonas.length==2){
    //Me introduce en el array nombres el nombre del socio ya que es la [0] de arraypersonas
    nombres.push(arraypersonas[0]);
    //Me introduce en el array edades la edad del socio ya que es la [1] de arraypersonas
    edades.push(arraypersonas[1]);
    //Introduzco en un un map tanto el nombre como la edad(como clave,valor)
    mapapersonas.set(arraypersonas[0],arraypersonas[1])

    }
    else{
        console.log("Introduzca solo 2 elementos")
    }



}
let suma=0;
function calcularMedia(){
    //Recorro el array edades y guardo en suma la suma de los valores de los elementos del array
    edades.forEach(e=>suma+=parseInt(e))
    numelementos=edades.length
    let media=suma/numelementos
     console.log(media);
}

mapapersonas.forEach((valor,clave)=>console.log(`${clave}:${valor}`))

function consultar(){
    let nombreabuscar=prompt("Introduzca un nombre");
    //Devuelve true o false dependiendo si está incluido o no
    let consulta=mapapersonas.has(nombreabuscar);
    //let consulta=nombres.includes(nombreabuscar);
    if(consulta===true){
         console.log("Si está incluido")
         //Recorro mapapersonas como clave valor 
         mapapersonas.forEach(  function (valor,clave){
            //Si la clave es igual al nombre que quiere buscar el usuario.Me imprime la edad del usuaario
            if(clave==nombreabuscar){
                console.log(`Su edad es ${valor}`)
            }
 })
       
         }
    
    else{
          console.log("No está incluido")
    }
}
function borrar(){
    let userdel=prompt("Introduzca el nombre del usuario que quiera borrar");
    let consulta=mapapersonas.has(userdel)
    //SI en el map está el nombre que introducio el usuario
    if(consulta==true){
        //borro el nombre de la persona
        let comprobardel=mapapersonas.delete(userdel);
        if(comprobardel==true){
            console.log("El usuario ha sido borrado")
        }
        
    }
    else {
        console.log("El usuario que quiere borrar no se encuentra incluido en el map")
    }
}