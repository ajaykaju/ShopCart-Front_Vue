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
.category_bar
  display: grid
  background: #ffffff
  border-radius: 8px
  padding: 5px
  user-select: none
  .categories
    display: flex
    overflow: hidden
    flex-direction: row
    flex-wrap: wrap
    height: 70px
    justify-content: center
    .item
      display: grid
      grid-template-rows: 2fr 1fr
      width: fit-content
      img
        width: 50px
        place-self: center
      .title
        font-size: 12px
        place-self: center
        font-weight: bold
  .more
    width: fit-content
    justify-self: right
    border: 0px
    cursor: pointer
    height: 100%
    transition: all 0.1s ease-in-out
    img
      width: 25px
      place-self: center
    &:hover
      transform: scale(1.1,1.1)
@media (min-width: 2175px)
  .category_bar
    grid-template-columns: auto
    .more
      display: none
@media (max-width: 2175px)
  .category_bar
    grid-template-columns: auto 1fr
    .more
      display: grid
@media (min-width: 733px)
  .category_bar
    .categories
      gap: 0 30px
@media (min-width: 440px) and (max-width: 732px)
  .category_bar
    .categories
      gap: 0 20px
@media (max-width: 439px)
  .category_bar
    .categories
      gap: 0 15px
</style>