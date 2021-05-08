<template>
  <div class="side_menu_background">
    <transition name="sideMenu">
      <div class="side_menu" v-show="decider">
        <div class="menu_top" :class="isScrolled? 'menuTopScroll' : 'menuTopNormal'">
          <div class="button_and_logo">
            <div class="menu_button mouse_cursor" @click="menuDecider">
              <img src="../assets/icons/menu-01.png" />
            </div>
            <div class="logo mouse_cursor">ShopCart<img src="" /></div>
          </div>
        </div>
        <div class="menu_profile mouse_cursor">
          <div class="circular">
            <div class="avatar"></div>
            <div :class="{ circle: decider }">
              <div class="bar left">
                <div class="progress"></div>
              </div>
              <div class="bar right">
                <div class="progress"></div>
              </div>
            </div>
          </div>
          <div :class="{ user: true, userFocus: decider }">
            <span>Hello</span>
            <div>Abhinandan</div>
          </div>
        </div>
        <transition name="slideNormal">
          <div class="menu_contents" v-if="!menuItemOpen">
            <list-block
              title="Trending"
              icon="trending-topic.svg"
              :items="trending"
              @menuItemClick="itemOpenDecider"
            ></list-block>
            <hr />
            <list-block
              title="Shop By Categories"
              icon="shopping-list.svg"
              :items="items"
              @menuItemClick="itemOpenDecider"
              :isAnimated="true"
              :listLimitNeeded="true"
            ></list-block>
            <hr />
            <list-block
              title="Help &amp; Settings"
              icon="settings-help.svg"
              :items="helpAndSettings"
              @menuItemClick="itemOpenDecider"
            ></list-block>
          </div>
          <div class="menu_contents" v-else>
            <div class="item_top" @click="itemOpenDecider(null)">
              Back<img src="../assets/icons/left-back-black.svg" />
            </div>
            <list-block
              :title="itemContents.title"
              :items="itemContents.more"
            ></list-block>
          </div>
        </transition>
      </div>
    </transition>
    <transition name="outSpace" @click="menuDecider">
      <div v-show="decider" class="outerSpace"></div>
    </transition>
  </div>
</template>

<script>
import itemsData from "../components/categories.json";
import ListBlock from "./base/ListBlock.vue";

export default {
  components: { ListBlock },
  props: {
    decider: {
      type: Boolean,
      default: false,
    },
    isScrolled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuItemOpen: false,
      itemContents: null,
      trending: [
        { title: "Best Sellers" },
        { title: "Top Offers" },
        { title: "New Releases" },
      ],
      helpAndSettings: [
        { title: "Your Account" },
        { title: "Customer Service" },
        { title: "Sign Out" },
      ],
    };
  },
  computed: {
    items() {
      let items = itemsData.items.filter(
        (item) => item.title.toLowerCase().includes("offer") === false
      );
      return items;
    },
  },
  watch: {
    decider(val) {
      if (val === true) {
        document.body.style.overflow = "hidden";
        window.addEventListener("keyup", this.escapeMenuCloser);
      } else {
        document.body.style.overflow = "visible";
        window.removeEventListener("keyup", this.escapeMenuCloser);
        if (this.menuItemOpen) this.menuItemOpen = !this.menuItemOpen;
      }
    },
  },
  methods: {
    menuDecider() {
      this.$emit("decider");
    },
    escapeMenuCloser(e) {
      if (e.key === "Escape") {
        if (this.decider === true) this.menuDecider();
      }
    },
    itemOpenDecider(itemContents) {
      this.itemContents = itemContents;
      this.menuItemOpen = !this.menuItemOpen;
    },
  },
};
</script>

<style lang="sass" scoped>
@import ../styles/sidemenu
</style>
