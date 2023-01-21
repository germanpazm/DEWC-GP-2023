let tablero = []
let tablero_recursivo = []

const datos = new Map([
    ["TAM_MAX", 10],
    ["N_BOMBAS", (10 * 10) / 4]

])

function generartablero() {
    for (let i = 0; i < datos.get("TAM_MAX"); i++) {
        tablero[i] = new Array(datos.get("TAM_MAX"));
        tablero_recursivo[i] = new Array(datos.get("TAM_MAX"));
        for (let j = 0; j < datos.get("TAM_MAX"); j++) {
            tablero[i][j] = 0;
            tablero_recursivo[i][j] = 0;
        }
    }
}

let numeroAletorio = () => {
    return parseInt(10 * Math.random())
}


function colocarbombas() {
    // Colocamos las bombas en posiciones aleatorias del tablero
    for (let i = 0; i < datos.get("N_BOMBAS"); i++) {
        let fila = numeroAletorio();
        let columna = numeroAletorio();
        tablero[fila][columna] = 1;
    }
}

function limpiarTablero() {
    // Obtenemos la tabla
    let tableroHTML = document.getElementById("idTablero");

    // Vaciamos el contenido del elemento con el id "idTablero"
    tableroHTML.innerHTML = "";

    // Generamos un nuevo tablero vacío
    generartablero();

    // Dibujamos el nuevo tablero
    colocarbombas();

    dibujarTablero();
    asociarEventClick()
}

function dibujarTablero() {
    // Obtenemos la tabla
    let tableroHTML = document.getElementById("idTablero");

    // Vaciamos el contenido del elemento con el id "idTablero"
    tableroHTML.innerHTML = "";

    // Generamos un nuevo tablero vacío
    generartablero();

    // Colocamos las bombas en posiciones aleatorias del tablero
    colocarbombas();

    // Crear la tabla
    let tabla = document.createElement("table");
    tabla.setAttribute("border", 1)

    //Insertar o dibujar en el documento.
    tableroHTML.appendChild(tabla)

    // Dibujamos las filas
    for (let i = 0; i < datos.get("TAM_MAX"); i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < datos.get("TAM_MAX"); j++) {

            let celda = document.createElement("td");
            celda.innerHTML = "---"
            celda.id = `idCelda_${i}_${j}`
            celda.esAzul = false; // Añadimos la propiedad esAzul a cada celda

            // Agregamos un listener de eventos para cuando se haga click en la celda
            celda.addEventListener('click', function(event) {
                // Verificamos si la celda ya ha sido marcada como azul
                if (celda.esAzul) {
                    // Si ya ha sido marcada como azul, no hacemos nada
                    return;
                }
                // Verificamos si la celda tiene una mina
                if (tablero[i][j] === 1) {
                    // Mostramos un mensaje de partida finalizada
                    alert('Partida finalizada');
                    // Limpiamos el tablero
                    limpiarTablero();
                } else {
                    // Calculamos el número de minas de alrededor de la celda
                    let numMinas = calcularMinas(i, j);

                    // Mostramos el número de minas en la propia celda
                    celda.innerHTML = numMinas;
                }
            });

            fila.appendChild(celda)

        }
        tabla.appendChild(fila)
    }

}

function calcularMinas(x, y) {
    let minas = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let fila = x + i;
            let columna = y + j;
            if (fila >= 0 && fila < datos.get("TAM_MAX") && columna >= 0 && columna < datos.get("TAM_MAX")) {
                if (tablero[fila][columna] === 1) {
                    minas++;
                }
            }
        }
    }
    return minas;
}

function asociarEventClick() {
    let celdas = document.getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener('contextmenu', colocarbandera)
        celdas[i].addEventListener('click', mostrarCoordenadas)
    }
}

// Creamos una función para marcar una celda como azul
function marcarCeldaAzul(celda) {
    // Establecemos la propiedad esAzul en true para indicar que la celda ha sido marcada como azul
    celda.esAzul = true;
    // Cambiamos el color de la celda a azul
    celda.style.backgroundColor = "blue";
}

function mostrarCoordenadas(event) {
    // Obtenemos la celda que fue clickeada
    let celda = event.target;

    // Verificamos si la celda ya ha sido marcada como azul
    if (celda.esAzul) {
        // Si ya ha sido marcada como azul, no hacemos nada
        return;
    }

    let coordenadas = event.target.id.split("_")
    let x = coordenadas[1]
    let y = coordenadas[2]

    console.log(x, y)

    event.target.style.background = "blue"
    liberarRecursivo(x, y);
    // Marcamos la celda como azul
    marcarCeldaAzul(celda);
}


function colocarbandera(event) {
    // Obtenemos la celda que fue clickeada
    let celda = event.target;
    // Verificamos si la celda ya ha sido marcada como azul
    if (celda.esAzul) {
        // Si ya ha sido marcada como azul, no hacemos nada
        return;
    }

    event.preventDefault()
    event.target.style.background = "red"
    console.log("vas a colocar una bandera")
}
// Esta función recibe dos argumentos: x e y, que representan la posición de una celda en el tablero.
function liberarRecursivo(x, y) {
    // Convertir los argumentos a enteros.
    x = parseInt(x)
    y = parseInt(y)

    // Crear una lista de las ocho celdas adyacentes a la celda actual, incluyendo las diagonales.
    let cercanos = [
        [x, y - 1],
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
        [x + 1, y],
        [x + 1, y - 1]
    ]

    // Si la celda actual es un cero (es decir, no es una mina):
    if (tablero[x][y] == 0) {
        // Asumir que la celda solo tiene ceros a su alrededor.
        let soloCeros = true;
        // Revisar cada una de las celdas adyacentes para ver si alguna de ellas no es un cero.
        for (let i = 0; i < cercanos.length; i++) {
            let celdaX = cercanos[i][0];
            let celdaY = cercanos[i][1];
            // Si la celda adyacente es válida (es decir, está dentro del tablero) y no es un cero, entonces la celda actual no solo tiene ceros a su alrededor.
            if (celdaX >= 0 && celdaY >= 0 && celdaX < datos.get("TAM_MAX") && celdaY < datos.get("TAM_MAX") && tablero[celdaX][celdaY] !== 0) {
                soloCeros = false;
                break; // Salir del bucle.
            }
        }
        // Si la celda solo tiene ceros a su alrededor:
        if (soloCeros) {
            // Revisar cada una de las celdas adyacentes y llamar a la función recursiva para cada una de ellas, siempre y cuando no haya sido visitada previamente.
            for (let i = 0; i < cercanos.length; i++) {
                let celdaX = cercanos[i][0];
                let celdaY = cercanos[i][1];
                if (celdaX >= 0 && celdaY >= 0 && celdaX < datos.get("TAM_MAX") && celdaY < datos.get("TAM_MAX") && tablero_recursivo[celdaX][celdaY] == 0) {
                    // Marcar la celda adyacente como visitada.
                    document.getElementById(`idCelda_${celdaX}_${celdaY}`).style.background = "blue"
                    tablero_recursivo[celdaX][celdaY] = "v"
                    // Llamar a la función recursiva para la celda adyacente.
                    liberarRecursivo(celdaX, celdaY)
                }
            }
        }
    }
}




generartablero()
colocarbombas()
dibujarTablero()
asociarEventClick()