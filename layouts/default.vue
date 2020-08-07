<template>
  <div class="app">
    <Navbar />
    <div class="text-center">
      <Logo class="mb-3" />
    </div>
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
  padding: 2rem 5rem;
}
.nuxt__text {
  color: #39b982;
}
</style>

