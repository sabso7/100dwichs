<template>
<v-main class="">
    <create-categ v-if="isAuth"></create-categ>
    <v-container class="pa-11 categ-main" style="background-color:#e3e6ea" fluid v-for="categ in categorie" v-bind:key="categ.nomCategorie" :id="categ.nomCategorie">
        <v-row align="center" justify="center">
            <delet-categ v-if="isAuth" :idCateg="categ.id"></delet-categ>
        </v-row>
        <section>
            <v-row align="center" justify="center">
               <h2 class="mb-4 font-comfortaa" style="text-transform: uppercase; font-size: 2em;font: 500 40px system-ui;">'Dwich {{categ.nomCategorie}}</h2>
            </v-row>
            <v-row align="center" justify="center">
               <h2 class="mb-4 font-comfortaa" style="font-size: 2em;">{{categ.description}}</h2>
            </v-row>
        </section>
        <v-row>
            <v-col v-for="sousCateg in categ.sousCategories" v-bind:key="sousCateg.nomSouscategorie" class="d-flex child-flex" cols="6" sm="6" md="6" lg="6">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                        <v-row align="end" justify="end" class="ma-1">
                            <delete-sous-categ :idSousCateg="sousCateg.id"></delete-sous-categ>
                        </v-row>
                        <v-row>
                            <v-col cols="6">

                                <v-card class="ma-3">
                                    <v-img class="ma-0" align="stretch" aspect-ratio="1" :src="sousCateg.photos.length !== 0 ? 'https://sabso-api.xyz/photos/'+sousCateg.photos[0].filePath : 'https://picsum.photos/id/11/100/60'" :lazy-src="sousCateg.photos.length !== 0 ? 'https://sabso-api.xyz/photos/'+sousCateg.photos[0].filePath : 'https://picsum.photos/id/11/100/60'">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-card>

                            </v-col>
                            <v-col cols="6">
                                <v-row justify="center" class="pa-3 font-comfortaa">
                                    <h2>{{sousCateg.nomSouscategorie}}</h2>
                                </v-row>
                                <v-row justify="center" align="center" class="ma-3">
                                    <p>{{sousCateg.description}}</p>
                                </v-row>
                                <v-row align="start" class="ml-3">
                                    <p class="pr-2">'Dwich de :</p>
                                    <p class="pt-0.5" style="">{{sousCateg.owner.pseudo}}</p>
                                </v-row>

                                <v-row justify="center" class="pa-2">
                                    <router-link :to="'/recette/'+sousCateg.id">
                                        <v-btn>Voir la recette</v-btn>
                                    </router-link>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>
            <v-row align="center" justify="center">
                <v-col class="d-flex child-flex" cols="4">
                    <create-sous-categ v-if="isAuth" :categorie="'/api/categories/'+categ.id"></create-sous-categ>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</v-main>
</template>

<script>
import {
    mapState,
} from "vuex";
import CreateSousCateg from './CreateSousCateg.vue';
import CreateCateg from "./CreateCateg.vue";
import DeletCateg from "./DeleteCateg.vue";
import DeleteSousCateg from './DeleteSousCateg.vue';

export default {
    components: {
        CreateSousCateg,
        CreateCateg,
        DeletCateg,
        DeleteSousCateg,
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapState(["categorie", "isAuth"]),
    }
}
</script>

<style>
.v-card {
    transition: opacity .4s ease-in-out;
}

.categ-main:nth-child(2n){
    background-color: white !important;
}

.show-btns {
    color: black !important;
}
</style>
