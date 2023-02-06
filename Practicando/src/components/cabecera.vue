<script setup>
defineProps ({
    titulo:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        required:true
    }
}
)
</script> 


<template>
    <h1>{{ titulo }}</h1>
    <h3>{{ autor }}</h3>


</template>

<style scoped>

</style>
