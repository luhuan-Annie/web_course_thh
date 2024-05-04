import VueRouter from "vue-router";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/TheHome.vue'),
        // children: [
        //     {
        //         path: '/',
        //         name: 'Home',
        //         component: () => import('@/components/TheHome.vue')
        //     }
        // ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;