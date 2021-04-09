<template>
  <div class="search_bar">
    <span class="search_icon"><img :src="searchIcon" /></span>
    <input
      @focus="searchIconChanger"
      @blur="searchIconChanger"
      type="text"
      class="search_text"
      placeholder="Search for products"
    />
    <span class="filter_icon mouse_cursor"
      ><img :src="filterIcon" @click="filterIconChanger"
    /></span>
  </div>
</template>

<script>
import searchIcon from "../assets/icons/search.svg";
import searchIconBlue from "../assets/icons/search_blue.svg";

import filterIcon from "../assets/icons/sliders.svg";
import filterIconBlue from "../assets/icons/sliders_blue.svg";

export default {
  data() {
    return {
      isSearchFocused: false,
      isFilterFocused: false,
    };
  },
  computed: {
    searchIcon() {
      if (this.isSearchFocused) return searchIconBlue;
      else return searchIcon;
    },
    filterIcon() {
      if (this.isFilterFocused) return filterIconBlue;
      else return filterIcon;
    },
  },
  methods: {
    searchIconChanger() {
      this.isSearchFocused = !this.isSearchFocused;
    },
    filterIconChanger() {
      this.isFilterFocused = !this.isFilterFocused;
    },
  },
};
</script>

<style lang="sass" scoped>
.search_bar
    display: inline-flex
    place-self: center
    border-radius: 20px
    height: 30px
    background: #ffffff
    padding: 5px 10px
    box-shadow: 0 0 4px 0px rgba( 0, 0, 0, 0.1)
    .search_icon, .filter_icon, .search_text
        align-items: center
        align-self: center
        align-content: center
        display: flex
        img
            width: 20px
            opacity: 0.8
    .search_icon
    .search_text
        border: none
        margin: 0 5px 0 5px
        width: 500px
        outline: none
        height: 20px
        caret-color: #2196f3
        font-size: 15px
    .filter_icon

@media (min-width: 1063px)
    .search_bar
        .search_text
            width: 500px
@media (min-width: 948px) and (max-width: 1062px)
    .search_bar
        .search_text
            width: 400px
@media (min-width: 0px) and (max-width: 947px)
    .search_bar
        .search_text
            width: 250px
</style>