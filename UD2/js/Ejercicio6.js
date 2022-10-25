let nota=parseFloat(prompt("Introduzca una calificación entre 0 y 10 "));
console.log(nota);
;
switch(nota){
    case nota>=0 && nota<=3:
        console.log("Muy Deficiente");
        break;
    case nota>=3 && nota<=5 :
        notaalfabetica="Insuficiente";
    break;
    case nota>=5 && nota<=6:
        notaalfabetica="Bien";
     break;
    case nota>=6 && nota<=9:
        notaalfabetica="Notable";
        break;  
    case nota>=9 && nota<=10:
        notaalfabetica="Sobresaliente"
        break;
    
}



