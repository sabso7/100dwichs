<template>
<v-main id="home">
    <v-container v-if="$mq =='sm'">
        <v-carousel id="home-banner-title-sm" reverse-transition="fade-transition" transition="fade-transition" :show-arrows="false" cycle hide-delimiter-background>
            <v-carousel-item>
                    <v-img src="@/assets/img/voiture_inde.jpg" lazy-src="@/assets/img/voiture_inde.jpg">
                        <template v-slot:placeholder>
                            <v-row justify="center">
                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
            </v-carousel-item>
            <v-carousel-item>
                    <v-img src="@/assets/img/usa_home.jpg" lazy-src="@/assets/img/usa_home.jpg">
                        <template v-slot:placeholder>
                            <v-row justify="center">
                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
            </v-carousel-item>
            <v-carousel-item>
                    <v-img src="@/assets/img/lampion_chine.jpg" lazy-src="@/assets/img/lampion_chine.jpg">
                        <template v-slot:placeholder>
                            <v-row justify="center">
                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
            </v-carousel-item>
            <v-carousel-item>
                    <v-img src="@/assets/img/homme_inde.jpg" lazy-src="@/assets/img/homme_inde.jpg">
                        <template v-slot:placeholder>
                            <v-row justify="center">
                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
            </v-carousel-item>
        </v-carousel>
        <v-img v-if="$mq !=='sm'" class="img-title" :class="$mq" transition="slide-x-transition" src="@/assets/logos/logo-3.png">
        </v-img>
    </v-container>
    <v-container v-else id="home-banner-title">
        <v-carousel reverse-transition="fade-transition" transition="fade-transition" :show-arrows="false" cycle hide-delimiter-background>
            <v-carousel-item>
                    <v-img src="@/assets/banner/banner-1.jpg" lazy-src="@/assets/banner/banner-1.jpg">
                        <template v-slot:placeholder>
                            <v-row justify="center">
                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
            </v-carousel-item>
            <v-carousel-item>
                    <v-img src="@/assets/banner/banner_3-min.jpg" lazy-src="@/assets/banner/usa_home_carousel.jpg">
                        <template v-slot:placeholder>
                            <v-row justify="center">
                                <v-progress-circular indeterminate color="black"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
            </v-carousel-item>
        </v-carousel>
        <v-img class="img-title" :class="$mq" transition="slide-x-transition" id="title-home-img" src="@/assets/logos/logo-3.png">
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
        <v-icon v-on:click="scrollToTop" id="arrow-homepage" class="icon">mdi-arrow-expand-up</v-icon>
    </v-row>
</v-main>
</template>

<script>
import About from "../components/About.vue";
import Reportages from "../components/Reportages.vue";
import Portraits from "../components/Portraits.vue";
import Contact from '../components/Contact.vue';
export default {
     data() {
        return {
            mq: this.$mq,
        }
    },
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
    mounted(){
        console.log(this.$mq)
    }
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

#arrow-homepage{
    padding-bottom: 20px;
}

.block_btn_img_home.lg {
    margin-top: 150px;
}

.block_btn_img_home.sm {
    margin-top: 80px;
}

.rowBlockImg{
    padding: 10px;
}

</style>
