<template>
<v-main id="home">
    <v-container style="padding:0px !important" no-gutters fluid>
        <v-row justify="start">
            <v-col justify="center" class="pa-0 ma-0" cols="12" sm="5" md="5" lg="5">
                <v-img  contain max-height="800" class="banner_home" src="@/assets/banner/banner_4.jpg" lazy-src="@/assets/banner/banner_4.jpg">
                    <template v-slot:placeholder>
                        <v-row justify="center">
                            <v-progress-circular indeterminate color="black"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4">
                <h1 class="title-home-img">Milles Tartines</h1>
                <h5 class="subtitle-home-img">pour ke florianne ell soie comptenteu</h5>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="home-block">
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
export default {
    data() {
        return {
            mq: this.$mq,
        }
    },
    components: {
        Categorie,
        Contact
    },
    methods: {
        scrollToTop: function () {
            window.scrollTo(0, 0);
        },
    }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
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

.title-home-img {
    position: absolute;
    top: 38vh;
    left: 70%;
    transform: translate(-50%, -50%);
    margin-bottom: 200px;
    font-family: 'Comfortaa', cursive;
    font-size: 6em;
}

.subtitle-home-img {
    position: absolute;
    top: 70vh;
    left: 70%;
    transform: translate(-50%, -50%);
    margin-bottom: 200px;
    font-family: 'Comfortaa', cursive;
    font-size: 1.5em;
}

.img-title.md {
    max-width: 500px;
    max-height: 500px;
}

.img-title.lg {
    max-width: 500px;
    max-height: 500px;
}

.img-title.sm {
    max-width: 350px;
    max-height: 200px;
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
}

#home-banner-title-sm {
    margin-top: 110px !important;
}

.btn-galerie {
    margin-top: 20px;
}

#home-banner-title {
    margin-top: 150px;
    margin-bottom: 70px;
}

.home-block {
    padding-top: 5%;
}

#arrow-homepage {
    padding-bottom: 20px;
}

.block_btn_img_home.lg {
    margin-top: 150px;
}

.block_btn_img_home.sm {
    margin-top: 80px;
}

.banner_home {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.rowBlockImg {
    padding: 10px;
}
</style>
