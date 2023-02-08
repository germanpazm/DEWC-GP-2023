import { createRouter, createWebHistory } from "vue-router";
import ejemplo1 from "@/paginas/ejemplo1.vue";
import ejemplo2 from "@/paginas/ejemplo2.vue";
import ejemplo3 from "@/paginas/ejemplo3.vue";
import ejemplo4 from "@/paginas/ejemplo4.vue"


const router = createRouter({
    history: createWebHistory (import.meta.env.BASE_URL),
    routes: [
        //Públicas
        {   path: '/ejemplo1', 
            name:'ejemplo1',
            component: ejemplo1
        },  
        {   path: '/ejemplo2', 
            name:'ejemplo2',
            component: ejemplo2
        },   
        {   path: '/ejemplo3', 
            name:'ejemplo3',
            component: ejemplo3
        },    
        {
            path:'/ejemplo4',
            name:'ejemplo4',
            component:ejemplo4
        },
 

        //Si se produce un error
        {
            path: '/:pathMatch(.*)*',
            redirect:() => ({ name:'ejemplo1'})
        }
    ]

});

export default router;