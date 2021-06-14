<template>
  <div class="home">
    <form>
      <label>
        Pesquisa:
        <input v-model="tag" type="text" />
      </label>
      <button type="submit" class="go-button" @click.prevent="search">
        Buscar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      tag: '',
    };
  },
  methods: {
    search() {
      console.log('Buscando por: ', this.tag);
    },
  },
};
</script>
