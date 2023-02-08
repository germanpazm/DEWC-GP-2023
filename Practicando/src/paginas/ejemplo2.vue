<script setup>
import { ref } from 'vue';
const mensaje=ref("Hola Mundo")
const tituloclase=ref("titulo")



</script>

<template>
  <h1 :class="tituloclase">{{ mensaje.split('').reverse().join('') }}</h1>
</template>

<style scoped>
.titulo{
  color: red;
}

</style>