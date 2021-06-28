export default {
  fnameChanger(context, payload) {
    context.commit("fnameChanger", payload);
  },
  lnameChanger(context, payload) {
    context.commit("lnameChanger", payload);
  },
  emailChanger(context, payload) {
    context.commit("emailChanger", payload);
  },
  dobChanger(context, payload) {
    context.commit("dobChanger", payload);
  },
  phoneNumberChanger(context, payload) {
    context.commit("phoneNumberChanger", payload);
  },
};
