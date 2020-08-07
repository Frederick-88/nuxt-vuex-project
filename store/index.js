// remember to not naming your store with capital alphabets in front
export const state = () => ({
  number: 0
});

export const getters = {};

export const mutations = {
  increment(state) {
    // mutate state
    state.number++;
  },
  decrement(state) {
    // mutate state
    state.number--;
  }
};
