export default [
    {
		path:'',
		name: 'inicio',
		meta: { layout: 'default', title: 'inicio' },
		component: () => import('../../modules/home/index.vue'),
	},
    {
		path:'/servicios',
		name: 'servicios',
		meta: { layout: 'default', title: 'servicios' },
		component: () => import('../../modules/pages/serviceController/index.vue'),
	},
    {
		path:'/proyectos',
		name: 'proyectos',
		meta: { layout: 'default', title: 'proyectos' },
		component: () => import('../../modules/pages/projectsController/index.vue'),
	},
];