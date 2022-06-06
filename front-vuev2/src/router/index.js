import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

Vue.use(VueRouter)

const routes = [
	{
	  path: '/',
	  name: 'create',
	  component: () => import('../components/create-called/CreateCalledComponent.vue'),
	},
	{
	  path: '/list-called',
	  name: 'list',
	  component: () => import('../components/list-called/ListCalledComponent.vue'),
	},
	{
	  path: '/edit-called/:id',
	  name: 'update',
	  component: () => import('../components/edit-called/EditCalledComponent.vue'),
	},
	{
	  path: '/login-called',
	  name: 'login',
	  component: () => import('../components/login-called/LoginComponent.vue'),
	},

  ];

  const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
  })
  

router.beforeResolve((to, from, next) => {
	if(to.name){
		NProgress.start();
	}
	next();
});

router.afterEach((to, from) => {
	NProgress.done();
});

export default router
