<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';

const contador=reactive({ contar:0 });
const mensaje=ref("Hola Mundo")
contador.contar++;
</script>

<template>

<h1>{{ mensaje }}</h1>
<p>{{ contador.contar }}</p>

</template>

<style scoped>

</style>