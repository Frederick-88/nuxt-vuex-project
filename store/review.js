// remember to not naming your store with capital alphabets in front
import axios from "axios";
const url = "https://fd-library.herokuapp.com";

export const state = () => ({
  dataReviews: []
});

export const getters = {};

export const actions = {
  // needed async await here, for asynchronous data passing.
  async getDataReviewAction(context) {
    try {
      const response = await axios.get(`${url}/library/get`);
      const data = response.data.data;
      // send to mutation
      context.commit("getDataReview", data);
    } catch (error) {
      console.log(error);
    }
  },
  addDataReviewAction(context, inputReview) {
    axios
      .post(`${url}/library/post`, inputReview)
      .then(res => {
        console.log(res.data.data);
        // update to mutation
        context.commit("addDataReview", res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export const mutations = {
  getDataReview(state, data) {
    // mutate state
    state.dataReviews = data;
  },
  addDataReview(state, data) {
    // mutate state
    state.dataReviews = [...state.dataReviews, data];
    console.log(state.dataReviews);

    // Toast Notification
    this.$toast.success("Your Review has been Posted!", {
      timeout: 4000,
      // the icon is available for fontawesome too!
      icon: "fab fa-vuejs"
    });
  }
};
