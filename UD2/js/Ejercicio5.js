let sueldo=parseInt(prompt("Introduzca el sueldo"));
let antiguedad=parseInt(prompt("Introduzca el año de antiguedad"));
let sueldofinal;

if(sueldo<500 && antiguedad>=10){
 sueldofinal=sueldo*3
}

else if(sueldo<500 && antiguedad<10){
    sueldofinal=sueldo*2;

}

else if(sueldo>=500){
    sueldofinal=sueldo;
}
else{
    document.write("otro caso");
}

document.write(sueldofinal);