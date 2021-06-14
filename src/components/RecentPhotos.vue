<template>
	<section class="content-section margin-y--6">
		<h2 class="centered">Veja as Últimas Postagens</h2>
		<ul class="image-card-grid">
			<image-card
				v-for="image in mostRecentPhotos"
				:key="image.id"
				:image="image"
			/>
		</ul>
	</section>
</template>

<script>
	import flickr from '../services/flickr';

	import ImageCard from './ImageCard.vue';

	export default {
		name: 'RecentPhotos',
		components: { ImageCard },
		created() {
			this.fetchRecentPhotos();
		},
		data() {
			return {
				recentPhotos: [],
			};
		},
		computed: {
			mostRecentPhotos() {
				return this.recentPhotos.slice(0, 6);
			},
		},
		methods: {
			fetchRecentPhotos() {
				return flickr('photos.getPopular', {
					extras: 'url_n, owner_name, description, date_taken, views',
					page: 1,
					user_id: '59217490@N00',
					per_page: 3,
				})
					.then((response) => {
						this.recentPhotos = response.data.photos.photo;
					})
					.catch((error) => {
						console.log('Error occured: ', error);
					});
			},
		},
	};
</script>

<style>
	.centered {
		text-align: center;
	}
	.margin-y--6 {
		margin-top: 6rem;
		margin-bottom: 6rem;
	}
</style>
