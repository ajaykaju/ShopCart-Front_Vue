<template>
  <div class="products_scroll">
    <div class="top_of_scroll">
      <div class="products_title">Deals of the Day</div>
      <div class="more">
        View All
        <img draggable="false" src="../assets/icons/right-arrow-double.svg" />
      </div>
    </div>
    <div class="product_large_scroll">
      <div class="pCardLargeControl_Left" @click="left_scroll">
        <img src="../assets/icons/left-chevron.svg" />
      </div>
      <div class="animation_wrapper">
        <div
          class="product_container"
          :class="[
            isEndOfScrollLeft ? 'leftScrollOverAnim' : '',
            isEndOfScrollRight ? 'rightScrollOverAnim' : '',
          ]"
          ref="scrollContainer"
        >
          <div class="productCardLarge" v-for="i in 10" :key="i">
            <div class="rate_and_count">
              <div class="rating">1.8</div>
              <div class="count">(35)</div>
            </div>
            <div class="fav">
              <img class="favtag" src="../assets/icons/tag.svg" />
              <div class="favcontent">
                <img src="../assets/icons/add-to-fav.svg" />
              </div>
            </div>
            <div class="pImageContainer">
              <img src="https://m.media-amazon.com/images/I/41Leu3gBUFL.jpg" />
            </div>
            <div class="card_title">
              AFROJACK Men's Airsocks Explorer Running Shoes (Black)
            </div>
            <div class="card_description">
              This premium sockliner features higher rebound properties while
              providing excellent
            </div>
            <div class="card_bottom">
              <div class="price">$3500</div>
              <div class="offer">$4000</div>
              <div class="addToCart">
                <img src="../assets/icons/shopping-cart-white.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pCardLargeControl_Right" @click="right_scroll">
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
      isEndOfScrollLeft: false,
      isEndOfScrollRight: false,
      lastScrollPosition: 0,
    };
  },
  methods: {
    left_scroll() {
      let scrollContainer = this.$refs.scrollContainer;

      scrollContainer.scrollLeft -= 400;
      if (scrollContainer.scrollLeft === 0) this.scrollEvent();
    },
    right_scroll() {
      let scrollContainer = this.$refs.scrollContainer;
      scrollContainer.scrollLeft += 400;
      if (
        scrollContainer.scrollLeft ===
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      )
        this.scrollEvent();
    },
    scrollEvent() {
      let scrollContainer = this.$refs.scrollContainer;
      let maxScrollWidth =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft === 0) {
        this.isEndOfScrollLeft = true;
        setTimeout(() => {
          this.isEndOfScrollLeft = false;
        }, 1000);
      }
      if (scrollContainer.scrollLeft === maxScrollWidth) {
        this.isEndOfScrollRight = true;
        setTimeout(() => {
          this.isEndOfScrollRight = false;
        }, 1000);
      }
    },
  },
  mounted() {
    this.$refs.scrollContainer.addEventListener("scroll", this.scrollEvent);
  },
  beforeUnmount() {
    removeEventListener("scroll", this.scrollEvent);
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/productsCardLarge'
</style>

