<template>
  <div class="products_scroll">
    <div class="products_title">Deals of the Day</div>
    <div class="product_large_scroll">
      <div class="pCardLargeControl_Left" @click="left_scroll">
        <img src="../assets/icons/left-chevron.svg" />
      </div>
      <div class="pCardLargeControl_Right" @click="right_scroll">
        <img src="../assets/icons/right-chevron.svg" />
      </div>
      <div class="product_container" ref="scrollContainer">
        <div class="productCardLarge" v-for="i in 10" :key="i">
          <img src="https://m.media-amazon.com/images/I/41Leu3gBUFL.jpg" />
          <div class="card_title">
            AFROJACK Men's Airsocks Explorer Running Shoes (Black)
          </div>
          <div class="card_description">
            This premium sockliner features higher rebound properties while
            providing excellent
          </div>
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
      this.$refs.scrollContainer.scrollLeft -= 200;
    },
    right_scroll() {
      this.$refs.scrollContainer.scrollLeft += 200;
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
  .product_large_scroll
    position: relative
    overflow: hidden
    .pCardLargeControl_Left, .pCardLargeControl_Right
      position: absolute
      background: rgba(0, 0, 0, 0.1)
      height: 100%
      width: 3%
      img
        width: 25px
        place-self: center
      &:hover
        background: rgba(0, 0, 0, 0.3)
    .pCardLargeControl_Left
      left: 0
    .pCardLargeControl_Right
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
      .productCardLarge
        border-radius: 8px
        min-width: 200px
        max-width: 200px
        height: 300px
        background: #ffffff
        box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.1)
        display: grid
        padding: 10px
        img
          width: 180px
          justify-self: center
        .card_title
          font-size: 15px
          justify-self: center
          text-align: left
        .card_description
          font-size: 11px

@media (min-width: 733px)
  .products_scroll
    .pCardLargeControl_Left, .pCardLargeControl_Right
      display: grid
@media (max-width: 732px)
  .products_scroll
    .pCardLargeControl_Left, .pCardLargeControl_Right
      display: none
</style>

