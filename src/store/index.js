import { createStore } from "vuex";

import productList from "../assets/dummyData/productList.json";
import categoryList from "../assets/dummyData/categories.json";

import signupModule from "./signup";

export default createStore({
  modules: {
    signup: signupModule,
  },
  state() {
    return {
      showMoreCateogories: false,
      isSideMenu: false,
      products: productList.products,
      categories: categoryList.items,

      isAnotherPage: false,
    };
  },
  mutations: {
    showMoreCateogoriesChanger(state) {
      state.showMoreCateogories = !state.showMoreCateogories;
    },
    isSideMenuChanger(state) {
      state.isSideMenu = !state.isSideMenu;
    },
  },
  actions: {
    showMoreCateogoriesChanger(context) {
      context.commit({ type: "showMoreCateogoriesChanger" });
    },
    isSideMenuChanger(context) {
      context.commit({ type: "isSideMenuChanger" });
    },
  },
  getters: {
    showMoreCateogories(state) {
      return state.showMoreCateogories;
    },
    isSideMenu(state) {
      return state.isSideMenu;
    },
    products(state) {
      return state.products;
    },
    categories(state) {
      return state.categories;
    },
  },
});
