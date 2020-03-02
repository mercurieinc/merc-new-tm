import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: null,
    position: null,
    choice: 2,
    day: null
  },
  getters: {
    name(state, name) {
      return state.name;
    },
    position(state, position) {
      return state.position;
    },
    day(state, day) {
      return state.day;
    },
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setPosition(state, position) {
      state.position = position;
    },
    setChoice(state, choice) {
      state.choice = choice;
    },
    setDay(state, day) {
      state.day = day;
    },
  },
  actions: {
  },
  modules: {
  }
})
