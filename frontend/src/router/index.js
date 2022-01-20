import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/About.vue');
        }
    },
    {
        path: '/',
        name: 'Dashboard',
        component: function () {
            return import('../views/Dashboard.vue');
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
