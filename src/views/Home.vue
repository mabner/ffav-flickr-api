<template>
	<div class="home">
		<hero-section
			backgroundImage="homepage-hero.jpg"
			title="FlickrAPI"
			subtitle="Trabalho desenvolvido utilizando a API do Flickr para pesquisa de imagens."
		/>
		<recent-photos />
		<!-- <place-photos /> -->
	</div>
</template>

<script>
	import HeroSection from '../components/HeroSection.vue';
	import RecentPhotos from '@/components/RecentPhotos';
	// import PlacePhotos from '@/components/PlacePhotos';

	// @ is an alias to /src
	export default {
		name: 'Home',
		components: { HeroSection, RecentPhotos,
		// PlacePhotos
		},
	};
</script>

<style>
	body {
		text-align: center;
	}
</style>
