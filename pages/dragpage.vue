<template>
  <div class="drag__container">
    <h2>Draggable Page from Vue-Daraggable</h2>
    <!-- <draggable v-model="exampleList">
      <div v-for="text in exampleList" :key="text">{{ text }}</div>
    </draggable> -->
    <draggable
      tag="ul"
      v-model="exampleList"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
      class="list-group"
      handle=".handle"
    >
      <transition-group type="transition">
        <li class="list-group-item" v-for="list in exampleList" :key="list.id">
          <i class="fa fa-align-justify handle"></i>

          <span class="text">{{ list.name }} </span>

          <input type="text" class="form-control" v-model="list.text" />

          <i class="fa fa-times close"></i>
        </li>
      </transition-group>
    </draggable>
    {{ exampleList }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      exampleList: [
        { name: "John", text: "", id: 0 },
        { name: "Joao", text: "", id: 1 },
        { name: "Jean", text: "", id: 2 },
        { name: "Fred", text: "", id: 3 }
      ],
      drag: false
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style>
.drag__container {
  margin: 5rem;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}
.close {
  float: right;
  padding-top: 8px;
  padding-bottom: 8px;
}
input {
  display: inline-block;
  width: 50%;
}
.text {
  margin: 20px;
}
</style>
