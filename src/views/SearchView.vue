<template>
  <div class="hello">
    <h1>Random Fact:</h1>
    <button @click="fetchData">Click Me!</button>
    <img :src="url">
    <p v-if="imageId">{{ imageId }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      imageId: "",
      url: ""
    };
  },
  methods: {
    fetchData() {
      fetch('https://api.artic.edu/api/v1/images/', {
        method: "GET"
      })
      .then((response) => {
        response.json()
        .then((newResponse) => {
          this.imageId = newResponse.data[1].id;
          this.url = `https://www.artic.edu/iiif/2/${this.imageId}/full/843,/0/default.jpg`
        });
      })
      .catch((err) => {
        console.error(err);
      });
    },
  },
};
</script>
<style>
button {
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 8px;
}
</style>

<!-- <style>
@media (min-width: 1440px) {
  .search {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
