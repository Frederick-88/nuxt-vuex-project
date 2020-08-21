<template>
  <div>
    <h3 class="text-center mb-5">Vue-Color by XiaoKaike</h3>
    <div class="mx-3">
      <div class="row">
        <div class="col-6">
          <h5>Chrome Picker</h5>
          <client-only>
            <Chrome v-model="colors3" />
          </client-only>
          <h5 class="text-secondary mt-3">
            ChromeData : take a look on console
          </h5>
          <div
            class="vue-color-bg"
            :style="{ backgroundColor: bgColor1 }"
          ></div>
        </div>
        <div class="col-6">
          <h5>Sketch Picker</h5>
          <client-only>
            <Sketch v-model="colors4" />
          </client-only>
          <h5 class="text-secondary mt-3">
            SketchData : take a look on consolea
          </h5>
          <div
            class="vue-color-bg"
            :style="{ backgroundColor: bgColor2 }"
          ></div>
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
  watch: {
    colors3() {
      console.log(`Chrome : ${this.colors3}`);
    },
    colors4() {
      console.log(`SketchData : ${this.colors4}`);
    }
  },
  data() {
    return {
      colors3: [],
      colors4: []
    };
  },
  computed: {
    bgColor1() {
      if (this.colors3.length === 0) {
        return "black";
      } else {
        return this.colors3.hex;
      }
    },
    bgColor2() {
      if (this.colors4.length === 0) {
        return "black";
      } else {
        return this.colors4.hex;
      }
    }
  }
};
</script>

<style>
.vue-color-bg {
  width: 60px;
  height: 60px;
  border-radius: 4px;
}
</style>
