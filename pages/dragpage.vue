<template>
  <div class="drag__container">
    <h2>Draggable Page from Vue-Draggable</h2>
    <!-- <draggable v-model="exampleList">
      <div v-for="text in exampleList" :key="text">{{ text }}</div>
    </draggable> -->
    <draggable tag="ul" :list="exampleList" class="list-group" handle=".handle">
      <li class="list-group-item" v-for="(list, idx) in exampleList" :key="idx">
        <i class="fa fa-align-justify handle"></i>

        <span class="text">{{ list.name }} </span>

        <input type="text" class="form-control" v-model="list.text" />

        <i class="fa fa-times close"></i>
      </li>
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
        { name: "Jean", text: "", id: 2 }
      ]
    };
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
