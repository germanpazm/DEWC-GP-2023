import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/paginas/paginaInicio.vue";
import paginaListar from "@/paginas/paginaListar.vue";
import paginaAutor from "@/paginas/paginaAutor.vue";


const router = createRouter({
    history: createWebHistory (import.meta.env.BASE_URL),
    routes: [
        //Públicas
        {   path: '/', 
            name:'inicio',
            component: paginaInicio
        },  
        {   path: '/listado', 
            name:'listar',
            component: paginaListar
        },   
        {   path: '/autor', 
            name:'autor',
            component: paginaAutor
        },    
 

        //Si se produce un error
        {
            path: '/:pathMatch(.*)*',
            redirect:() => ({ name:'inicio'})
        }
    ]

});

export default router;