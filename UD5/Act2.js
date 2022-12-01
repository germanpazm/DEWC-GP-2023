function mostrar(e){
    console.log(e.clientX);
    document.getElementById("idInfoX").innerHTML=e.clientX
    document.getElementById("idInfoY").innerHTML=e.clientY
}
//Me aplica este evento en todo el documento.Document==Me captura las coordenadas del raton en todo el documento
document.addEventListener("mousemove",mostrar);



