<template>
  <div class="app">
    <Navbar />
    <Logo />
    <Nuxt />
  </div>
</template>

<script>
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
export default {
  components: {
    Logo,
    Navbar
  }
};
</script>

<style>
.app {
  text-align: center;
  padding: 2rem 5rem;
}
</style>
