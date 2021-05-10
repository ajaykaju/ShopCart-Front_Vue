<template>
  <div class="slider">
    <div class="slider_main" v-for="i in 3" :key="i">
      <img :src="require(`../assets/images/slide${i}_medium.png`)" />
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="sass" scoped>
.slider
    display: grid
    grid-auto-flow: column
    grid-template-columns: 1fr
    overflow: visible
    .slider_main
        height: 250px
        overflow: hidden
        width: 100%
        border-radius: 10px
        position: relative
        display: grid
        img
            position: absolute
            place-self: center
            border-radius: 10px
</style>