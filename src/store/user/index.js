import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      fname: "",
      lname: "",
      email: "",
      phoneNumber: "",
      dob: "",
    };
  },
  mutations,
  actions,
  getters,
};
