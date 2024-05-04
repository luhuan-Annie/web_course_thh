import VueRouter from "vue-router";
const routes = [
    {
        path: '/',
        name: 'main',
        redirect: '/home',
        component: () => import('@/components/TheContainer.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/components/TheHome.vue')
            },
            {
                path: '/brief',
                name: 'brief',
                component: () => import('@/components/TheBrief.vue')
            },
            {
                path: '/detail',
                name: 'detail',
                component: () => import('@/components/TheDetail.vue')
            },
            {
                path: '/attractions',
                name: 'attractions',
                component: () => import('@/components/TheAttraction.vue')
            },
            {
                path: '/delicacy',
                name: 'delicacy',
                component: () => import('@/components/TheDelicacy.vue')
            },
            {
                path: '/contact',
                name: 'contact',
                component: () => import('@/components/TheContact.vue')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;