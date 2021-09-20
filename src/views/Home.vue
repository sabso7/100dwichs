<template>
<v-main id="home">
    <v-container style="padding:0px !important" no-gutters fluid>
        <v-img class="banner_home" src="@/assets/banner/banner_2.jpg" lazy-src="@/assets/banner/banner_2.jpg">
            <template v-slot:placeholder>
                <v-row justify="center">
                    <v-progress-circular indeterminate color="black"></v-progress-circular>
                </v-row>
            </template>
        </v-img>
    </v-container>
    <v-container class="home-block">
        <v-divider id="Reportages"></v-divider>
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

#title-home-img {
    position: absolute;
    top: 38vh;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: 200px;
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

.banner_home{
  position: relative;  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.rowBlockImg {
    padding: 10px;
}
</style>
