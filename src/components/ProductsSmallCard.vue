<template>
  <div class="products_scroll">
    <div class="top_of_scroll">
      <div class="products_title">Top Selection</div>
      <div class="more">
        View All
        <img draggable="false" src="../assets/icons/right-arrow-double.svg" />
      </div>
    </div>
    <div class="products_and_control_wrapper">
      <div class="pCardSmallControl_Left" @click="left_scroll">
        <img src="../assets/icons/left-chevron.svg" />
      </div>
      <div class="product_small_scroll">
        <div class="product_container" ref="scrollContainer">
          <div class="productCardSmall" v-for="i in 10" :key="i">
            <div class="rate_and_count">
              <div class="rating">4.8</div>
              <div class="count">(35)</div>
            </div>
            <div class="fav">
              <img class="favtag" src="../assets/icons/tag.svg" />
              <div class="favcontent">
                <img src="../assets/icons/add-to-fav.svg" />
              </div>
            </div>
            <div class="card_content">
              <img
                src="https://rukminim1.flixcart.com/image/150/150/ko62xzk0/plant-seed/4/k/y/2050-f-40-aero-seeds-original-imag2zjznggbyzxd.jpeg?q=70"
              />
              <div class="card_title">
                AFROJACK Men's Airsocks Explorer Running Shoes
              </div>
            </div>
            <div class="card_bottom">
              <div class="price">$800</div>
              <div class="offer">$1000</div>
              <div class="addToCart">
                <img src="../assets/icons/shopping-cart-white.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pCardSmallControl_Right" @click="right_scroll">
        <img src="../assets/icons/right-chevron.svg" />
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
@import '../styles/productsSmallCards'
</style>