<template>
<v-main id="home">
    <v-container style="padding:0px !important margin:0px !important" no-gutters fluid>
        <v-row align="center" justify="center">
            <v-img class="home-img" src="@/assets/banner/dwich-min.png" lazy-src="@/assets/banner/dwich-min.png">
                <v-row align="center" justify="center">
                    <h1 class="title-home-1 font-comfortaa">100</h1>
                </v-row>
                <v-row align="center" justify="center">
                    <h1 class="title-home-2 font-comfortaa">'dwichs</h1>
                </v-row>
                <v-row align="center" justify="center" class="subtitle-home font-comfortaa">
                    <info-site></info-site>
                </v-row>
                <template v-slot:placeholder>
                    <v-row justify="center">
                        <v-progress-circular indeterminate color="black"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-row>
    </v-container>
    <v-container>
        <v-divider id="infoSite"></v-divider>
    </v-container>

    <compteur></compteur>
    <v-divider id="Categories"></v-divider>
    <categorie></categorie>
    <v-container>
    <v-divider id="content_contact"></v-divider>
    </v-container>
    <contact></contact>
    <v-row justify="center">
        <v-icon v-on:click="scrollToTop" id="arrow-homepage" class="icon">mdi-arrow-expand-up</v-icon>
    </v-row>
</v-main>
</template>

<script>
import Contact from '../components/Contact.vue';
import Categorie from '../components/Categorie.vue';
import InfoSite from '../components/InfoSite.vue';
import Compteur from '../components/Compteur.vue';
export default {
    data() {
        return {
            mq: this.$mq,
        }
    },
    components: {
        Categorie,
        Contact,
        InfoSite,
        Compteur,
    },
    methods: {
        scrollToTop: function () {
            window.scrollTo(0, 0);
        },
    }
};
</script>

<style lang="scss">
html {
    scroll-behavior: smooth;
}

.blocktext {
    margin: 5%;
}

.blockquote {
    text-align: justify;
}

.theme--light.v-divider {
    border-color: lightgray !important;
    margin-top: 10px;
}

.title-home-1 {
    margin-top: 7%;
    font-size: 6em;
    color: whitesmoke;
}

.title-home-2 {
    margin-bottom: 50px;
    font-size: 6em;
    color: white;
}

.subtitle-home {
    margin-bottom: 200px;
    font-size: 1.5em;
    color: honeydew;
}

.home-img {
    margin-top: 3%;
    height: 700px;
    filter: contrast(1);
}
</style>
