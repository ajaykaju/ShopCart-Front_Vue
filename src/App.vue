<template>
  <nav-bar></nav-bar>
  <div class="content">
    <search-bar class="main_search_bar" ></search-bar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  components: { NavBar, SearchBar },
};
</script>


<style lang="sass">
@import './styles/main'
</style>

<style lang="sass" scoped>
@import './styles/main_scoped'
</style>