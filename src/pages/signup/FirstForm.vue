<template>
  <div class="inputPage">
    <div class="headline">
      Sign Up For Your Shopping Journey with ShopCart!</div>
    <div class="description">
      See how ShopCart can help improve your life with quality products and
      offers!.
    </div>

    <div class="inputField">
      <label for="fname">First name</label>
      <div class="inputWrap" :class="fnameClass">
        <input
          autocomplete="nope"
          type="text"
          placeholder="First name"
          minlength="3"
          maxlength="21"
          class="inputText"
          v-model="fname_loc"
          id="fname"
          name="fname"
          @focus="normalToActive"
          @blur="validation"
          @input="inputingvalidation"
        />
        <transition name="tick-anim">
          <span class="validIcon" v-show="fnameValid">
            <img src="../../assets/icons/tick.svg" />
          </span>
        </transition>
      </div>
    </div>

    <div class="inputField">
      <label for="lname">Last name</label>
      <div class="inputWrap" :class="lnameClass">
        <input
          autocomplete="nope"
          type="text"
          placeholder="Last name"
          class="inputText"
          v-model="lname_loc"
          id="lname"
          name="lname"
          minlength="1"
          maxlength="21"
          @focus="normalToActive"
          @blur="validation"
          @input="inputingvalidation"
        />
        <transition name="tick-anim">
          <span class="validIcon" v-show="lnameValid">
            <img src="../../assets/icons/tick.svg" />
          </span>
        </transition>
      </div>
    </div>

    <div class="inputField">
      <label for="email">Email address</label>
      <div class="inputWrap" :class="emailClass">
        <input
          autocomplete="nope"
          type="email"
          placeholder="Email address"
          class="inputText"
          v-model="email_loc"
          id="email"
          name="email"
          @focus="normalToActive"
          @blur="validation"
          @input="inputingvalidation"
        />
        <transition name="tick-anim">
          <span class="validIcon" v-show="emailValid">
            <img src="../../assets/icons/tick.svg" />
          </span>
        </transition>
      </div>
    </div>

    <button type="submit" @click="$router.replace({ name: 'f2' })">
      Continue
    </button>

    <div class="errorAndDots">
      <div class="error" v-show="error">
        An error occured. Please try again later
      </div>
      <div
        class="formDots"
        :class="error ? 'formDotsIfError' : 'formDotsAlone'"
      >
        <div class="formDot" id="1"></div>
        <div class="formDot" id="2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      error: true,
    };
  },
  computed: {
    fname_loc: {
      get() {
        return this.fname;
      },
      set(value) {
        this.fnameChanger({ fname: value });
      },
    },
    lname_loc: {
      get() {
        return this.lname;
      },
      set(value) {
        this.lnameChanger({ lname: value });
      },
    },
    email_loc: {
      get() {
        return this.email;
      },
      set(value) {
        this.emailChanger({ email: value });
      },
    },
    ...mapGetters("signup", [
      "fname",
      "lname",
      "email",
      "fnameClass",
      "lnameClass",
      "emailClass",
      "fnameValid",
      "lnameValid",
      "emailValid",
    ]),
  },

  methods: {
    ...mapActions("signup", [
      "fnameChanger",
      "lnameChanger",
      "emailChanger",
      "fnameClassChanger",
      "lnameClassChanger",
      "emailClassChanger",
      "fnameValidChanger",
      "lnameValidChanger",
      "emailValidChanger",
      "normalToActive",
      "validation",
      "inputingvalidation",
    ]),
  },
};
</script>

<style lang="sass" scoped>
@import '../../styles/signup/forms'
</style>
