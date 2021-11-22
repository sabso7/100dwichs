<template>
<v-main id="home">
    <v-container style="padding:0px !important" class="parallax" no-gutters fluid>
        <v-row>
            <v-col justify="center" class="pa-0 ma-0" cols="12" sm="5" md="5" lg="5">
                <v-img contain class="home-img" src="@/assets/banner/banner_4.jpg" lazy-src="@/assets/banner/banner_4.jpg">
                    <template v-slot:placeholder>
                        <v-row justify="center">
                            <v-progress-circular indeterminate color="black"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4">
                <h1 class="title-home font-comfortaa">Milles Tartines</h1>
                <div class="subtitle-home">
                    <info-site></info-site>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="home-block">
        <v-divider id="infoSite"></v-divider>
        <compteur></compteur>
        <v-divider id="Categories"></v-divider>
        <categorie></categorie>
        <v-divider id="content_contact"></v-divider>
        <contact></contact>
    </v-container>
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

.title-home {
    position: absolute;
    top: 38vh;
    left: 70%;
    transform: translate(-50%, -50%);
    margin-bottom: 200px;
    font-size: 6em;
}

.subtitle-home {
    position: absolute;
    top: 70vh;
    left: 70%;
    transform: translate(-50%, -50%);
    margin-bottom: 200px;
    font-size: 1.5em;
}

.home-img {
    height: 100%;
}
</style>
