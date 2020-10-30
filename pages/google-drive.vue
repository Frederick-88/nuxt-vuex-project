<template>
  <div>
    <h3>Google Drive File Upload</h3>
    <div
      class="g-savetodrive"
      data-src="https://s3.us-east-2.amazonaws.com/staging-assets.offeo.com/project-exports/UhH0tpEuQH/videos/OFFEO-1603941580.mp4"
      data-filename="YOUR-OFFEO-VIDEO"
      data-sitename="OFFEO"
    ></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://apis.google.com/js/platform.js",
          async: true,
          defer: true
        }
      ]
    };
  }
};
</script>

<style></style>
