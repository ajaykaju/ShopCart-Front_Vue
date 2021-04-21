<template>
  <div class="category_bar">
    <div class="categories">
      <div class="item" v-for="item in items" :key="item">
        <img
          src="https://i.pinimg.com/originals/20/04/a8/2004a85062138d1ed8908a5c1fe4cd04.png"
        />
        <div class="title">{{ item }}</div>
      </div>
    </div>
    <div class="more"><img src="../assets/icons/right-arrow-double.svg" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Mobiles",
        "Fashion",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Home",
        "Homea",
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.category_bar
  display: grid
  grid-template-columns: auto 1fr
  background: #ffffff
  border-radius: 8px
  padding: 5px
  .categories
    display: flex
    overflow: hidden
    flex-direction: row
    flex-wrap: wrap
    height: 56px
    justify-content: center
    .item
      display: grid
      grid-template-rows: 2fr 1fr
      width: fit-content
      img
        width: 40px
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
    display: grid
    img
      width: 25px
      place-self: center
    &:hover
      img
        width: 28px
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