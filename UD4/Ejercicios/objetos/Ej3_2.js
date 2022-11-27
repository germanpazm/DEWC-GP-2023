let tvSamsung={
    nombre:"TV Samsung 42",
    categoria:"Televisores",
    unidades:4,
    precio:345.95,
    importe: function(){
        let total=this.unidades*this.precio
        return total;
    }
}