<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    "titulo":String,
    "links":Array,
})
</script>   

<template>
    <span>{{props.titulo}}</span>
    <nav>
        <RouterLink
         v-for="enlace in props.links"
         :key="enlace"
         :to="{ name: enlace }">
            {{ enlace }} ---
        </RouterLink>        
    </nav>

</template>
<style scoped> </style>