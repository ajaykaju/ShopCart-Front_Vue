<template>
  <side-menu :isScrolled="isScrolled"></side-menu>
  <nav class="top_bar" :class="isLarge ? 'navLarge' : 'navSmall'">
    <div class="top_left">
      <div class="menu_button mouse_cursor" @click="isSideMenuChanger">
        <img src="../assets/icons/menu-01.png" />
      </div>
      <div class="logo mouse_cursor">ShopCart<img src="" /></div>
    </div>
    <search-bar class="navbar_search"></search-bar>
    <div class="top_navigations">
      <div class="user_welcome">
        <span>Hello,</span
        ><span class="user_name mouse_cursor"> Abhinandan</span>
      </div>
      <div @click="$router.push({ name: 'f1' })" class="avatar mouse_cursor">
        <img src="" />
      </div>
      <div class="cart mouse_cursor">
        <span class="cart_items">56</span>
        <img src="../assets/icons/shopping-cart-black.svg" />
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "./base/SearchBar.vue";
import SideMenu from "./SideMenu.vue";

import { mapActions } from "vuex";

export default {
  components: { SearchBar, SideMenu },
  props: {
    navType: {
      type: String,
      default: "large",
    },
    isScrolled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    isLarge() {
      if (this.navType.toLowerCase() === "small") return false;
      else return true;
    },
  },
  methods: {
    ...mapActions(["isSideMenuChanger"]),
  },
};
</script>

<style lang="sass" scoped>
@import ../styles/navbar
</style>