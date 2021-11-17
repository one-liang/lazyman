import { createStore } from 'vuex';

export default createStore({
  state: {
    test: 1,
  },
  getters: {
    getTest(state) {
      return state.test + 1;
    },
  },
  mutations: {
    ADD_TEST(state, payload) {
      state.test += payload;
    },
  },
  actions: {
    asyncTest({ commit }, payload) {
      setTimeout(() => {
        commit('ADD_TEST', payload);
      }, 1000);
    },
  },
});
