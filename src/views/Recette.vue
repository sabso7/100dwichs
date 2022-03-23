<template>
<v-main v-if="sousCategorie">
    <v-container>

        <v-row>
            <v-col cols="6" class="pa-5">
                <v-row justify="center">
                    <v-card contain v-for="photo in sousCategorie.photos" v-bind:key="photo.id">
                        <v-img class="imgRecette" :src="'https://sabso-api.xyz/photos/'+ photo.filePath" lazy-src="https://picsum.photos/id/11/100/60">
                            <template v-slot:placeholder>
                                <v-row align="center" justify="center">
                                    <v-progress-circular indeterminate color="black"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="6" class="pa-5">
                <v-row justify="center" class="mt-16">
                    <h2 class="font-comfortaa" style="font-size:3em;">{{sousCategorie.nomSouscategorie}}</h2>
                </v-row>
                <v-row justify="center" class="ma-5">
                    <p class="font-comfortaa">{{sousCategorie.description}}</p>
                </v-row>
                <v-simple-table>
                    <template v-slot:default>
                        <tbody>
                            <tr v-for="ingredient in sousCategorie.ingredients" v-bind:key="ingredient.id">
                                <td>{{ingredient.quantite}}</td>
                                <td>{{ingredient.ingredient}}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
        <v-card>
            <v-row justify="center" class="ma-3">
                <h2 class="font-comfortaa pa-3">La recette</h2>
            </v-row>
            <v-card-title class="font-comfortaa" v-for="recette in sousCategorie.recettes" v-bind:key="recette.id">

                - {{recette.etape}}

            </v-card-title>
            <v-row justify="end" class="mr-15">
                <p class="pr-2 text-caption">Tartiné par :</p>
            </v-row>
            <v-row class="mr-6" justify="end">
                <p class="pt-0.5" style="font-family: 'Comfortaa', cursive;">
                    <v-avatar class="ma-1" size="30" color="blue">
                        <v-icon dark small>
                            mdi-account-circle
                        </v-icon>
                    </v-avatar>{{sousCategorie.owner.pseudo}}
                </p>
            </v-row>
        </v-card>
    </v-container>
</v-main>
</template>

<script>
import {
    mapActions,
    mapState,
} from "vuex";

export default {
    data() {
        return {
            transparent: 'rgba(0, 0, 0, 0)',
            nopic: '../assets/banner/banner_1.jpg'
        }
    },
    computed: {
        ...mapState(["sousCategorie"]),
    },
    methods: {
        ...mapActions(["getSousCategorie"])
    },
    beforeMount() {
        this.getSousCategorie(this.$route.params.id);
    },
}
</script>

<style scoped>
.imgRecette {
    max-width: 500px;
    max-height: 400px;
}
</style>
