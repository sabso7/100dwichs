<template>
  <v-main id="home">
    <v-container id="home-banner-title">
      <v-img id="big-home-img" src="@/assets/img/canada-1.jpg"></v-img>
      <v-img id="title-home-img" src="@/assets/logos/logo-3.png"></v-img>
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
  margin-top: 2%;
}

.blocktext {
  margin: 5%;
}

.home-block {
  padding-top: 5%;
}

.theme--light.v-divider {
  border-color: lightgray !important;
  margin-top: 30px;
}

#carousel-card {
  max-width: 400px;
  max-height: 700px;
}

#title-home-img {
  position: absolute;
  top: 230px;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  max-height: 500px;
}

#big-home-img {
  max-height: 1000px;
}
</style>
