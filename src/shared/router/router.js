import homeVue from "./routes";

export default [
    {
        path: '/:catchAll(.*)',
        component: () => import('../../modules/auth/404.vue'),
        meta: { name: 'Not Found', title: "404 No Encontrado" },
    },
    ...homeVue
];
