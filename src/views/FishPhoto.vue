<template>
	<div class="wrapper">
		<ul class="image-card-grid">
			<image-card
				v-for="image in aquariumSet"
				:key="image.id"
				:image="image"
			/>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	import ImageCard from '../components/ImageCard.vue';
	import config from '../../config';

	export default {
		name: 'FishPhoto',
		components: {
			ImageCard,
		},
		data() {
			return {
				loading: false,
				images: [],
			};
		},
		methods: {
			loadImages() {
				this.loading = true;
				this.fetchImages()
					.then((response) => {
						this.images = response.data.photoset.photo;
						this.loading = false;
					})
					.catch((error) => {
						console.log('An error ocurred: ', error);
					});
			},
			fetchImages() {
				return axios({
					method: 'get',
					url: 'https://api.flickr.com/services/rest',
					params: {
						method: 'flickr.photosets.getPhotos',
						api_key: config.api_key,
						photoset_id: config.photoset,
						extras: 'url_n, url_o, owner_name, date_taken, views',
						page: 1,
						format: 'json',
						nojsoncallback: 1,
						per_page: 30,
					},
				});
			},
		},
		beforeMount() {
			this.loadImages();
		},
		computed: {
			aquariumSet() {
				return this.images.filter((image) => image.url_n);
			},
		},
	};
</script>

<style></style>
