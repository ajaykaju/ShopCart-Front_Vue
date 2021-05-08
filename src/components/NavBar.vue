<template>
    <side-menu
      :decider="isSideMenu"
      @decider="isSideMenu = !isSideMenu"
      :isScrolled="isScrolled"
    ></side-menu>
    <nav class="top_bar" :class="isLarge ? 'navLarge' : 'navSmall'">
      <div class="top_left">
        <div class="menu_button mouse_cursor" @click="isSideMenu = !isSideMenu">
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
        <div class="avatar mouse_cursor"><img src="" /></div>
        <div class="cart mouse_cursor">
          <span class="cart_items">56</span>
          <img src="../assets/icons/shopping-cart.png" />
        </div>
      </div>
    </nav>
</template>

<script>
import SearchBar from "./base/SearchBar.vue";
import SideMenu from "./SideMenu.vue";
export default {
  components: { SearchBar, SideMenu },
  props: {
    navType: {
      type: String,
      default: "large",
    },
    isScrolled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isSideMenu: false,
    };
  },
  computed: {
    isLarge() {
      if (this.navType.toLowerCase() === "small") return false;
      else return true;
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../styles/navbar
</style>