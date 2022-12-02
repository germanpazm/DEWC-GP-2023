function numeroAleatorio(min,max){
   return Math.round(Math.random()* (max-min)+min);
}

function CambiarColor(e){
    console.log(e.target.textContent);
    if(e.target.type =="submit"){
        document.body.style.background=`rgb(${numeroAleatorio(0,255)},${numeroAleatorio(0,255)},${numeroAleatorio(0,255)})`;
        console.log("color aleatorio");
    }
    else{
        document.body.style.backgroundColor="white";
    }
    e.preventDefault();
    e.stopPropagation();
}
idBoton=document.getElementById("idBoton");
idBoton.addEventListener("click",CambiarColor);
document.addEventListener("click",CambiarColor);