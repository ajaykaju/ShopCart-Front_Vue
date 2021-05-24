<template>
  <div class="category_bar">
    <div class="categories">
      <div class="item mouse_cursor" v-for="item in items" :key="item">
        <img v-if="item.image" :src="item.image" draggable="false" />
        <img
          draggable="false"
          v-else
          src="https://i.pinimg.com/originals/20/04/a8/2004a85062138d1ed8908a5c1fe4cd04.png"
        />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
    <div class="more">
      <img draggable="false" src="../assets/icons/right-arrow-double.svg" />
    </div>
  </div>
</template>

<script>
import itemData from "../components/categories.json";

export default {
  data() {
    return {
      items: itemData.items,
    };
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/categories'
</style>