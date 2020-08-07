<template>
  <div>
    <h1>Events</h1>
    <h2 class="nuxt__text">State of Number: {{ number }}</h2>
    <button @click="increment(number)" class="btn btn-success">Add Number +1</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["increaseNumber"]),
    increment(number) {
      this.increaseNumber(number);
    }
  },
  computed: {
    ...mapState({
      number: state => state.todos.number
    })
  }
};
</script>

<style>
</style>