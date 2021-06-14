<template>
  <li>
    <img :src="image.url_n" :alt="image.title" />
    <div>
      <p v-if="image.title">{{ image.title }}</p>
      <p v-else>No Title Found</p>
      <p>Por: {{ image.ownername }}</p>
      <section>
        <p>Publicada em: {{ image.datetaken }}</p>
        <p>Visualizações: {{ image.views }}</p>
      </section>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ImageCard',
  props: ['image'],
};
</script>
