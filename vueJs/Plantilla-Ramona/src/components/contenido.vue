<script setup>
import { ref,onMounted } from "vue"
import { reactive } from "vue";
import servicioDatosProducto from "../servicios/servicioDatosProducto";

const props = defineProps ({
    parametro: {
        type: String,
        required: true
    }
})
let id=0;
let productos=ref(null);
let nombreProducto=ref(null);
let productoObj=reactive({ nombre:null,descripcion:null})

let ricky=ref([
    { id:id++, nombre:"Tierra",creacion:"22"}
]);
let i=0;
function obtenerProductos(){
    servicioDatosProducto.getAll()
    .then ((response) =>{
        let longitud=response.data.results.length;

        while(id<=longitud){
        
        ricky.value.push({id:id++,nombre:response.data.results[i].name,creacion:response.data.results[i].created })
        i++;        
        console.log(response.data.results[i]);
        }
        

        
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

function crearProducto() {

servicioDatosProducto.create(JSON.stringify(productoObj)).then(response => {
    obtenerProductos();

    })
    .catch(e => {
        console.log(e);
    })
}






/*let data={}
data.nombre="Cacahuetes";
data.descripcion="Descripcion Cacahuetes"

servicioDatosProducto.create(JSON.stringify(data))
    .then(response => {
       alert("Ha insertado correctamente el elemento")

        
        })
    .catch((e) => {
        alert("Error al insertar");
        });
    
*/
    




onMounted( ()=>{
    obtenerProductos()
});
</script>   

<template>
    <input type="text" placeholder="Producto a buscar" v-model="nombreProducto">
    <button type="button" @click="buscarProducto">buscar</button>

    <h4>Lista de Localizaciones Ricky Morty</h4>
        <ul>
            <li v-for="todo in ricky" :key="todo.id">
                {{ todo.nombre }}
                <br>
                Fecha de Creacion: {{ todo.creacion }}
                <p></p>
                </li>
        </ul>
        
        


     <button type="button" @click="obtenerProductos">ListarTodos</button>
        <br>

        <h1>insertar</h1>
        <form @submit.prevent="crearProducto">
            <label for="idNombre">Nombre</label>
            <input type="text" v-model="productoObj.nombre" id="idNombre" >
            <label for="idDescripcion">Descripcion</label>
            <input type="text" v-model="productoObj.descripcion" id="idDescripcion">


            
            <button type="submit">Crear</button>



        </form>

</template>


<style scoped> 

</style>