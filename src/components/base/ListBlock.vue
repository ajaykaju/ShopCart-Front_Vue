<template>
  <div class="block">
    <div class="title">
      <div class="text">{{title}}</div>
      <img v-if="icon != ''" :src="require(`../../assets/icons/${icon}`)" />
    </div>
    <div class="lists">
      <transition-group :name="!isAnimated ? '' : 'listSlide'" tag="div">
        <div
          class="item"
          v-for="(item, index) in itemsForList"
          :key="index"
          @click="item.more ? itemOpenDecider(item) : null"
        >
          <div class="item_title">{{ item.title }}</div>
          <img
            v-if="item.more"
            src="../../assets/icons/right-chevron-black.svg"
          />
          <span v-else></span>
        </div>
      </transition-group>
      <div
        class="show"
        @click="menuItemShower"
        v-show="items.length > 7 && listLimitNeeded"
        id="shower"
      >
        <div>{{ showButtonText }}</div>
        <img
          :style="{ transform: showImageTransform }"
          src="../../assets/icons/right-chevron-black.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      default: function () {
        return {};
      },
    },
    listLimit: {
      type: Number,
      default: 7,
    },
    listLimitNeeded: {
      type: Boolean,
      default: false
    },
    isAnimated: {
      type: Boolean,
      default: false,
    },
    title: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    }
  },
  data() {
    return {
      menuItemLimit: null,
      expand: true,
      menuItemOpen: false,
    };
  },
  computed: {
    itemsForList() {
      if (this.items.length > 7 && this.listLimitNeeded) {
        return this.items.slice(0, this.menuItemLimit);
      } else return this.items;
    },
    showButtonText() {
      if (this.menuItemLimit < this.items.length && this.expand)
        return "Show More";
      else return "Show Less";
    },
    showImageTransform() {
      if (this.menuItemLimit < this.items.length && this.expand)
        return "rotate(90deg)";
      else return "rotate(-90deg)";
    },
    iconImage(){
        console.log(this.icon)
        return this.icon
    }
  },
  methods: {
    itemOpenDecider(itemContents) {
      this.$emit("menuItemClick", itemContents);
    },
    menuItemShower() {
      let itemsLength = this.items.length;

      if (this.menuItemLimit < itemsLength) {
        if (this.expand) this.menuItemLimit += this.listLimit;
        else this.menuItemLimit -= this.listLimit;
        if (this.menuItemLimit === this.listLimit) this.expand = !this.expand;
      } else {
        this.menuItemLimit -= this.listLimit;
        this.expand = !this.expand;
      }
    },
  },
  mounted() {
    this.menuItemLimit = this.listLimit;
  },
};
</script>

<style lang="sass" scoped>
.block
    display: grid
    grid-auto-flow: row
    .title
        font-size: 20px
        font-family: "Roboto-Medium"
        display: inline-flex
        gap: 0px 5px
        img
            width: 25px
        .text
    .lists
        display: grid
        grid-auto-flow: row
        .show, .item
            padding: 10px 0px 10px 20px
            cursor: pointer
            margin-top: 1px
        .show
            justify-self: end
            font-size: 13px
            display: inline-flex
            img
                width: 12px
                align-self: center
                padding: 2px
        .item
            font-size: 15px
            display: grid
            grid-template-columns: auto 1fr
            img
                width: 15px
                justify-self: end
                align-self: center
            &:hover
                background: rgba(36, 36, 36, 0.1)

.listSlide-enter-active
    animation: listAnimEnter 1s ease-out

.listSlide-leave-active
    animation: listAnimLeave 1s ease-out

@keyframes listAnimEnter
    0%
        opacity: 0
        transform: translateY(-2px)
    100%
        opacity: 1
        transform: translateY(0px)
@keyframes listAnimLeave
    0%
        opacity: 1
        transform: translateX(0px)
    100%
        opacity: 0
        transform: translateX(120px)
</style>