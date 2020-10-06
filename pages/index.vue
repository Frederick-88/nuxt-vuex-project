<template>
  <div>
    <h2 class="nuxt__text text-center">HOME</h2>
    <h2 class="mt-3">Here are the things that i explore with Nuxt & Vuex :</h2>
    <!-- Increment -->
    <section>
      <h3 class="nuxt__text font-weight-bold">1. Increment</h3>
      <h3 class="nuxt__text">
        State of Number from Vuex: {{ countPlusLocalState }}
      </h3>
      <button @click="increment" class="btn btn-success">
        Add Number +2 (From Mutation & Action)
      </button>
      <button @click="decrement" class="btn btn-danger">
        Decrease Number -1
      </button>
    </section>
    <!-- TodoApp -->
    <section class="mt-4">
      <h3 class="nuxt__text font-weight-bold">
        2. TodoApp with Vue-toastification
      </h3>
      <p class="text-secondary">
        The Vue-Toastification was contained inside add and delete Todo
      </p>
      <nuxt-link class="btn btn-outline-primary" to="/todoapp"
        >Navigate to TodoApp</nuxt-link
      >
    </section>
    <!-- Review with Axios/REST API Methods -->
    <section class="mt-4">
      <h3 class="nuxt__text font-weight-bold">
        3. ReviewPage with REST API Method
      </h3>
      <p class="text-secondary">
        All methods of Vuex used with REST API Method
      </p>
      <nuxt-link class="btn btn-outline-primary" to="/review"
        >Navigate to Review Page</nuxt-link
      >
    </section>
    <!-- Vue Color by XiaoKaiKe -->
    <section class="mt-4">
      <h3 class="nuxt__text font-weight-bold">
        4. Vue Color Plugin by XiaoKaiKe
      </h3>
      <p class="text-secondary">
        Try this color picker !!
      </p>
      <nuxt-link class="btn btn-outline-primary" to="/vuecolor"
        >Navigate to Vue Color</nuxt-link
      >
    </section>
    <!-- Vue Draggable by Sortable.js -->
    <section class="mt-4">
      <h3 class="nuxt__text font-weight-bold">
        5. Vue-Draggable Plugin by Sortable.js
      </h3>
      <p class="text-secondary">
        Drag the element inside Interface that you structured.
      </p>
      <nuxt-link class="btn btn-outline-primary" to="/dragpage"
        >Navigate to Vue-Draggable</nuxt-link
      >
    </section>
    <!-- Vue Drag & Drop by cameronhimself -->
    <section class="mt-4">
      <h3 class="nuxt__text font-weight-bold">
        6. Vue Drag & Drop by cameronhimself
      </h3>
      <p class="text-secondary">
        Drag & drop like how we drag image to import image.
      </p>
      <nuxt-link class="btn btn-outline-primary" to="/vuedragdrop"
        >Navigate to Vue Drag & Drop</nuxt-link
      >
    </section>
    <!-- Vue-Textarea-Autosize by devstark-com -->
    <section class="mt-4">
      <h3 class="nuxt__text font-weight-bold">
        7. Vue-Textarea-Autosize by devstark-com
      </h3>
      <p class="text-secondary">
        Auto increase height once words touch the width limit. Good usage &
        feature for renamings.
      </p>
      <nuxt-link class="btn btn-outline-primary" to="/textarea"
        >Navigate to Vue-Textarea-Autosize</nuxt-link
      >
    </section>
    <!-- Route & Subroute experiment -->
    <section class="mt-4">
      <h3 class="nuxt__text font-weight-bold">8. Route with Subroutes</h3>
      <p class="text-secondary">
        A little bit messy, but logic was attached good with me hehehhe
      </p>
      <nuxt-link class="btn btn-outline-primary" to="/routeexperiment"
        >Navigate to Route Experiment</nuxt-link
      >
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // method 1 to call from state, watch all methods to call state here "https://scrimba.com/p/pnyzgAP/c8Pz7BSK".
      numberOnly: this.$store.state.number,
      localNumber: 3
    };
  },
  methods: {
    increment() {
      // how we do mutation
      this.$store.commit("increment");
      // how we do action from vuex
      this.$store.dispatch("incrementAction");
    },
    decrement() {
      if (this.countPlusLocalState !== 0) {
        // how we do mutation
        this.$store.commit("decrement");
      }
    }
  },
  // method 2 to call from state
  computed: mapState({
    number: state => state.number,
    // if you want to combine state in reducer with local one
    countPlusLocalState(state) {
      return state.number + this.localNumber;
    }
  })
};
</script>

<style></style>
