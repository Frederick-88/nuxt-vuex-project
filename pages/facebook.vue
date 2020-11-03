<template>
  <div>
    <h3>Facebook File Upload</h3>
    <p>Can use Vue-Social-Media to help</p>
    <p>{{ dataShareUrl }}</p>
    <div
      id="socialshare"
      class="square"
      data-social="facebook"
      :data-shareurl="dataShareUrl"
      data-sharetitle="Design and Animate Beautiful Videos in Minutes | OFFEO"
      data-sharetext="Join me at OFFEO!"
      style="text-align: left !important"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    dataShareUrl() {
      const url = "http://localhost:3000";
      return `${url}${this.$route.path}/preview/UhH0tpEuQH`;
    }
  },
  head() {
    return {
      script: [
        {
          src: "https://www.offeo.com/socialshare/socialshare.min.js"
        }
      ]
    };
  }
};
</script>

<style></style>
