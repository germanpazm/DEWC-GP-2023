<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
const contador=reactive({ contar:0 });

function incrementar(){
  contador.contar++;
}
</script>

<template>
    <p>{{ contador.contar }}</p>
    <button @click="incrementar" >El contador es {{ contador.contar }}</button>
</template>

<style scoped>
</style>