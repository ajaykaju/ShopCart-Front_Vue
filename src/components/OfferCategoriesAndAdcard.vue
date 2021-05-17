<template>
  <div class="wrapper">
    <div class="offer_wrapper">
      <div class="top_of_wrapper">
        <div class="offers_title">Exclusive Offers</div>
        <div class="more">
          Explore More
          <img draggable="false" src="../assets/icons/right-arrow-double.svg" />
        </div>
      </div>
      <div class="topCategories">
        <div class="offerItems">
          <div class="offerItem" v-for="i in 50" :key="i">
            <img
              src="https://www.androidpolice.com/wp-content/uploads/2020/06/05/TCL-Android-TV.png"
            />
            <div class="titleAndOffer">
              <div class="title">Android Televisions</div>
              <div class="offer">Min 30% off</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="adCards">
      <img :src="require(`../assets/images/${adCardImage}`)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      presentWidth: 0,
      adCardImages: {
        medium: "adrightcard_medium.png",
        small: "adrightcard_small.png",
      },
    };
  },
  computed: {
    adCardImage() {
      if (this.presentWidth < 770) return this.adCardImages.small;
      else return this.adCardImages.medium;
    },
  },
  methods: {
    widthCalculator() {
      this.presentWidth = window.innerWidth;
    },
  },
  mounted() {
    this.presentWidth = window.innerWidth;
    window.addEventListener("resize", this.widthCalculator);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.widthCalculator);
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  display: grid
  .offer_wrapper
    display: grid
    grid-template-rows: 1fr auto
    width: 100%
    .top_of_wrapper
      display: grid
      grid-auto-flow: column
      background: #fff
      padding: 5px 10px
      border-radius: 10px
      margin: 0 0 5px 0
      .offers_title
        width: fit-content
        height: fit-content
        display: grid
        align-self: center
        font-family: 'Roboto-Medium'
      .more
        align-self: center
        justify-self: end
        padding: 10px
        cursor: pointer
        transition: opacity .3s ease-out
        opacity: 0.8
        display: grid
        grid-auto-flow: column
        img
          align-self: center
          margin-left: 1px
        &:hover
          opacity: 1
    .topCategories
      width: 100%
      height: 300px
      border-radius: 10px
      background: #fff
      overflow: hidden
      display: grid
      .offerItems
        display: inline-flex
        flex-flow: row
        flex-wrap: wrap
        justify-content: center
        padding: 10px 0px
        .offerItem
          display: grid
          grid-template-rows: 100px auto
          justify-items: center
          img
            place-self: center
          .titleAndOffer
            display: grid
            grid-template-rows: 1fr 1fr
            .title
              font-family: 'Roboto-Medium'
            .offer
              font-family: 'Roboto-Light'
              color: green
  .adCards
    position: relative
    border-radius: 10px
    display: grid
    overflow: hidden
    img
      position: absolute
      place-self: center

@media (min-width: 936px)
  .wrapper
    .offer_wrapper
      .top_of_wrapper
        .offers_title
          font-size: 22px
        .more
          font-size: 15px
          img
            width: 12px
      .topCategories
        .offerItems
          .offerItem
            width: 180px
            height: 131px
            padding: 5px
            img
              max-width: 150px
              max-height: 100px
            .titleAndOffer
              font-size: 13px
              .title
              .offer
@media (max-width: 936px)
  .wrapper
    .offer_wrapper
      .top_of_wrapper
        .offers_title
          font-size: 18px
        .more
          font-size: 13px
          img
            width: 10px
      .topCategories
        .offerItems
          .offerItem
            width: 130px
            height: 131px
            padding: 5px
            img
              max-width: 120px
              max-height: 100px
            .titleAndOffer
              font-size: 12px
              .title
              .offer

@media (min-width: 769px)
  .wrapper
    grid-template-columns: auto auto
    .adCards
      width: 300px
      height: 354px
      margin-left: 5px
@media (max-width: 769px)
  .wrapper
    grid-template-rows: auto auto
    .adCards
      width: 100%
      height: 200px
      margin-top: 5px
</style>>
