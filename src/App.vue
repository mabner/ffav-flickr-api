<template>
	<div id="app">
		<Header />
		<navbar />
		<search-bar />
		<router-view />
		<Footer />
	</div>
</template>

<script>
	import Header from './components/Header.vue';
	import Navbar from './components/NavBar.vue';
	import Footer from './components/Footer.vue';
	import SearchBar from './components/SearchBar.vue';

	export default {
		name: 'App',
		components: { Header, Navbar, Footer, SearchBar },
	};
</script>

<style>
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
