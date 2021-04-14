import {createRouter, createWebHistory } from 'vue-router';
import home from '../components/Home.vue';
import guide from '../components/Guide.vue'; 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        component: home
        },
        {
            path: '/guide',
            component: guide
        }
]
});

export default router;
