<template>
  <div>
    <h1>Events</h1>
    {{ number }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      number: state => state.todos.number
    })
  }
};
</script>

<style>
</style>