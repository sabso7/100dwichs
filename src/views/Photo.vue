<template>
  <v-main>
    <v-row justify="center" class="title"
      ><h1 class="font-weight-light">{{ $route.params.name }}</h1></v-row
    >
    <p>test{{photos}}</p>
    <v-divider inset></v-divider>
    <description></description>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-container fluid>
          <v-row>
            <v-col v-for="n in 12" :key="n" class="d-flex child-flex" cols="4">
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
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
import Description from "../components/DescriptionGallerie.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { Description },
  computed: {
    ...mapState(["photos", "isLoading"]),
  },
  methods: {
    ...mapActions(["getPhotos"]),
  },
  beforeMount() {
    this.getPhotos(this.$route.params.id);
  },
  
};
</script>

<style>
.title {
  padding-top: 5%;
}
</style>
