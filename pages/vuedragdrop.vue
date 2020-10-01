<template>
  <div>
    <div>
      <drag
        v-for="group in groups"
        class="drag"
        :key="group"
        :transfer-data="{ group, example: 'groups' }"
        @dragstart="dragging = group"
        @dragend="dragging = null"
      >
        {{ group }}
      </drag>
    </div>
    <div>
      <drop
        v-for="group in groups"
        class="drop"
        :key="group"
        :class="{ allowed: dragging === group }"
        @dragover="handleDragover(group, ...arguments)"
        @drop="handleDrop"
      >
        {{ group }}
      </drop>
    </div>
  </div>
</template>

<script>
import { Drag, Drop } from "vue-drag-drop";
export default {
  name: "vuedragdrop",
  components: { Drag, Drop },
  data: function() {
    return {
      groups: ["Project 1", "Project 2", "Project 3"],
      dragging: null
    };
  },
  methods: {
    handleDragover(group, data, event) {
      // console.log("group", group);
      // console.log("data", data);
      // if (group !== data.group) {
      //   event.dataTransfer.dropEffect = "none";
      // }
    },
    handleDrop(data) {
      console.log("fixData", data);

      alert(`You dropped with data: ${data}`);
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
.drop.allowed {
  background-color: #dfd;
}
</style>
