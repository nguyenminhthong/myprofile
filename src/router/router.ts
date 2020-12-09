import VueRouter, {RouteConfig} from 'vue-router';

const routers: Array<RouteConfig> = [
    {
        path: '/home',
        alias: '/',
        component: () => import('@/views/Home.vue')
    },
];

export {routers, VueRouter};
