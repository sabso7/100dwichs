<template>
<v-main>
    <v-container class="home-block">
        <v-row justify="center">
            <section id="paragraphs">
                <v-row justify="center">
                    <div style="padding:20px" class="overline text-h5 text-sm-h5 mb-4">Reportages</div>
                </v-row>
                    <p class="font-weight-light text-home-page">Mes photos reflètent mes expériences vécues, à la rencontre des locaux.En m’imprégnant des cultures et modes de vie, je capte les détails, l'atmosphère et les émotions. Je souhaite faire partager et témoigner de ces expériences uniques avec vous.</p>
            </section>
            <v-col>
                <v-row align="center">
                    <v-col v-for="imgReport in arrayImgReport" v-bind:key="imgReport.nomSousCateg" :cols="$mq | mq({
    sm: 6,
    md: 4,
    lg: 3
  })">
                        <v-row class="rowBlockImg" v-if="$mq === 'sm'" justify="space-around">
                                <v-card>
                                    <v-img :src="imgReport.photo" :lazy-src="imgReport.photo" aspect-ratio="0" class="grey lighten-2">
                                        <template v-slot:placeholder>
                                            <v-row align="center" justify="center">
                                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                                            </v-row>
                                        </template>
                                        <v-row class="block_btn_img_home" :class="$mq" align="center" justify="space-around">
                                            <v-btn :to="'/galerie/'+imgReport.nomSousCateg+'/'+imgReport.id" color="white" text>
                                                <h2>{{imgReport.nomSousCateg}}</h2>
                                            </v-btn>
                                        </v-row>
                                    </v-img>
                                </v-card> 
                        </v-row>
                        <v-row class="rowBlockImg" v-else>
                            <v-hover v-slot="{ hover }">
                                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                                    <v-img :src="imgReport.photo" :lazy-src="imgReport.photo" aspect-ratio="0" class="grey lighten-2">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                                            </v-row>
                                        </template>
                                        <v-row class="block_btn_img_home" :class="$mq" align="center" justify="space-around">
                                            <v-btn :to="'/galerie/'+imgReport.nomSousCateg+'/'+imgReport.id" :class="{ 'show-btns': hover }" :color="transparent" text>
                                                <h2>{{imgReport.nomSousCateg}}</h2>
                                            </v-btn>
                                        </v-row>
                                    </v-img>
                                </v-card> 
                            </v-hover>
                        </v-row>
                        <delete-sous-categ :idSousCateg="imgReport.id"></delete-sous-categ>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row v-if="isAuth" justify="center">
            <create-sous-categ categorie="/api/categories/3"></create-sous-categ>
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
import DeleteSousCateg from './DeleteSousCateg.vue';
export default {
    components: {
        CreateSousCateg,
        DeleteSousCateg
    },
    data() {
        return {
            transparent: 'rgba(0, 0, 0, 0)',
        }
    },
    computed: {
        ...mapState(["categorie", "arrayImgReport", "isAuth"]),
    },
    methods: {
        ...mapActions(["getPhotosHomePage"]),
    },
    mounted: function () {
        this.$store.subscribe((mutation) => {
            if (mutation.type === 'setCategorie' && this.$route.name === 'Home' && this.arrayImgReport.length === 0) {
                this.getPhotosHomePage(this.categorie);
            }
        })
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
