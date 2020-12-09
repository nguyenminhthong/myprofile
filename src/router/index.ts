import Vue from 'vue';
import {VueRouter, routers} from './router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routers,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
});


// router.beforeEach((from, to, next) => {
    
// });

// router.afterEach((to) => {

// });


export default router;
