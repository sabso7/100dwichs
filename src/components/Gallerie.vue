<template>
<v-main>
    <v-container id="block">
        <v-row justify="center">
            <h1 class="font-weight-light" id="title-gallery">{{ $route.params.name }}</h1>
        </v-row>
        <section v-if="sousCategorie">
            <v-row v-if="sousCategorie.description" justify="center" class="block_text_souscategorie">
                <p class="font-weight-light text-home-page">{{sousCategorie.description}}</p>
            </v-row>
        </section>
        <v-divider></v-divider>
    </v-container>
    <v-container>
        <import-photo v-if="isAuth"></import-photo>
        <v-row justify="center">
            <v-progress-circular v-if="isLoading == true" indeterminate color="blue"></v-progress-circular>
        </v-row>
        <masonry :gutter="{ default: '10px', 700: '10px' }" :cols="{ default: 3, 500: 4, 300: 5, 100: 1 }">
            <v-card v-for="(item, index) in JSON.parse(JSON.stringify(imgsArr))" :key="index" class="mt-2 mb-2" outlined color="transparent" @click="() => showImg(index)">
                <v-img :src="item.src" lazy-src="https://picsum.photos/id/11/100/60" :alt="item.description">
                    <template v-slot:placeholder>
                        <v-row align="center" justify="center">
                            <v-progress-circular indeterminate color="black"></v-progress-circular>
                        </v-row>
                    </template>
                    <v-row justify="center">
                        <v-btn id="delete-btn" v-if="isAuth" v-on:click="clickDeletePhoto(item.id)">
                            <v-icon class="icon">mdi-delete</v-icon>
                        </v-btn>
                    </v-row>
                </v-img>
            </v-card>
        </masonry>
        <vue-easy-lightbox :visible="visible" :imgs="JSON.parse(JSON.stringify(imgsArr))" :index="index" @hide="handleHide"></vue-easy-lightbox>
    </v-container>
</v-main>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";
import ImportPhoto from "../components/ImportPhoto.vue";

export default {
    data() {
        return {
            visible: false,
            index: 0
        }
    },
    components: {
        ImportPhoto
    },
    computed: {
        ...mapState(["isAuth", "photos", "isLoading", "imgsArr", "sousCategorie"]),
    },
    methods: {
        ...mapActions(["getPhotos", "deletePhoto", "getSousCategorie"]),
        clickDeletePhoto: function (idPhoto) {
            this.deletePhoto(idPhoto);
        },
        showImg(index) {
            this.index = index
            this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    },
    created() {
        this.getPhotos(this.$route.params.id);
        this.getSousCategorie(this.$route.params.id);
        this.imgsArr.splice(0);
    },
};
</script>

<style>
.block {
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
}

#delete-btn {
    margin: 5%;
}

.block_text_souscategorie {
    padding: 50px;
}

#title-gallery {
    text-transform: capitalize;
    padding-top: 30px;
}
</style>
