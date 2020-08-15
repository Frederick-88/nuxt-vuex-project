<template>
  <div>
    <h3 class="text-center mb-5">Vue-Color by XiaoKaike</h3>
    <div class="mx-3">
      <div class="row">
        <div class="col-6">
          <h5>Chrome Picker</h5>
          <Chrome v-model="colors3" />
          <h5 class="text-secondary mt-3">ChromeData : {{ colors3 }}</h5>
        </div>
        <div class="col-6">
          <h5>Sketch Picker</h5>
          <Sketch v-model="colors4" />
          <h5 class="text-secondary mt-3">SketchData : {{ colors4 }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chrome, Sketch } from "vue-color";
export default {
  components: {
    Chrome,
    Sketch
  },
  data() {
    return {
      colors3: [],
      colors4: []
    };
  }
};
</script>

<style></style>
