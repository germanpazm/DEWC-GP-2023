function mostrar(){
    let hijos=document.getElementById("container2").children;
    let resultado=document.getElementById("idresultado");
    for(i=0;i<hijos.length;i++){
        resultado.innerHTML+=` <br>${hijos[i].innerHTML}. <br>`; 
    }

}