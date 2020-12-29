<template>
  <v-main>
    <v-content id="block">
      <v-row justify="center">
      <h1 class="font-weight-light">{{ $route.params.name }}</h1>
      </v-row>
      <v-divider inset></v-divider>
    </v-content>
    <vue-masonry-gallery
      :imgWidth = 500
      :maxCols = 6
      :height = 1000
      :imgsArr="JSON.parse(JSON.stringify(imgsArr))"
    ></vue-masonry-gallery> 
  </v-main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import VueMasonryGallery from "vue-masonry-gallery/vendor/VueMasonryGallery/VueMasonryGallery";
export default {
  components: {
    VueMasonryGallery,
  },
  computed: {
    ...mapState(["photos", "isLoading", "imgsArr"]),
  },
  methods: {
    ...mapActions(["getPhotos"]),
  },
  created() {
    this.getPhotos(this.$route.params.id);
    this.imgsArr = [];
  },
};
</script>

<style>
.block {
  position: absolute;
  top: 80px;
  bottom: 0;
  width: 100%;
}


</style>
