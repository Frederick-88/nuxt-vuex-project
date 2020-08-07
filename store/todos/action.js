export default {
  increaseNumber: ({ commit }, payload) => {
    // this is the method to pass data like "id", etc.
    console.log(payload);
    // quite like actionCreator to Reducer in ReactRedux
    commit("INCREASE_NUMBER");
  }
};
