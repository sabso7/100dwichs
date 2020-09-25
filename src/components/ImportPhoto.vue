<template>
  <v-main>
    <v-row justify="center">
      <v-btn color="blue" dark @click.stop="dialog = true">
        <v-icon class="icon">mdi-image-plus</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline"> Ajouter une photo:</v-card-title>
          <v-card-text>
            <v-form
              @submit.prevent="
                addPhoto(selectCategorie, selectSouscategorie, file)
              "
            >
              <v-select
                class="champ-form"
                v-model="selectCategorie"
                :items="categorie"
                label="Menu"
                item-text="nomCategorie"
                return-object
                required
                @input="getSousCategorie"
              ></v-select>
              <v-select
                v-if="sousCategorie"
                class="champ-form"
                v-model="selectSouscategorie"
                :items="sousCategorie.sousCategories"
                label="SousMenu"
                item-text="nomSouscategorie"
                return-object
                required
              ></v-select>
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
import { mapActions, mapState } from "vuex";
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
    ...mapState(["categorie"]),
  },
  methods: {
    ...mapActions(["getCategorie"]),
    getSousCategorie(event) {
      this.sousCategorie = event;
    },
    addPhoto(categ, sousCateg, file) {
      this.$store.dispatch("addPhoto", { categ, sousCateg, file });
    },
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
