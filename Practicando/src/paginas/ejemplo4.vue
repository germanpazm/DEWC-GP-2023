<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
const imprimir=ref("")
</script>

<template>
    <input v-model="imprimir">
    <p>{{ imprimir }}</p>
</template>

<style scoped>

</style>