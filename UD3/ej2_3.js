mostrar=0;
function hora2(){
let fecha=new Date();
console.log(fecha);
hora=fecha.getHours();
minutos=fecha.getMinutes();
segundos=fecha.getSeconds();

let horaactual=`${hora}:${minutos}:${segundos}`;
return document.title=horaactual;
}
function mostrar(){
mostrar=setInterval(hora2,1000);
}
mostrar();

function parar(){
clearTimeout(mostrar)
}