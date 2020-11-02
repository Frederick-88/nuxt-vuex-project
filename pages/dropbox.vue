<template>
  <div>
    <h3>Dropbox File Upload</h3>
    <button class="btn btn-primary" @click="saveToDropbox">
      Save To Dropbox
    </button>
    <a
      href="https://dl.dropboxusercontent.com/s/deroi5nwm6u7gdf/advice.png"
      class="dropbox-saver"
    ></a>
  </div>
</template>

<script>
export default {
  methods: {
    saveToDropbox() {
      const options = {
        // Success is called once all files have been successfully added to the user's
        // Dropbox, although they may not have synced to the user's devices yet.
        success: function() {
          // Indicate to the user that the files have been saved.
          alert("Success! Files saved to your Dropbox.");
        },

        // Progress is called periodically to update the application on the progress
        // of the user's downloads. The value passed to this callback is a float
        // between 0 and 1. The progress callback is guaranteed to be called at least
        // once with the value 1.
        progress: function(progress) {},

        // Cancel is called if the user presses the Cancel button or closes the Saver.
        cancel: function() {},

        // Error is called in the event of an unexpected response from the server
        // hosting the files, such as not being able to find a file. This callback is
        // also called if there is an error on Dropbox or if the user is over quota.
        error: function(errorMessage) {}
      };
      const url =
        "https://s3.us-east-2.amazonaws.com/staging-assets.offeo.com/project-exports/UhH0tpEuQH/videos/OFFEO-1603941580.mp4";
      const filename = "YOUR OFFEO VIDEO";
      Dropbox.save(url, filename, options);
    }
  },
  head() {
    return {
      script: [
        {
          src: "https://www.dropbox.com/static/api/2/dropins.js",
          id: "dropboxjs",
          "data-app-key": "5h9isbgtsi6w2uf"
        }
      ]
    };
  }
};
</script>

<style></style>
