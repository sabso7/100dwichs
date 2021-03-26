<template>
  <v-main>
    <v-content id="block">
      <v-row justify="center">
      <h1 class="font-weight-light">{{ $route.params.name }}</h1>
      </v-row>
      <v-divider inset></v-divider>
    </v-content>
    <v-container>
    <masonry
      :gutter="{ default: '20px', 700: '10px' }"
      :cols="{ default: 2, 1000: 2, 700: 2, 500: 1 }"
    >
      <v-card
        v-for="item in JSON.parse(JSON.stringify(imgsArr))"
        :key="item.id"
        class="mt-2 mb-2"
        color="blue lighten-3"
      >
        <v-img :src="item.src"></v-img>
      </v-card>
    </masonry>
  </v-container>
  </v-main>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  components: {
  },
  computed: {
    ...mapState(["photos", "isLoading", "imgsArr"]),
  },
  methods: {
    ...mapActions(["getPhotos"]),
  },
  created() {
    this.getPhotos(this.$route.params.id);
    this.imgsArr.splice(0);
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
