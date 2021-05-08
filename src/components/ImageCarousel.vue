<template>
  <div class="slider">
    <div class="slider_control_arrows">
      <div class="control_left">
        <img src="../assets/icons/left-arrow.svg" />
      </div>
      <div></div>
      <div class="control_right">
        <img src="../assets/icons/right-arrow.svg" />
      </div>
    </div>
    <div class="slider_control_dots">
      <div
        v-for="(item, index) in images"
        :key="index"
        class="slide_item"
        :class="index === current_index ? 'slide_active' : 'slide_normal'"
      ></div>
    </div>
    <div class="slider_main">
      <img :src="require(`../assets/images/${images[current_index]}`)" />
    </div>
  </div>
</template>


<script>
export default {
  created() {
    setInterval(() => {
      this.slideImageChanger();
    }, 5000);
  },
  data() {
    return {
      current_index: 0,
      images: [`slide1_large.png`],
    };
  },
  methods: {
    slideImageChanger() {
      if (this.current_index === this.images.length - 1) this.current_index = 0;
      else this.current_index++;
    },
  },
};
</script>


<style lang="sass" scoped>
.slider
  margin-top: 20px
  border-radius: 10px
  position: relative
  display: grid
  grid-template-flow: row
  justify-self: center
  max-width: 1688px
  width: 100%
  .slider_main
    height: 250px
    overflow: hidden
    width: 100%
    border-radius: 10px
    display: grid
    position: relative
    img
      position: absolute
      border-radius: 10px
      place-self: center
  .slider_control_arrows
    position: absolute
    width: 100%
    height: 100%
    z-index: 1
  .slider_control_arrows
    grid-template-rows: 1fr
    grid-template-columns: 1fr 7fr 1fr
    .control_right, .control_left
      place-self: center
      padding: 2px
      img
        width: 35px
        z-index: 100
      &:hover
        width: 40px
  .slider_control_dots
    position: absolute
    justify-self: center
    align-self: flex-end
    gap: 0px 2px
    background: rgba(0, 0, 0 ,0.4 )
    border-radius: 5px
    padding: 2px 4px
    bottom: 10px
    z-index: 1
    .slide_item
      width: fit-content
      height: fit-content
      background: rgba(255,255 ,255 , 0.8)
      align-self: flex-end
    .slide_active
      padding: 3px 5px
      border-radius: 5px
    .slide_normal
      padding: 3px
      border-radius: 100%
@media (max-width: 732px)
  .slider
    .slider_control_arrows
      display: none
      .slider_control_dots
        display: inline-flex
@media (min-width: 733px)
  .slider
    .slider_control_arrows
      display: grid
      .slider_control_dots
        display: none

.slider
  .slider_main
    img
      animation: enter 2s forwards 5s forwards

@keyframes enter
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>