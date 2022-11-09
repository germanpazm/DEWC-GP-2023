let cadena=prompt("Introduzca la cadena ")

let arraycadena=cadena.split(":");
let pos=cadena.indexOf("@");

arraycadena.forEach(function  (e){
    if(pos==-1){
        console.log(e);
    }
    else{
        let cadenamod=e.substr(0,pos);
        console.log(cadenamod);



    }
})

