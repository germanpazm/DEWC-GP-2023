const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
'C', 'K', 'E'];
let numero = prompt("Escribe tu numero de DNI ");
let letra = prompt("Escribe la letra de tu DNI en mayusculas");
if (numero < 0 || numero > 99999999) {
    alert("El numero indicado no es válido");
}
else {
    let letraCalculada = letras[numero % 23];
    if (letraCalculada != letra) {
        alert ("La letra introducida no es válida");
    }
    else {
        alert ("el número y letra introducidos son correctos");
    }
}
