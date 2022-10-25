

/*
let x=parseInt(prompt("Introduzca primer valor"));
let y=parseInt(prompt("Introduzca segundo valor"));

for (let i=0;i<=y;i++) {
    let resultado=x*i;
    document.write(`<br> ${x}x ${i} = ${resultado}`);
}
*/

let x=parseInt(prompt("Introduzca el primer valor"));
let y=parseInt(prompt("Introduzca el segundo valor"));
let resultado;
for(let i=1;i<=y;i++){
resultado=x*i;
document.write(`${x}*${i}= ${resultado} <br>`)
}

