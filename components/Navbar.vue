<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">NUXT - VUEX - PROJECT</nuxt-link>
    <nav>
      <nuxt-link class="nav-item" to="/">Home</nuxt-link>&nbsp;|
      <nuxt-link class="nav-item" to="/todoapp">TodoApp</nuxt-link>&nbsp;|
      <nuxt-link class="nav-item" to="/vuecolor">Vue Color</nuxt-link>&nbsp;|
      <nuxt-link class="nav-item" to="/dragpage">Vue-Draggable Plugin</nuxt-link
      >&nbsp;|
      <nuxt-link class="nav-item" to="/vuedragdrop"
        >Vue Drag & Drop Plugin</nuxt-link
      >&nbsp;|
      <nuxt-link class="nav-item" to="/routeexperiment"
        >Route Experiment</nuxt-link
      >&nbsp;|
      <nuxt-link class="nav-item" to="/review">Review Page</nuxt-link>
    </nav>
  </div>
</template>

<style scoped>
.brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav .nav-item {
  color: #39b982;
  text-decoration: none;
}

.nav a {
  display: inline-block;
}
</style>
