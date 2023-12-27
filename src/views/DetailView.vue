<template >
    <div class="infos-banner">

        <div class="ban-image">
            <img v-if="url" :src="url">
            <img v-else src="@/components/imgs/default.png">
        </div>

        <div class="articles">
            <div class="dt-title">
                <h2 v-if="title">{{ title }}</h2>
                <h2 v-else>---</h2>
            </div>
            <div class="dt-artist-title">
                <p v-if="artist_title">{{ artist_title }}</p>
                <p v-else>---</p>
            </div>
            <div v-html="description" class="dt-description">
            </div>
            <div class="dt-dimensions">
                <h3>Dimension :</h3>
                <p>{{ dimension }}</p>
            </div>
            <h3>Term titles :</h3>
            <div class="dt-term_titles">
                <div v-for="(item, key) in term_titles" class="termes">
                    <div class="term-of-terms">{{ item }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import searchView from '@/views/SearchView.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {

    data() {
        return {
            url: "",
            title: "",
            artist_title: "",
            description: "",
            dimension: "",
            term_titles: []
        }
    },
    created() {
        fetch('https://api.artic.edu/api/v1/artworks/', {
            method: "GET"
        })
            .then((response) => {
                response.json()
                    .then((newResponse) => {
                        console.log(newResponse.data);
                        let _objets = [];
                        let detailKey = 0;
                        for (let i = 0; i < newResponse.data.length; i++) {
                            let objet = new Object();
                            objet.artist_title = newResponse.data[i].artist_title;
                            objet.title = newResponse.data[i].title;
                            objet.imageId = newResponse.data[i].image_id;
                            objet.dimension = newResponse.data[i].dimensions;
                            objet.description = newResponse.data[i].description;
                            objet.term_titles = newResponse.data[i].term_titles;

                            if (objet.imageId !== null) {
                                objet.url = `https://www.artic.edu/iiif/2/${objet.imageId}/full/843,/0/default.jpg`;
                            }
                            _objets[i] = objet
                        }
                        for(let i = 0; i < _objets.length; i++){
                            if(this.$route.params.id === _objets[i].imageId){
                                detailKey = i;
                            }
                        }
                        this.url = _objets[detailKey].url
                        this.title = _objets[detailKey].title
                        this.artist_title = _objets[detailKey].artist_title
                        this.dimension = _objets[detailKey].dimension
                        this.description = _objets[detailKey].description
                        this.term_titles = _objets[detailKey].term_titles

                        // this.imageId[0] = newResponse.data[1].image_id;
                        // this.url = `https://www.artic.edu/iiif/2/${this.imageId[0]}/full/843,/0/default.jpg`
                    });
            })
            .catch((err) => {
                console.error(err);
            });
    }
}
</script>
<style scoped>
h3,
h2 {
    font-weight: 600;
}

.infos-banner {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
}

.infos-banner .ban-image {
    width: 454px;
    height: 397px;
    background-color: black;

}

.infos-banner .ban-image img {
    width: 100%;
    height: 100%;
}

.infos-banner .articles {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 648px;
    color: #000;
    text-align: justify;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}


.infos-banner .articles .dt-dimensions{
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
}
.infos-banner .articles .dt-dimensions p {
    display: flex;
    align-items: center;
    padding: 8px;
    /* margin: 8px; */
    width: 100%;
    border-radius: 10px;
    border: 1px solid var(--Brand-200, #F1B5C5);
    background: var(--Brand-100, #FFF2F5);
}

.infos-banner .articles .dt-term_titles {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 8px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid var(--Brand-200, #F1B5C5);
    background: var(--Brand-100, #FFF2F5);
    gap: 10px;
}

.infos-banner .articles .dt-term_titles .term-of-terms {
    color: var(--Brand-900, #1A0007);
    padding: 5px;
    background: var(--Brand-100, #f8a3ba);
    border-radius: 10px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>