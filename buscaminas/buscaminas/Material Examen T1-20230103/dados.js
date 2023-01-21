let nombre_j1,nombre_j2;

let tiradas_j1 =0 
let tiradas_j2=0;

let puntos_j1=0
let puntos_j2=0;

let contador_partidas=0;
let infoPartida=null;

let ganador=null;
let perdedor=null;


function validarInformacionInicial(){
	if(document.getElementById("idInputNombreJ1").value == false){		
		
		swal('error', 'Debes indicar el nombre del Jugador 1!', "error");
		
		return false;
	}
	if(document.getElementById("idInputNombreJ2").value == false){
		
		swal('error', 'Debes indicar el nombre del Jugador 2!', "error");
		
		return false;
	}

	if(document.getElementById("idNumTiradas").value == false){		
		
		swal('error', 'Debes indicar el número de tiradas!', "error");
		
		return false;
	}

	let tiradas = parseInt(document.getElementById("idNumTiradas").value);
	if( isNaN(tiradas) || (!isNaN(tiradas) && (tiradas<=0))){		
		
		swal('error', 'el número de tiradas debe ser superior a 0!', "error");
		
		return false;
	}

	return true;
}

function iniciar(){

	if(validarInformacionInicial()==false){		
		return false;
	}

	//Iniciamos contador de partidas
	contador_partidas = contador_partidas+1 
	ganador=null;
	perdedor=null;
	document.getElementById("idBotonIniciar").setAttribute('disabled',"true");
	document.getElementById("dadoJ1").src = "img/0.png";
	document.getElementById("dadoJ2").src = "img/0.png";
	puntos_j1=puntos_j2=0;

	// Recogida de valores
	nombre_j1=document.getElementById("idInputNombreJ1").value;
	nombre_j2=document.getElementById("idInputNombreJ2").value;
	tiradas_j1=document.getElementById("idNumTiradas").value;
	tiradas_j2=tiradas_j1;

	document.getElementById("idPuntuacionJ1").innerHTML="PUNTUACIÓN: - 00 -";
	document.getElementById("idPuntuacionJ2").innerHTML="PUNTUACIÓN: - 00 -";
	
	//Empieza el juego!!!
	// Cargar información en el tablero de los jugadores
	document.getElementById("idTablero").classList.remove('ocultar');
	
	document.getElementById("idNombreJ1").innerHTML = `JUGADOR 1 : ${nombre_j1}`;
	document.getElementById("idNombreJ2").innerHTML = `JUGADOR 2 : ${nombre_j2}`;

	document.getElementById("idBotonTirarJ1").removeAttribute('disabled');
	document.getElementById("idBotonTirarJ2").removeAttribute('disabled');

	document.getElementById("tiradasJ1").innerHTML="TE QUEDAN " + tiradas_j1 + " TIRADAS";
	document.getElementById("tiradasJ2").innerHTML="TE QUEDAN " + tiradas_j2 + " TIRADAS";


}

function tiradaJ1(){
	// Actualizar Dado
	let aleatorio = generarNumeroAleatorio();
	document.getElementById("dadoJ1").src = `img/${aleatorio}.png`;
	puntos_j1 = puntos_j1 + aleatorio;

	//Actualizar puntuación
	document.getElementById("idPuntuacionJ1").innerHTML=`PUNTUACIÓN: ${puntos_j1}`;
	
	//Actualizar número de tiradas
	tiradas_j1 = parseInt(tiradas_j1) - 1;
	document.getElementById("tiradasJ1").innerHTML=`TE QUEDAN ${tiradas_j1} TIRADAS`; 
	
	// Comprobar si existe algún ganador
	comprobarGanador();
}

function tiradaJ2(){
	// Actualizar Dado
	let aleatorio = generarNumeroAleatorio();
	document.getElementById("dadoJ2").src =`img/${aleatorio}.png`;
	
	//Actualizar puntuación
	puntos_j2 = puntos_j2 + aleatorio;
	document.getElementById("idPuntuacionJ2").innerHTML=`PUNTUACIÓN: ${puntos_j2}`;
	
	//Actualizar número de tiradas
	tiradas_j2 = tiradas_j2 - 1;
	document.getElementById("tiradasJ2").innerHTML=`TE QUEDAN ${tiradas_j2} TIRADAS`; 
	
	// Comprobar si existe algún ganador
	comprobarGanador();
}


function comprobarGanador(){
	
	if (tiradas_j1 == 0){											// ¿Ha terminado jugador 1?
		document.getElementById("idBotonTirarJ1").setAttribute('disabled', "true");
	}

	if (tiradas_j2 == 0){											// ¿Ha terminado jugador 2?
		document.getElementById("idBotonTirarJ2").setAttribute('disabled', "true");
	}

	if (tiradas_j2 == 0 && tiradas_j1 == 0) {						// ¿Han terminado ambos jugadores?
		document.getElementById("idBotonIniciar").removeAttribute('disabled')
		if (puntos_j1 > puntos_j2){	
			
			swal('Victoria', `Partida Finalizada, ¡¡¡ Vencedor ${nombre_j1} !!!`, "success");		
			
			ganador=document.getElementById("idNombreJ1").value
			perdedor=document.getElementById("idNombreJ2").value	
							;
		} else if (puntos_j1 < puntos_j2) {				
			
			swal('Victoria', `Partida Finalizada, ¡¡¡ Vencedor ${nombre_j2} !!!`, "success");
			
			ganador=document.getElementById("idNombreJ1").value
			perdedor=document.getElementById("idNombreJ2").value
			
		} else{
			
			swal('Empate', `Partida Finalizada, ¡¡¡ EMPATE !!!`, "success");
		}

		document.getElementById("idBotonIniciar").removeAttribute('disabled')
		insertarnombres();
		insertarResultados();
	}	

	////
	//// UBICACIÓN MUY MUY IMPORTANTE!!!!!1
	////
	
}


/********************************************************
*  APARTADO 1 : Implementar reloj del juego
*******************************************************/

function reloj() {
	let fecha=new Date();
	let horas=fecha.getHours();
	let minutos=fecha.getMinutes();
	let segundos=fecha.getSeconds();
	let fechafinal=`${horas}:${minutos}:${segundos}`;
	let nodoreloj=document.getElementById("idReloj").children;
	return nodoreloj[0].innerHTML=fechafinal;


}

let a=window.setInterval(reloj,1000);





/********************************************************
*  APARTADO 2 : Definir función para número aleatorio.
*******************************************************/

function generarNumeroAleatorio(){
	// hacer un return con un valor entero aleatorio entre el 1 y el 6
	let numero=Math.floor(Math.random()*6 +1);
	return numero;
}




/*************************************************************
 *  APARTADO 3 : Gestión de jugadores
 *************************************************************/
let x=0;
let arraynombres=[];
let z=true;

function insertarnombres(){
	let jugadores=new Set();
	let insertarnombres="";
	let jugador1=document.getElementById("idInputNombreJ1").value;
	let jugador2=document.getElementById("idInputNombreJ2").value;
	jugadores.add(jugador1);
	jugadores.add(jugador2);
	jugadores.forEach( function (e){
		z=true;
		if (x==0){
			
			insertarnombres+=e;
			x=1
		}
		else{
			for(let i=0;i<arraynombres.length;i++){
				if(e==arraynombres[i]){
					z=false;
				}
			}
			
			if(z==true){
			insertarnombres+=`,${e}`;
			}
		}
	});
	

	
	
	let nodo=document.getElementById("idNombreJugadores");
	let elementoinsertar=document.createTextNode(insertarnombres);
	nodo.appendChild(elementoinsertar);
	let nombres=document.getElementById("idNombreJugadores").innerText;
	arraynombres=nombres.split(",");
	console.log(arraynombres);
	
	}



/*************************************************************
 *  APARTADO 4 : Definir Clase partida
 *************************************************************/





/********************************************************
*  APARTADO 5 : Gestión de resultados
*******************************************************/

function borrar (elemento){
	elemento.remove();
}

function insertarResultados() {
	let auxiliar = [];
	let resultados=[];

	let puntuacion1 =document.getElementById("idPuntuacionJ1").innerHTML;
	let aux1=puntuacion1.split(":");
	auxiliar.push(aux1[1]);

	let puntuacion2 =document.getElementById("idPuntuacionJ2").innerHTML;
	let aux2=puntuacion2.split(":");
	auxiliar.push(aux2[1]);


	resultados.push(auxiliar[0]+" -"+auxiliar[1]);

	if(auxiliar[0]>auxiliar[1]){
		let ganador=document.getElementById("idInputNombreJ1").value;
		let perdedor=document.getElementById("idInputNombreJ2").value;
		resultados.push(ganador);
		resultados.push(perdedor);
	}
	else{
		let ganador=document.getElementById("idInputNombreJ2").value;
		let perdedor=document.getElementById("idInputNombreJ1").value;
		resultados.push(ganador);
		resultados.push(perdedor);
	}


	let tr = document.createElement('tr');

	let tdPuntuacion = document.createElement("td");
	let textotdPuntuacion=document.createTextNode(resultados[0])
	tdPuntuacion.appendChild(textotdPuntuacion);

	let tdGanador = document.createElement("td");
	let textotdGanador=document.createTextNode(resultados[1])
	tdGanador.appendChild(textotdGanador);


	let tdPerdedor = document.createElement("td");
	let textotdPerdedor=document.createTextNode(resultados[2])
	tdPerdedor.appendChild(textotdPerdedor);
	


	tr.appendChild(tdPuntuacion);
	tr.appendChild(tdGanador);
	tr.appendChild(tdPerdedor);

	let tabla = document.getElementById('idEstadisticas');
	tabla.appendChild(tr);
	

	let recuperar=document.getElementsByTagName("tr");
	for(i=0;i<recuperar.length;i++){
	recuperar[i].className="Mostrar";
	recuperar[i].setAttribute("onclick","borrar(this)");
	}

}
  

