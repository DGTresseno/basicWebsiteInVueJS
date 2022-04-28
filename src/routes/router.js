import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComponent from '@/pages/HomeComponent'
import VideosComponent from '@/pages/VideosComponent'
import SobreComponent from '@/pages/SobreComponent'
import ContatoComponent from '@/pages/ContatoComponent'

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/videos',
        component: VideosComponent
    },
    {
        path: '/sobre',
        component: SobreComponent
    },
    {
        path: '/contato',
        component: ContatoComponent
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;