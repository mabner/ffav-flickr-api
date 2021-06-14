<template>
  <div id="app">
    <Header />
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { Header, Navbar },
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
