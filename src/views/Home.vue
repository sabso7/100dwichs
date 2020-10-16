<template>
  <v-main id="home">
    <v-container id="home-banner-title">
      <v-img id="big-home-img" src="@/assets/banner/banner-1.jpg" lazy-src="@/assets/banner/banner-1.jpg">
      <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="black"></v-progress-circular>
                    </v-row>
      </template>
      </v-img>
      <v-img transition="slide-x-transition" id="title-home-img" src="@/assets/logos/logo-3.png">
      </v-img>
    </v-container>
    <v-divider inset></v-divider>
    <v-container class="home-block">
      <about></about>
      <v-divider inset></v-divider>
    </v-container>
    <reportages></reportages>
    <v-divider inset></v-divider>
    <portraits></portraits>
    <v-row justify="center">
    <v-icon v-on:click="scrollToTop" class="icon">mdi-arrow-expand-up</v-icon>
    </v-row>
  </v-main>
</template>

<script>
import About from "../components/About.vue";
import Reportages from "../components/Reportages.vue";
import Portraits from "../components/Portraits.vue";
export default {
  components: { About, Reportages, Portraits },
  methods: {
    scrollToTop: function() {
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

#home {
  
}

.blocktext {
  margin: 5%;
}

.blockquote{
  text-align: justify;
}

.home-block {
  padding-top: 5%;
}

.theme--light.v-divider {
  border-color: lightgray !important;
  margin-top: 20px;
}

#carousel-card {
  max-width: 400px;
  max-height: 700px;
}

#title-home-img {
  position: absolute;
  top: 20vh;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  max-height: 500px;
}

#big-home-img {
  max-height: 1000px;
}

.btn-galerie{
  margin-top: 20px;
}

</style>
