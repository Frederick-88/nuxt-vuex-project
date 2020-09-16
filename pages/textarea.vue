<template>
  <div class="text-center mt-3">
    <h1>Textarea</h1>
    <textarea-autosize
      placeholder="Type something here..."
      ref="myTextarea"
      v-model="value"
      :min-height="30"
      :max-height="350"
    />
    <p class="mt-3">Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style></style>
