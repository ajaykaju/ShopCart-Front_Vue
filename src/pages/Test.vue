<template>
  <div class="container">
    <form>
      <h2>SignUp</h2>
      <div class="inputer">
        <div class="scroller">
          <div class="p p1">
            <label>Name</label>
            <input type="text" />
            <button @click="next">Next</button>
          </div>
          <div class="p p2">
            <label>Contact</label>
            <input type="text" />
            <button @click="prev">Previous</button>
          </div>
        </div>
      </div>
      <div class="bottom"></div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    next(e){
      e.preventDefault();
      const el = document.querySelector('.p1');
      el.style.marginLeft = "-100%"
    },
    prev(e){
      e.preventDefault();
      const el = document.querySelector('.p1');
      el.style.marginLeft = "0%"
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  background: #e6e4cc
  display: grid
  form
    justify-self: center
    width: 40%
    background: white
    display: grid
    grid-template-rows: 1fr 6fr 1fr
    h2
      justify-self: center
    .bottom
      background: red
    .inputer
      background: green
      width: 100%
      overflow: hidden
      display: flex
      .scroller
        width: 200%
        display: flex
        .p
          width: 100%
          display: grid
          input, label
            margin: 10px
</style>