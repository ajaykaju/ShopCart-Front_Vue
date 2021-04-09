<template>
   <header>
      <nav-bar></nav-bar>
   </header>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>


<style lang="sass">
@import './styles/main'
</style>