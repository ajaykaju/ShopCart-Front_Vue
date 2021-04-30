<template>
  <div class="side_menu_background">
    <transition name="sideMenu">
      <div class="side_menu" v-show="decider">
        <div class="menu_top">
          <div class="button_and_logo">
            <div class="menu_button mouse_cursor" @click="menuDecider">
              <img src="../assets/icons/menu-01.png" />
            </div>
            <div class="logo mouse_cursor">ShopCart<img src="" /></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="outSpace">
      <div v-show="decider" class="outerSpace"></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    decider: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  watch: {
    decider(val) {
      if (val === true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    },
  },
  methods: {
    menuDecider() {
      this.$emit("decider");
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../styles/sidemenu
</style>
