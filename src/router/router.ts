import VueRouter, {RouteConfig} from 'vue-router';

const routers: Array<RouteConfig> = [
    {
        path: '/home',
        alias: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/resume',
        name: 'resume',
        component: () => import('@/views/Resume.vue')
    },
    {
        path: '/works',
        name: 'works',
        component: () => import('@/views/Works.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('@/views/Projects.vue')
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: () => import('@/views/Blogs.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue')
    },
];

export {routers, VueRouter};
