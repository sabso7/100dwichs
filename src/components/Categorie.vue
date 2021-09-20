<template>
<v-main>
    <v-container v-for="categ in categorie" v-bind:key="categ.nomCategorie">

        <section>
            <v-row align="center" justify="center">
                <div style="padding:20px" class="overline text-h5 text-sm-h5 mb-4">{{categ.nomCategorie}}</div>
            </v-row>
            <v-row align="center" justify="center">
                <p class="font-weight-light text-home-page">{{categ.description}}</p>
            </v-row>
        </section>
        <v-col v-for="sousCateg in categ.sousCategories" v-bind:key="sousCateg.nomSouscategorie">
            <v-row class="rowBlockImg" v-if="sousCateg.photos.length !== 0">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                        <v-img :src="'https://dodie-api.site/photos/'+sousCateg.photos[0].id" :lazy-src="'https://dodie-api.site/photos/'+sousCateg.photos[0].filePath" aspect-ratio="0" class="grey lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="black"></v-progress-circular>
                                </v-row>
                            </template>
                            <v-row class="block_btn_img_home" :class="$mq" align="center" justify="space-around">
                                <v-btn :to="'/galerie/'+sousCateg.nomSouscategorie+'/'+sousCateg.id" :class="{ 'show-btns': hover }" :color="transparent" text>
                                    <h2 style="font-size:30px">{{sousCateg.nomSouscategorie}}</h2>
                                </v-btn>
                            </v-row>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-row>
        </v-col>
        <v-row v-if="isAuth" justify="center">
            <create-sous-categ :categorie="'/api/categories/'+categ.id"></create-sous-categ>
        </v-row>
    </v-container>
</v-main>
</template>

<script>
import {
    mapState,
    mapActions,
} from "vuex";
import CreateSousCateg from './CreateSousCateg.vue';

export default {
    components: {
        CreateSousCateg,
    },
    data() {
        return {
            transparent: 'rgba(0, 0, 0, 0)',
        }
    },
    computed: {
        ...mapState(["categorie", "isAuth"]),
    },
    methods: {
        ...mapActions(["getPhotosHomePage"]),
    },
    mounted: function () {

    }
}
</script>

<style>
.v-card {
    transition: opacity .4s ease-in-out;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}
</style>
