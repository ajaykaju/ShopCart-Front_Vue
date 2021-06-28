export default {
  fnameChanger(state, payload) {
    state.fname = payload.fname;
  },
  lnameChanger(state, payload) {
    state.lname = payload.lname;
  },
  emailChanger(state, payload) {
    state.email = payload.email;
  },
  dobChanger(state, payload) {
    state.dob = payload.dob;
  },
  phoneNumberChanger(state, payload) {
    state.phoneNumber = payload.phoneNumber;
  },
};
