<template>
  <div>
    <drag class="drag" :transfer-data="{ example: 'styling' }">drag</drag>
    <drop
      class="drop"
      :class="{ over: activeDrag === 'drop1' }"
      @dragover="activeDrag = 'drop1'"
      @dragleave="activeDrag = ''"
      @drop="handleDrop"
    >
      {{ activeDrag === "drop1" ? "Drop Here Please!" : "drop" }}
    </drop>
    <drop
      class="drop"
      :class="{ over: activeDrag === 'drop2' }"
      @dragover="activeDrag = 'drop2'"
      @dragleave="activeDrag = ''"
      @drop="handleDrop"
    >
      {{ activeDrag === "drop2" ? "Drop Here Please!" : "drop" }}
    </drop>
    <drop
      class="drop"
      :class="{ over: activeDrag === 'drop3' }"
      @dragover="activeDrag = 'drop3'"
      @dragleave="activeDrag = ''"
      @drop="handleDrop"
    >
      {{ activeDrag === "drop3" ? "Drop Here Please!" : "drop" }}
    </drop>
  </div>
</template>

<script>
import { Drag, Drop } from "vue-drag-drop";
export default {
  components: { Drag, Drop },
  data() {
    return {
      over: false,
      activeDrag: ""
    };
  },
  methods: {
    handleDrop(data) {
      this.over = false;
      alert(`You dropped with data: ${JSON.stringify(data)}`);
    }
  }
};
</script>

<style>
.drag,
.drop {
  background-color: sandybrown;
  margin: 10px;
  display: inline-block;
  padding: 50px;
}
.drop.over {
  background-color: #dfd;
}
</style>
