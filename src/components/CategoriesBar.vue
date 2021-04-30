<template>
  <div class="category_bar">
    <div class="categories">
      <div class="item" v-for="item in items" :key="item">
        <img v-if="item.image" :src="item.image" />
        <img
          v-else
          src="https://i.pinimg.com/originals/20/04/a8/2004a85062138d1ed8908a5c1fe4cd04.png"
        />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
    <div class="more"><img src="../assets/icons/right-arrow-double.svg" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Top Offers",
          image:
            "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
          url: "#",
        },
        {
          title: "Grocery",
          image:
            "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
          url: "#",
        },
        {
          title: "Mobiles",
          image:
            "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
          url: "#",
        },
        {
          title: "Fashion",
          image:
            "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
          url: "#",
        },
        {
          title: "Electronics",
          image:
            "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
          url: "#",
        },
        {
          title: "Home",
          image:
            "https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",
          url: "#",
        },
        {
          title: "Appliance",
          image:
            "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
          url: "#",
        },
        {
          title: "Travel",
          image:
            "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
          url: "#",
        },
        {
          title: "Beauty",
          image:
            "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
          url: "#",
        },
        {
          title: "Toys",
          image:
            "https://www.ikea.com/ca/en/images/products/kramig-soft-toy-white-black__0162448_PE317642_S5.JPG",
          url: "#",
        },
        {
          title: "For Him",
          image:
            "https://live.staticflickr.com/6178/6140989632_1c8066563d_b.jpg",
          url: "#",
        },
        {
          title: "For Her",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ876XU4pTe5nBCEMQRL3zF5AipAxkrJ6eatUd_JE5JMccJXBfLTSd5ihHTQfjMntHlZME&usqp=CAU",
          url: "#",
        },
        {
          title: "Baby Care",
          image:
            "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
          url: "#",
        },
        {
          title: "Books",
          image:
            "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
          url: "#",
        },
        {
          title: "Music",
          image:
            "https://image.shutterstock.com/image-vector/realistic-vinyl-record-cover-mockup-260nw-727832998.jpg",
          url: "#",
        },
        {
          title: "Plant",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8a1qiqDk5lOHlAYNNfxujyKnwFdg2N9Zo202hXZ21dplCR4mKfyM7LVDJGxCjd1uPvU&usqp=CAU",
          url: "#",
        },
        {
          title: "School",
          image:
            "https://i.pinimg.com/originals/8f/2a/03/8f2a03c8a829a71a8b4f9ec975fc98b6.jpg",
          url: "#",
        },
        {
          title: "Safety",
          image:
            "https://5.imimg.com/data5/NS/CC/MY-2949524/safety-accessoriese-500x500.jpg",
          url: "#",
        },
        {
          title: "Auto Acessories",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqA9PVsKGFl2G6-ASUMUOwpQEJm04Masxcx6XPjOzyAd3Y9jhPWxFsDwm4it3qdwPpDU&usqp=CAU",
          url: "#",
        },
        {
          title: "Interior",
          image:
            "https://www.arch2o.com/wp-content/uploads/2018/09/Arch2O-what-you-need-to-know-before-becoming-an-interior-designer-2.jpg",
          url: "#",
        },
        {
          title: "Movies",
          image:
            "https://www.discoverboating.com/sites/default/files/inline-images/best-boat-movies.png",
          url: "#",
        },
        {
          title: "Health",
          image:
            "https://img.looksgud.com/upload/item-image/2362/1en4v/1en4v-newnik-sphygmomanometer-sp501-yuwell-infrared-thermometer_300x300_0.jpg",
          url: "#",
        },
        {
          title: "Ac's",
          image: "https://m.media-amazon.com/images/I/31h6KLJ0IjL.jpg",
          url: "#",
        },
        {
          title: "Stationary",
          image:
            "https://sc04.alicdn.com/kf/H9d31a4639b85440fb74132b294d57775y.jpg",
          url: "#",
        },
        {
          title: "Gold",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXdtz_FI9inBy-Au7H6YMuM1GEjw58lnUPw&usqp=CAU",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.category_bar
  display: grid
  background: #ffffff
  border-radius: 8px
  padding: 5px
  .categories
    display: flex
    overflow: hidden
    flex-direction: row
    flex-wrap: wrap
    height: 70px
    justify-content: center
    .item
      display: grid
      grid-template-rows: 2fr 1fr
      width: fit-content
      img
        width: 50px
        place-self: center
      .title
        font-size: 12px
        place-self: center
        font-weight: bold
  .more
    width: fit-content
    justify-self: right
    border: 0px
    cursor: pointer
    height: 100%
    img
      width: 25px
      place-self: center
    &:hover
      img
        width: 28px
@media (min-width: 2175px)
  .category_bar
    grid-template-columns: auto
    .more
      display: none
@media (max-width: 2175px)
  .category_bar
    grid-template-columns: auto 1fr
    .more
      display: grid
@media (min-width: 733px)
  .category_bar
    .categories
      gap: 0 30px
@media (min-width: 440px) and (max-width: 732px)
  .category_bar
    .categories
      gap: 0 20px
@media (max-width: 439px)
  .category_bar
    .categories
      gap: 0 15px
</style>