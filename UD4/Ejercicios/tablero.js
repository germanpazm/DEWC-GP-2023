
const limite = prompt("tamaño del tablero");
let tablero = []

function aleatorio (limite){
    return  Math.ceil(limite * Math.random())
}
function generarTablero(){
    for(let i=0; i<limite; i++) {
        tablero[i] = new Array(10);
        for(let j=0; j<limite; j++) {
            tablero[i][j]=0            
        }
    }           

}

//generarTablero(limite)

//console.log("Tablero generado", tablero)


function dibujarTablero(){
    let tablero=document.getElementById("a");
    let tabla=document.createElement("table");
    console.log(tabla);
    tablero.appendChild(tabla);

    //Dibujamos las filas
    for (let i=0;i<10;i++){
        let fila=document.createElement("tr");
        for(let j=0;j<10;j++){
            let celda=document.createElement("td");
            celda.innerHTML="0";
            celda.id="id celda"+"_"+i+"_"+j;
            fila.appendChild(celda);       

    }
    fila.appendChild(tabla);


    }

}

dibujarTablero();

