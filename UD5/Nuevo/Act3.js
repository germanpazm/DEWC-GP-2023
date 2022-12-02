function mostrar(e){
    console.log(e.target.type)

}


document.addEventListener("keydown",mostrar)

let coorX=0;
let coorY=0;
let altura=window.screen.height
let anchura=window.screen.width


function mostrar(e){
    let caja=document.getElementById("idCaja");
    let desp=10;
    console.log(e)
    console.log(e.key)    
    switch(e.key){
        case 'ArrowLeft':
            coorX=(coorX-desp) < 0 ? coorX : coorX - desp;
            caja.style.left = coorX + "px";
            break;
        case "ArrowRight":
            coorX=(coorX-desp) > anchura ? coorX : coorX +desp;
            caja.style.left = coorX + "px";
            break;
        case "ArrowUp":
            coorY=(coorY-desp) < 0 ? coorY : coorY -desp
            caja.style.top=coorY + "px"; 
            break;

        case "ArrowDown":
            coorY=(coorY-desp)>  altura ? coorY:coorY +desp
            caja.style.top=coorY + "px";
            break;
    }
}
window.addEventListener("keydown",mostrar)
