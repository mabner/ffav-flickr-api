<template>
	<div class="home">
		<hero-section
			backgroundImage="homepage-hero.jpg"
			title="FlickrAPI"
			subtitle="Trabalho desenvolvido utilizando a API do Flickr para pesquisa de imagens."
		/>
	</div>
</template>

<script>
	import HeroSection from '../components/HeroSection.vue';
	// @ is an alias to /src
	export default {
		name: 'Home',
		components: { HeroSection },
	};
</script>

<style>
	body {
		text-align: center;
	}
</style>
