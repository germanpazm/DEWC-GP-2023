let N=parseInt(prompt("Introduzca un numero"));
let pares;

if(N%2==0){
    pares=N;
}
else  {
    pares=N-1;
    
}
document.write(N)

for(i=2;i<=pares;i+=2){
   
    document.write(` ${i}`);

}





/*
cadena "1,2,3,4"
cadena.split (".")
argumentos = cadena.split(",")
argumentos [1]
aguilera

argumemtos [0]
aguilera
*/