<template>
  <v-main>
      <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-container fluid>
          <v-row align="center" justify="center">
              <v-progress-circular v-if="isLoading == true"  indeterminate color="blue"></v-progress-circular>
          </v-row>
          <v-row>
            <v-col
              v-for="photo in photos"
              :key="photo.id"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                
                <v-img
                  :src="'https://127.0.0.1:8000/photos/' + photo.filePath"
                  :lazy-src="'https://127.0.0.1:8000/photos/' + photo.filePath"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["photos", "isLoading"]),
  },
  methods: {
    ...mapActions(["getPhotos"]),
  },
  beforeMount() {
    this.getPhotos(this.$route.params.id);
  },

}
</script>

<style>

</style>