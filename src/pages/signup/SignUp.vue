<template>
  <div class="signupBackground">
    <div class="signupContainer">
      <div class="formandImage">
        <div class="signupImage topImage">
          <img src="../../assets/images/signupimage.jpg" />
        </div>
        <div class="formContainer">
          <form @submit.prevent="formSubmitter">
            <!-- APP TITLE -->
            <h2>ShopCart</h2>
            <div>
              <router-view v-slot="{ Component }">
                <transition name="signupslide" mode="out-in">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>
          </form>
        </div>
        <div class="signupImage rightImage">
          <img src="../../assets/images/signupimage.jpg" />
        </div>
      </div>

      <div class="signupFooter">
        <div class="links">
          <li>Home</li>
          <li>Privacy policy</li>
          <li>Help</li>
        </div>
        <div class="credits">© 2021-2022, ShopCart, Inc. or its affiliates</div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../../styles/signup/signup'
</style>