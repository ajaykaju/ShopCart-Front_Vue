<template>
  <categories-bar></categories-bar>
  <image-carousel></image-carousel>
  <products-large-cards></products-large-cards>
  <ad-banner-min></ad-banner-min>
  <ad-cards></ad-cards>
  <products-small-card></products-small-card>
  <ad-banner-min></ad-banner-min>
</template>

<script>
import AdBannerMin from "../components/AdBannerMin.vue";
import AdCards from "../components/AdCards.vue";
import CategoriesBar from "../components/CategoriesBar.vue";
import ImageCarousel from "../components/ImageCarousel.vue";
import ProductsLargeCards from "../components/ProductsLargeCards.vue";
import ProductsSmallCard from "../components/ProductsSmallCard.vue";
export default {
  components: {
    ImageCarousel,
    ProductsLargeCards,
    AdBannerMin,
    AdCards,
    ProductsSmallCard,
    CategoriesBar,
  },
};
</script>