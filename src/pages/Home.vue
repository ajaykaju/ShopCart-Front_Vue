<template>
  <categories-bar></categories-bar>
  <image-carousel></image-carousel>
  <products-large-cards></products-large-cards>
  <ad-banner-min :images="adbanner1"></ad-banner-min>
  <offer-categories-and-adcard></offer-categories-and-adcard>
  <ad-banner-min :images="adbanner2"></ad-banner-min>
  <products-small-card></products-small-card>
</template>

<script>
import AdBannerMin from "../components/AdBannerMin.vue";
import CategoriesBar from "../components/CategoriesBar.vue";
import ImageCarousel from "../components/ImageCarousel.vue";
import OfferCategoriesAndAdcard from "../components/OfferCategoriesAndAdcard.vue";
import ProductsLargeCards from "../components/ProductsLargeCards.vue";
import ProductsSmallCard from "../components/ProductsSmallCard.vue";
export default {
  components: {
    ImageCarousel,
    ProductsLargeCards,
    AdBannerMin,
    ProductsSmallCard,
    CategoriesBar,
    OfferCategoriesAndAdcard,
  },
  data() {
    return {
      adbanner1: {
        large: `adbanner1_large.png`,
        medium: `adbanner1_medium.png`,
        small: `adbanner1_small.png`,
      },
      adbanner2: {
        large: `adbanner2_large.png`,
        medium: `adbanner2_medium.png`,
        small: `adbanner2_small.png`,
      },
    };
  },
};
</script>