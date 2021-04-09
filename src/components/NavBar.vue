<template>
  <nav class="top_bar">
    <div class="top_left">
      <div class="menu_button mouse_cursor"><img src="../assets/icons/menu-01.png" /></div>
      <div class="logo mouse_cursor">ShopCart<img src="" /></div>
    </div>
    <search-bar class="navbar_search"></search-bar>
    <div class="top_navigations">
      <div class="user_welcome">
        <span>Hello,</span><span class="user_name mouse_cursor"> Sign in</span>
      </div>
      <div class="avatar mouse_cursor"><img src="" /></div>
      <div class="cart mouse_cursor">
        <span class="cart_items">56</span>
        <img src="../assets/icons/shopping-cart.png" />
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  components: { SearchBar },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
@import ../styles/navbar
</style>