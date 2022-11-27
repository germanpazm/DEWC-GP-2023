function HijosNodo(){
    let hijos=document.getElementById("container").childNodes;
    let resultado=document.getElementById("idresultado");
    numero=hijos.length;
    resultado.innerHTML=`<br> ${numero} <br>` ;
    hijos.forEach (e=>resultado.innerHTML+=`<br> ${e.nodeName}`)

 }


 function HijosElemento(){
    let hijos=document.getElementById("container").children;
    let resultado=document.getElementById("idresultado");
    numero=hijos.length;
    resultado.innerHTML=`<br> ${numero} <br>`   ;
    for(i=0;i<hijos.length;i++){
        resultado.innerHTML+=` <br> ${hijos[i].innerHTML}`;
    }
 }
