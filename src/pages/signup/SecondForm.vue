<template>
  <div class="inputPage">
    <div class="headline">
      Discover the different, Feel the path of infinity!
    </div>
    <div class="description">
      We providing non ending collection of products filled with quality and
      happiness.
    </div>

    <div class="inputField">
      <label for="dob">Date of birth</label>
      <div class="inputWrap" :class="dobClass">
        <input
          autocomplete="nope"
          type="text"
          placeholder="YYYY-MM-DD"
          maxlength="10"
          class="inputText"
          v-model="dob_loc"
          id="dob"
          name="dob"
          @focus="normalToActive"
          @blur="validation"
          @input="inputingvalidation"
        />
        <transition name="tick-anim">
          <span class="validIcon" v-show="dobValid">
            <img src="../../assets/icons/tick.svg" />
          </span>
        </transition>
      </div>
    </div>

    <div class="inputField">
      <label for="phoneNumber">Phone number</label>
      <div class="inputWrap" :class="phoneNumberClass">
        <input
          autocomplete="nope"
          type="text"
          placeholder="Phone number"
          class="inputText"
          v-model="phoneNumber_loc"
          id="phoneNumber"
          name="phoneNumber"
          maxlength="15"
          @focus="normalToActive"
          @blur="validation"
          @input="inputingvalidation"
        />
        <transition name="tick-anim">
          <span class="validIcon" v-show="phoneNumberValid">
            <img src="../../assets/icons/tick.svg" />
          </span>
        </transition>
      </div>
    </div>

    <div class="inputField">
      <label for="password">Password</label>
      <div class="inputWrap" :class="passwordClass">
        <input
          autocomplete="nope"
          type="password"
          placeholder="Password"
          class="inputText"
          v-model="password_loc"
          id="password"
          name="password"
          @focus="normalToActive"
          @blur="validation"
          @input="inputingvalidation"
        />
        <transition name="tick-anim">
          <span class="validIcon" v-show="passwordValid">
            <img src="../../assets/icons/tick.svg" />
          </span>
        </transition>
      </div>
    </div>

    <button type="submit" @click="$router.replace({ name: 'cf' })">
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
  beforeCreate() {
    history.replaceState({ urlPath: "/signup" }, "", "/signup");
  },
  computed: {
    dob_loc: {
      get() {
        return this.dob;
      },
      set(value) {
        this.dobChanger({ dob: value });
      },
    },
    phoneNumber_loc: {
      get() {
        return this.phoneNumber;
      },
      set(value) {
        this.phoneNumberChanger({ phoneNumber: value });
      },
    },
    password_loc: {
      get() {
        return this.password;
      },
      set(value) {
        this.passwordChanger({ password: value });
      },
    },
    ...mapGetters("signup", [
      "dob",
      "phoneNumber",
      "password",
      "dobClass",
      "phoneNumberClass",
      "passwordClass",
      "dobValid",
      "phoneNumberValid",
      "passwordValid",
    ]),
  },

  methods: {
    ...mapActions("signup", [
      "dobChanger",
      "phoneNumberChanger",
      "passwordChanger",
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
