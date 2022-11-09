let config = new Map([
    ['Tam_Max', 10],
    ['Num_Bombas', 20],
    ]);

let tablero = []
const TAM_MAX = 10

function generartablero(){
    for(let i=0; i<TAM_MAX; i++){
        tablero[i] = new Array(TAM_MAX);
        for(let j = 0; j<TAM_MAX; j++){
            tablero[i][j]=0;
        }
    }
}



let numeroAleatorio = () => {
    return parseInt(TAM_MAX*Math.random())
}


function colocarbombas(){
    let cont = 0
    let i=0
    let j=0
    while(cont <= (TAM_MAX*TAM_MAX)/2){
        i = numeroAletorio()
        j = numeroAletorio()
        if(tablero[i][j] == 0){
            tablero[i][j] = 1;
            cont++;
        }
    }
}
// generartablero()
// colocarbombas()
//document.write(tablero);

function dibujarTablero(){

// ¿Ubicación de la tabla?
let tableroHTML = document.getElementById("idTablero");

// Crear la tabla
let tabla = document.createElement("table");
console.log(tabla)

//Insertar o dibujar en el documento.
tableroHTML.appendChild(tabla)

// Dibujamos las filas
for(let i = 0 ; i < TAM_MAX ; i++){
    let fila = document.createElement("tr");
    for(let j = 0 ; j < TAM_MAX ; j++){
        
        let celda = document.createElement("td");
        celda.innerHTML=tablero[i][j]
        celda.id=`idCelda_${i}_${j}`
        fila.appendChild(celda)
        
    }    
    tabla.appendChild(fila)
}





generartablero()
colocarbombas()
console.log(tablero)
dibujarTablero()
}
