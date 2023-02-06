<script setup>
import cabecera from './components/cabecera.vue';
import cuerpo from './components/cuerpo.vue'
import barramenu from './components/menu.vue'
</script> 


<template>
<header>
  <barramenu titulo="MenuPrincipal" :links="['inicio','listar','autor']"/>
  <RouterView/>

  <cabecera titulo="App Vue" autor="Esta web es desarrollado por Germán Paz"/>
</header>
<main>
<cuerpo/>
</main>

</template>

<style scoped>

</style>
