<script setup>
import cabecera from './components/cabecera.vue';
import cuerpo from './components/cuerpo.vue'
import barramenu from './components/menu.vue'
</script> 


<template>
<header>
  <!---<barramenu titulo="MenuPrincipal" :links="['ejemplo1','ejemplo2','ejemplo3','ejemplo4']"/>-->

  <cabecera titulo="App Vue" autor="Esta web es desarrollada por Germán Paz"/>
</header>
<main>
  <RouterView/>
  <cuerpo/>

</main>

</template>

<style scoped>

</style>
