<template>
  <nav class="navbar">
    <form class="searchbar">
      <label>
        <span class='screen-reader-only'>Pesquisar:</span>
        <input
          v-model="tag"
          placeholder="Pesquisar por imagem..."
          type="text"
          class="searchbar-input">
      </label>
      <button
        type="submit"
        class="btn btn--flickr btn--go"
        @click.prevent="search">
          Buscar
      </button>
    </form>
  </nav>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      tag: ''
    }
  },
  methods: {
    search() {
      this.$router.push({name: 'searchResults', params: {tag: this.tag}})
      this.tag = '';
    }
  }
}
</script>