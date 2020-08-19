<template>
  <div>
    <div class="text-center mb-5" style="margin:0 14rem">
      <form @submit.prevent="submitReview">
        <h3 class="nuxt__text font-weight-bold">Review Form</h3>
        <h5 class="mt-4 font-weight-bold">1. Pick Your Character</h5>
        <div class="row d-flex justify-content-center">
          <div
            v-for="(character, index) in characters"
            :key="index"
            class="col-3 azur-border mx-2"
            :class="{
              activeBorder: selectedCharacter === character.characterGender
            }"
            @click="updateSelectedCharacter(character.characterGender)"
          >
            <img
              :src="character.characterImage"
              alt="char-image"
              class="w-100"
            />
          </div>
        </div>
        <div>
          <h5 class="mt-4 font-weight-bold">2. Fill This Form</h5>

          <p class="mt-3 mb-1">Headline of Review</p>
          <input
            name="headline"
            type="text"
            class="w-75 py-2 px-3"
            placeholder="Headline of your Review"
            v-model="dataInput.headline"
            required
          />
          <p class="mt-3 mb-1">Description of Review</p>
          <input
            name="description"
            type="text"
            class="w-75 py-2 px-3"
            placeholder="Share with us how you felt on this Exploration!"
            v-model="dataInput.description"
            required
          />
        </div>
        <button type="submit" class="btn nuxt-btn w-75 mt-4">
          Submit Review
        </button>
      </form>
    </div>

    <!-- Review Data -->
    <div class="text-center" style="margin:2rem 8rem">
      <h3 class="nuxt__text font-weight-bold">The Review Data belongs here</h3>
      <div class="row mb-4">
        <div
          v-for="(review, index) in dataReview"
          :key="index"
          class="col-4 mt-4"
        >
          <div class="special-card">
            <div class="d-flex justify-content-center">
              <!-- In my backend, ImageBook = Image(At Here) -->
              <img
                :src="review.imageBook"
                alt="char-img"
                class="rounded-circle"
                style
              />
            </div>
            <div class="card">
              <div class="card-body pt-5">
                <!-- In my backend, BookTitle = Title(At Here) -->
                <h5 class="card-title">{{ review.bookTitle }}</h5>
                <!-- In my backend, BookNumber = Description(At Here) -->
                <p class="card-text">{{ review.bookNumber }}</p>
              </div>
            </div>
            <button
              @click="deleteReview(review._id)"
              class="btn nuxt-danger-icon-btn"
            >
              <i class="fas fa-times-circle fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // Mounted = UseEffect/ComponentDidMount in ReactJS
  mounted() {
    this.getDataReviewAction();
  },
  data() {
    return {
      selectedCharacter: "Man",
      characters: [
        {
          characterGender: "Man",
          characterImage:
            "http://geniusdevs.com/themeforest/prolab/probucket/assets/images/testimonialimage/1.jpg"
        },
        {
          characterGender: "Woamen",
          characterImage:
            "http://geniusdevs.com/themeforest/prolab/probucket/assets/images/testimonialimage/2.jpg"
        }
      ],
      dataInput: {
        headline: "",
        description: ""
      }
    };
  },
  methods: {
    // 1 way on defining actions from other component in store, "review" refers to file name
    ...mapActions("review", {
      getDataReviewAction: "getDataReviewAction",
      addDataReviewAction: "addDataReviewAction",
      deleteReviewAction: "deleteReviewAction"
    }),
    // update the character gender
    updateSelectedCharacter(selected) {
      this.selectedCharacter = selected;
    },
    submitReview() {
      // To Select Character Gender's Image That will be posted.
      let ImageCharacter = "";
      if (this.selectedCharacter === "Man") {
        ImageCharacter =
          "http://geniusdevs.com/themeforest/prolab/probucket/assets/images/testimonialimage/1.jpg";
      } else {
        ImageCharacter =
          "http://geniusdevs.com/themeforest/prolab/probucket/assets/images/testimonialimage/2.jpg";
      }
      let inputReview = {
        // just ignore years and status, its not needed in backend.
        imageBook: ImageCharacter,
        bookTitle: this.dataInput.headline,
        years: 2020,
        bookNumber: this.dataInput.description,
        status: true
      };
      // Axios Post to Backend
      this.addDataReviewAction(inputReview);

      // Reset the form, the code structure below resetted by Prettier.
      (this.dataInput.headline = ""), (this.dataInput.description = "");
    },
    deleteReview(id) {
      this.deleteReviewAction(id);
    }
  },
  computed: {
    // From Axios
    dataReview() {
      return this.$store.state.review.dataReviews;
    }
  }
};
</script>

<style>
.azur-border {
  border: 2px solid rgba(44, 62, 80, 0.5);
  cursor: pointer;
}
.activeBorder {
  border: 2px solid rgba(57, 185, 130, 1);
}
.nuxt-btn {
  background: #39b982;
  color: whitesmoke;
  transition: ease-in-out 0.2s;
}
.nuxt-btn:hover {
  background: gray;
  color: whitesmoke;
}
.nuxt-danger-icon-btn {
  background: white;
  border-radius: 2.5rem;
  color: #dc3545;
  position: relative;
  margin-top: -1.5rem;
  z-index: 1;
}
.nuxt-danger-icon-btn:hover {
  color: #bd0013;
}
.special-card img {
  width: 6rem;
  border: 3px solid gray;
  margin-bottom: -2.5rem;
  z-index: 1;
}
.special-card .card {
  border: 3px solid gray;
}
</style>
