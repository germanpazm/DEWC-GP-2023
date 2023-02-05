<script setup>
import { ref, transformVNodeArgs } from 'vue';
import { reactive } from 'vue';
const contador=reactive({ contar:0 });
const mensaje=ref("Hola Mundo")
contador.contar++;
//console.log(contador.contar);
//console.log(mensaje.value);

const tituloclase=ref("titulo")



function incrementar(){
  contador.contar++;
}


const imprimir =ref("");

const awesome = ref(true);

function cambiarMensaje(){
    awesome.value = !awesome.value
}


let id=0
const anadir=ref("");
const pilotos=ref([
  {id:id++,nombre:"Fernando Alonso"},
  {id:id++,nombre:"Max Verstappen"},
  {id:id++,nombre:"Carlos Sainz"}
])

function anadirPiloto(){
pilotos.value.push({ id:id++,nombre:anadir.value});
}

function eliminarPiloto(piloto){
  pilotos.value=pilotos.value.filter(e=>e !==piloto )
}

</script> 


<template>
  <h1>{{ mensaje }}</h1>
  <p>{{ contador.contar }}</p>

  <h1>----------Cambios---------------------Invierto el hola mundo y lo pongo en rojo</h1>
  <h1 :class="tituloclase">{{ mensaje.split('').reverse().join('') }}</h1>

  <h1>----------Cambios---------------------Aumento el contador</h1>
  <button @click="incrementar" >El contador es {{ contador.contar }}</button>
  <!---Al contador.contar ser reactivo el valor del   <p>{{ contador.contar }}</p> 
      tambien se va a modificar al pulsar el boton que llama a la funcion incrementar-->

      
      <h1>----------Cambios---------------------Imprimo el mensaje que escribo en el input</h1>

    <input v-model="imprimir">
    <p>{{ imprimir }}</p>

    <h1>----------Cambios---------------------Cambio el mensaje con if</h1>
    <button @click="cambiarMensaje">Cambiar</button>
    <h1 v-if="awesome">Vue is awesome</h1>
    <h1 v-else>Oh no 😢</h1>

    <h1>---------Recorrer una lista</h1>
    
    <form @submit.prevent="anadirPiloto">
      <input v-model="anadir">
      <button>Anadir</button>

    </form>
    <li v-for="piloto in pilotos" :key="piloto.id">
     {{ piloto.nombre }}
     <button @click="eliminarPiloto(piloto)">X</button>
     </li>



</template>

<style scoped>
.titulo{
  color: red;
}

</style>
