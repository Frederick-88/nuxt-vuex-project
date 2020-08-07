import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

import todosState from "./todos/state";
import todosActions from "./todos/action";
import todosMutations from "./todos/mutation";
import todosGetters from "./todos/getter";

export const store = new Vuex.Store({
  state: {
    todos: todosState
  },
  actions: {
    ...todosActions
  },
  mutations: {
    ...todosMutations
  },
  getters: {
    ...todosGetters
  }
});
