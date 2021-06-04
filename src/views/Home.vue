<template>
<v-main id="home">
    <v-divider></v-divider>
    <v-container id="home-banner-title">
        <v-carousel reverse-transition="fade-transition" transition="fade-transition" :show-arrows="false" cycle hide-delimiter-background>
            <v-carousel-item>
                    <v-img src="@/assets/banner/banner-1.jpg" lazy-src="@/assets/banner/banner-1.jpg">
                        <template v-slot:placeholder>
                            <v-row align="center" justify="center">
                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
            </v-carousel-item>
            <v-carousel-item>
                    <v-img src="@/assets/banner/banner_3-min.jpg" lazy-src="@/assets/banner/usa_home_carousel.jpg">
                        <template v-slot:placeholder>
                            <v-row align="center" justify="center">
                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
            </v-carousel-item>
        </v-carousel>
        <v-img transition="slide-x-transition" id="title-home-img" src="@/assets/logos/logo-3.png">
        </v-img>
    </v-container>
    <v-container class="home-block">
        <v-divider id="Reportages"></v-divider>
        <reportages></reportages>
        <v-divider id="Portraits"></v-divider>
        <portraits></portraits>
        <v-divider id="content_about"></v-divider>
        <about></about>
        <v-divider id="content_contact"></v-divider>
        <contact></contact>
    </v-container>
    <v-row justify="center">
        <v-icon v-on:click="scrollToTop" class="icon">mdi-arrow-expand-up</v-icon>
    </v-row>
</v-main>
</template>

<script>
import About from "../components/About.vue";
import Reportages from "../components/Reportages.vue";
import Portraits from "../components/Portraits.vue";
import Contact from '../components/Contact.vue';
export default {
    components: {
        About,
        Reportages,
        Portraits,
        Contact
    },
    methods: {
        scrollToTop: function () {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss">
html {
    scroll-behavior: smooth;
}

.v-window {

    &-x-transition,
    &-x-reverse-transition,
    &-y-transition,
    &-y-reverse-transition {

        &-enter-active,
        &-leave-active {
            transition: 0.6s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
        }
    }
}

.blocktext {
    margin: 5%;
}

.blockquote {
    text-align: justify;
}

.home-block {
    padding-top: 5%;
}

.theme--light.v-divider {
    border-color: lightgray !important;
    margin-top: 20px;
}

#title-home-img {
    position: absolute;
    top: 28vh;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    max-height: 500px;
}

.btn-galerie {
    margin-top: 20px;
}

#home-banner-title {
    margin-top: 80px;
    margin-bottom: 70px;
}
</style>
