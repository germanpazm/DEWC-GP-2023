<script setup>
import { ref,onMounted } from "vue"
import servicioDatosProducto from "../servicios/servicioDatosProducto";

const props = defineProps ({
    parametro: {
        type: String,
        required: true
    }
})

let productos=ref(null);
let nombreProducto=ref(null);
// let productoActual=ref(null);

function obtenerProductos(){
    servicioDatosProducto.getAll()
    .then ((response) =>{
        productos.value=response.data;
        console.log(response.data);
    })
    .catch((e)=> {
    console.log(e)
    });
}

function buscarProducto(){
    if(nombreProducto.value !=null){
        servicioDatosProducto.findByGeneral(nombreProducto.value)
            .then(response => {
                if(response.data !==[]){
                    productos.value=response.data

                }
            })
            .catch((e) => {
                console.log(e);
            });
    }
}


/*let data={}
data.nombre="Cacahuetes"
data.descripcion="Descripcion Cacahuetes"

*/
function insertarProducto(){
servicioDatosProducto.create(JSON.stringify(nombreProducto.value))
    .then(response => {
       alert("Ha insertado correctamente el elemento")

        
        })
    .catch((e) => {
        alert("Error al insertar");
        });
    

    }




onMounted( ()=>{
    obtenerProductos()
});
</script>   

<template>
    <input type="text" placeholder="Producto a buscar" v-model="nombreProducto">
    <button type="button" @click="buscarProducto">buscar</button>
    <button type="button" @click="insertarProducto">Insertar</button>

    <h4>Lista de Productos</h4>
        <ul>
            <li v-for="(producto,id) in productos" :key="id">{{ producto.nombre }}</li>
        </ul>

     <button type="button" @click="obtenerProductos">ListarTdos</button>
    
    
</template>


<style scoped> 

</style>