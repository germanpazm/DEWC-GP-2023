class productos{
constructor(nombre,categoria,unidades,precio){
    this._nombre=nombre;
    this._categoria=categoria;
    this._unidades=unidades;
    this._precio=precio;
}
get nombre(){
    return this._edad;
}

set nombre(valor){
    this._nombre=valor;

}
get categoria(){
    return this._categoria;
}
set categoria(valor){
    this._categoria=valor;
}
get unidades(){
    return this._unidades;
}
set unidades(valor){
    this._unidades=valor;
}
get precio(){
    return this._precio;
}
set precio(valor){
    this._precio=valor;
}
//no static
 getInfo(){
    let importe=this.unidades*this.precio
    console.log(`${this.nombre} (${this.categoria}): ${this.unidades} uds x ${this.precio} € = ${importe} €`)
}
toString(){
    this.nombre=this._nombre.toString();
    this.categoria=this._categoria.toString();
}

valueOf(){
    this.unidades=parseInt(this._unidades);
    this.precio=parseFloat(this._precio);
}




}

let producto1= new productos("Tv Samsung 42","2",43,345.95);
let producto2= new productos("LG","Televisores",4,348.95);
let producto3= new productos("Panasonic","Televisores",4,350.95);
let producto4= new productos("Philips","Tv Samsung","Televisores",4,355.95);

