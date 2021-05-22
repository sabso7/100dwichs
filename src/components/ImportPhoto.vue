<template>
  <v-main>
    <v-alert
      dense
      outlined
      type="error"
      v-if="error !== null"
    >
      {{error}}
    </v-alert>
    <v-row justify="center">
      <v-btn color="blue" dark @click.stop="dialog = true">
        <v-icon class="icon">mdi-image-plus</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline"></v-card-title>
          <v-card-text>
            <v-form
              @submit.prevent="
                addPhoto($route.params.id,file)
              "
            >
              <v-container class="champ-form">
                <v-file-input
                  v-model="file"
                  label="File input"
                  accept="image/*"
                  filled
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-container>
              <v-card-actions>  
                <v-row align="center" justify="center">
                <v-btn  color="blue darken-1" text @click="dialog = false" type="submit">Ajouter</v-btn>
                </v-row>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-main>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  data: () => ({
    select: null,
    selectSouscategorie: null,
    selectCategorie: null,
    sousCategorie: null,
    file: null,
    dialog: null,
  }),
  computed: {
    ...mapState(["categorie","error","refresh"]),
  },
  methods: {
    ...mapActions(["getCategorie", "getPhotos"]),
    ...mapMutations(["setIsLoading"]),
    getSousCategorie(event) {
      this.sousCategorie = event;
    },
    addPhoto(sousCateg, file) {
      this.setIsLoading;
      this.$store.dispatch("addPhoto", { sousCateg, file });
    }
  },
  beforeMount() {
    this.getCategorie();
  },
};
</script>

<style>
.champ-form {
  padding: 20px;
}
</style>
