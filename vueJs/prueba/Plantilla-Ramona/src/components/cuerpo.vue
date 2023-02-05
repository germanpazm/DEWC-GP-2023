<script setup>
import { reactive, ref } from 'vue'
defineProps({
  titulo: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  }
})

//Javascript asociado al punto1
//Variables a utilizar en el template
const mensaje=ref("Hola Mundo")
const contador=reactive({cuenta:0})


//Variabls internas que no utilizare en el template
const autor=null;



console.log(mensaje.value)
console.log(contador.cuenta)

//Javascript asociado al punto2
/*let claseTitulo=ref("titulo")
setInterval(()=> {
  (claseTitulo.value==="titulo2")? claseTitulo.value="titulo":claseTitulo.value="titulo2"
  console.log(claseTitulo)
},1000)
*/

//Javascript asociado al punto3
//let contadorp4=ref(0);

function incrementar(){
  contador.cuenta++;
}


function decrementar(){
  contador.cuenta--;
}


//////////////////////////////////////

const texto = ref('')

function onInput(e) {
  texto.value = e.target.value
}
let claseTituloP4=ref('')

//////////////////////////////////////////////////////////////////////////////

const visibilidad=ref(true)

function cambiar(){
  visibilidad.value = !visibilidad.value
}


let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo() {
  if (newTodo.value != "") {

    if (todos.value.find(e => e.text === newTodo.value)) {
        newTodo.value = ''
        console.log("repetido");
    } else {
        todos.value.push({ id: id++, text: newTodo.value })
        newTodo.value = ''
        console.log("insertado");
}

} else {
console.log("Tarea vacia");
}

/*
if(newTodo.value==""){

  conosole.log("El elemento no puede ser vacio")
}
else if(todos.value.find(e)=> e.text===newTodo.value){
  console.log("El elemento existe")
}
else{
  todos.value.push({id:id++,text:newTodo.value})
  newTodo.value=""
}

*/
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}


</script>

<template>

  <h1>Punto1:Representación Declarativa</h1>
  <h1>Mensaje {{ mensaje }}</h1>
  <p>Cuenta es: {{ contador.cuenta }}</p>
  <hr>

  <h1>Punto2</h1>
  <h1 :class="claseTitulo">Representacion Declarativa{{ claseTitulo }}</h1>

  <hr>

  <h1>Punto3</h1>
  <button @click="incrementar">El contador es: {{ contador.cuenta }}</button>
  <button @click="decrementar">El contador es: {{ contador.cuenta }}</button>

  <hr>
  <h1>Punto4</h1>

  <input v-model="texto" placeholder="Type here">
  <xp>{{ texto }}</xp>

<hr>  

<h1 :class="claseTituloP4">Punto 4:bindeo Input[{{ claseTituloP4 }}]</h1>
<input v-model="claseTituloP4" placeholder="Escribe:titulo o titulo2">


<hr>
<h1>Punto 6</h1>
<button @click="cambiar">Cambiar</button>
<h1 v-if="visibilidad">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>


<h1>Punto 7</h1>
<form @submit.prevent="addTodo">
    <input v-model="newTodo ">{{ newTodo }}
    
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>

</template>

<style scoped>
.titulo {
  color: red;
}

.titulo2{
  text-align: left;
  color: blue;
}
</style>
