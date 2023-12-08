<template>
  <div class="cards">
    <div v-for="(item, index) in objets" class="card">
      <img v-if="item.url" :src="item.url">
      <img v-else src="../components/imgs/default.png">
      <div class="ban_title">
        <p v-if="item.title" class="title">{{ item.title }}</p>
        <p v-else class="title">---</p>
        <p v-if="item.artist_title">{{ item.artist_title }}</p>
        <p v-else>---</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objets: []
      // artist_title: "",
      // title: "",
      // imageId: "",
      // url: ""
    };
  },
  // methods: {
  mounted() {
    fetch('https://api.artic.edu/api/v1/artworks/', {
      method: "GET"
    })
      .then((response) => {
        response.json()
          .then((newResponse) => {
            console.log(newResponse.data);
            let _objets = [];
            for (let i = 0; i < newResponse.data.length; i++) {
              let objet = new Object();
              objet.artist_title = newResponse.data[i].artist_title;
              objet.title = newResponse.data[i].title;
              objet.imageId = newResponse.data[i].image_id;
              if(objet.imageId !== null ){
                objet.url = `https://www.artic.edu/iiif/2/${objet.imageId}/full/843,/0/default.jpg`;
              }
              _objets[i] = objet
            }
            this.objets = _objets
            // this.imageId[0] = newResponse.data[1].image_id;
            // this.url = `https://www.artic.edu/iiif/2/${this.imageId[0]}/full/843,/0/default.jpg`
          });
      })
      .catch((err) => {
        console.error(err);
      });
    // },
  },
};
</script>

<style scoped>
.cards {
  height: 150vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr, 1fr, 1fr;
  gap: 10px;
  
}

.cards .card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.cards .card:hover{
  transform: scale(0.95);
}

.cards .card img {
  width: 100%;
  height: 100%;
}

.cards .card .ban_title {
  width: 100%;
  height: 42px;
  flex-direction: column;
  justify-content: center;
  margin-top: -40px;
  background-color: rgba(26, 0, 7, 0.6);
  padding-left: 14px;
  padding-right: 11px;
}

.cards .card .ban_title .title {
  font-size: 11pt;
  /* width: 192px; */
  height: 21px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


.cards .card .ban_title p {
  display: flex;
  font-size: 9pt;
  margin-top: -2px;
  height: 15px;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  padding-bottom: 5px;
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
