export default [
	{
	  path: '',
	  name: 'inicio',
	  meta: {layout: 'default', title: 'Home', description: 'Welcome to our homepage. Discover our services and featured projects.'},
	  component: () => import('../../modules/home/index.vue'),
	},
	{
	  path: '/Services',
	  name: 'servicios',
	  meta: {layout: 'default', title: 'Services', description: 'Explore the services we offer to help you achieve your goals.'},
	  component: () => import('../../modules/pages/serviceController/index.vue'),
	},
	{
	  path: '/Projects',
	  name: 'proyectos',
	  meta: {layout: 'default', title: 'Projects', description: 'Check out our recent projects and how we can help with yours.'},

	  component: () => import('../../modules/pages/projectsController/index.vue'),
	},
  ];
  