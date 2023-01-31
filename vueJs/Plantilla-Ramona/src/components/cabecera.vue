<script setup >
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
</script>

<template>
  <h1>{{ titulo }}</h1>
  <h3>{{ contenido }}</h3>
</template>

<style scoped>

</style>
