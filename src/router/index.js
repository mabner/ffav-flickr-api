import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SearchResults from '../views/SearchResults.vue';
import Places from '../views/Places.vue';
import FishPhoto from '../views/FishPhoto.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/aquarium',
		name: 'fishPhoto',
		component: FishPhoto,
	},
	{
		path: '/recent',
		name: 'recentPhotos',
		component: () => import('../views/Recent.vue'),
	},
	{
		path: '/search/:tag',
		name: 'searchResults',
		component: SearchResults,
		props: true,
	},
	{
		path: '/places',
		name: 'Places',
		component: Places,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
