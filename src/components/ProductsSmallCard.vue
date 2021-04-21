<template>
<div class="products_scroll">
  <div class="products_title">Top Selection</div>
  <div class="product_small_scroll">
    <div class="pCardSmallControl_Left" @click="left_scroll">
      <img src="../assets/icons/left-chevron.svg" />
    </div>
    <div class="pCardSmallControl_Right" @click="right_scroll">
      <img src="../assets/icons/right-chevron.svg" />
    </div>
    <div class="product_container" ref="scrollContainer">
      <div class="productCardSmall" v-for="i in 10" :key="i">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71FMlrA8TiL._SL1500_.jpg">
        <div class="card_title">AFROJACK Men's Airsocks Explorer Running Shoes (Black)</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      products: [{}],
    };
  },
  methods: {
    left_scroll() {
      this.$refs.scrollContainer.scrollLeft -= 150;
    },
    right_scroll() {
      this.$refs.scrollContainer.scrollLeft += 150;
    },
  },
};
</script>

<style lang="sass" scoped>
.products_scroll
  display: grid
  grid-template-rows: 1fr auto
  .products_title
    font-size: 22px
    padding: 0 0 10px 0
  .product_small_scroll
    position: relative
    overflow: hidden
    .pCardSmallControl_Left, .pCardSmallControl_Right
      position: absolute
      background: rgba(0, 0, 0, 0.1)
      height: 100%
      width: 3%
      img
        width: 25px
        place-self: center
      &:hover
        background: rgba(0, 0, 0, 0.3)
    .pCardSmallControl_Left
      left: 0
    .pCardSmallControl_Right
      right: 0px
    .product_container
      gap: 0 8px
      display: flex
      width: 100%
      overflow: clip
      overflow-x: auto
      &::-webkit-scrollbar
        width: 0px
        height: 0px
      .productCardSmall
        border-radius: 8px
        min-width: 150px
        max-width: 150px
        height: 150px
        background: #ffffff
        box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.1)
        display: grid
        padding: 10px
        img
          width: 100px
          justify-self: center
        .card_title
          font-size: 12px
          justify-self: center
          text-align: left

@media (min-width: 733px)
  .products_scroll
    .pCardSmallControl_Left, .pCardSmallControl_Right
      display: grid
@media (max-width: 732px)
  .products_scroll
    .pCardSmallControl_Left, .pCardSmallControl_Right
      display: none
</style>