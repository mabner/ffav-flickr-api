<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/recent">Recentes</router-link> |
		<router-link to="/search">Pesquisar</router-link> |
		<router-link to="/places">Lugares</router-link> |
		<router-link to="/aquarium">Aquario</router-link> |
		<router-link to="/about">Sobre</router-link>
	</div>
</template>

<script>
	export default {
		name: 'NavBar',
		data() {
			return {
			};
		},
	};
</script>

<style>
	#nav {
		text-align: center;
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #0063dc;
	}
</style>
