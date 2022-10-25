/*encontrado=false;

do{
    num=parseInt(prompt("intro"))
    if(num==10){
        encontrado=true;
    }
}while(num!=-1)

//encontrado ? document.write("Si"):document.write("No")


if(encontrado==false){
    document.write("No")
}

else{
    document.write("si")
}

*/
let encontrado=false;
do {
num=parseInt(prompt("Introduca un numero pulse -1 para salir"));
if(num==10){
    encontrado=true
}

}while(num!=-1)

if(encontrado==true){
    document.write("Si");
}

else{
    document.write("No");
}