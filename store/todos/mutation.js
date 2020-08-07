export default {
  INCREASE_NUMBER: (state, item) => {
    console.log(`this is passed data from action ${item}`);
    // this is how you update state in vuex
    state.todos.number = state.todos.number + 1;
  }
};
