<template>
<v-main>
    <v-container class="home-block">
        <v-row justify="center">
            <section id="paragraphs">
                <v-row justify="center">
                <div style="padding:20px" class="overline text-h5 text-sm-h5 mb-4">Portraits</div>
                </v-row>
                <p class="font-weight-light text-home-page">Mes photos reflètent mes expériences vécues, à la rencontre des locaux. En m’imprégnant des cultures et modes de vie, je capte les détails, l'atmosphère et les émotions. Je souhaite faire partager et témoigner de ces expériences uniques avec vous.</p>
            </section>
            <v-col cols="12" md="8">
                <v-row>
                    <v-col v-for="imgPort in arrayImgPort" v-bind:key="imgPort.nomSousCateg" class="d-flex child-flex" :cols="$mq | mq({
    sm: 6,
    md: 4,
    lg: 3
  })">
                        <v-row v-if="imgPort.photo">
                            <v-hover v-slot="{ hover }">
                                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                                    <v-img :src="imgPort.photo" :lazy-src="imgPort.photo" aspect-ratio="0" class="grey lighten-2">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                        <v-row class="block_btn_img_home" align="center" justify="space-around">
                                            <v-btn :to="'/galerie/'+imgPort.nomSousCateg+'/'+imgPort.id" :class="{ 'show-btns': hover }" :color="transparent" text>
                                                <h2>{{imgPort.nomSousCateg}}</h2>
                                            </v-btn>
                                        </v-row>
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-row>
                        <v-row v-else>
                            <v-hover v-slot="{ hover }">
                                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                                    <v-img src="@/assets/img/no_image.jpeg" lazy-src="@/assets/img/no_image.jpeg" aspect-ratio="0" class="grey lighten-2">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                        <v-row class="block_btn_img_home" align="center" justify="space-around">
                                            <v-btn :to="'/galerie/'+imgPort.nomSousCateg+'/'+imgPort.id" :class="{ 'show-btns': hover }" color="black" text>
                                                <h2>{{imgPort.nomSousCateg}}</h2>
                                            </v-btn>
                                        </v-row>
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-row>
                        <delete-sous-categ :idSousCateg="imgPort.id"></delete-sous-categ>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row v-if="isAuth" justify="center">
            <create-sous-categ categorie="/api/categories/4"></create-sous-categ>
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
    data() {
        return {
            transparent: 'rgba(0, 0, 0, 0)',
        }
    },
    components: {
        CreateSousCateg,
        DeleteSousCateg
    },
    computed: {
        ...mapState(["categorie", "arrayImgPort", "isAuth"]),
    },
    methods: {
        ...mapActions(["getPhotosHomePage"]),
    },
}
</script>

<style scoped>
.v-card {
    transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 0.6;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}

.block_btn_img_home {
    margin-top: 100px;
}
</style>
