<template>
  <div>
    <h1>Events</h1>
    <h2 class="nuxt__text">State of Number: {{countPlusLocalState}}</h2>
    <button @click="increment" class="btn btn-success">Add Number +2 (From Mutation & Action)</button>
    <button @click="decrement" class="btn btn-danger">Decrease Number -1</button>
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

<style>
</style>
