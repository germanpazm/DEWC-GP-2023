<script setup>
// import cabecera from './components/cabecera.vue'
// import cuerpo from './components/cuerpo.vue'
import barramenu from './components/menu.vue'

</script>

<template>
  <header>
    <barramenu titulo="MenuPrincipal" :links="['inicio','listar','autor']"/>
    

    <!-- <cabecera titulo="Aplicacion" contenido="Esta web es desarrollado por" /> -->


  </header>
  <hr>

  <main>
    <!-- <cuerpo /> -->
    <RouterView />
  </main>
</template>

<style scoped>  
</style>

