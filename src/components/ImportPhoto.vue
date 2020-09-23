<template>
  <v-main>
    <v-form @submit.prevent="addPhoto(selectCategorie,selectSouscategorie,file)">
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
      <v-select v-if="sousCategorie"
      class="champ-form"
        v-model="selectSouscategorie"
        :items="sousCategorie.sousCategories"
        label="SousMenu"
        item-text="nomSouscategorie"
        return-object
        required
      ></v-select>
      <v-container class="champ-form">
      <v-file-input v-model="file" label="File input" filled prepend-icon="mdi-camera"></v-file-input>
      </v-container>
      <v-btn type="submit">click</v-btn>
    </v-form>
  </v-main>
</template>

<script>

import { mapActions, mapState } from "vuex";
export default {
  data: () =>({
    select: null,
    selectSouscategorie: null,
    selectCategorie: null,
    sousCategorie: null,
    file: null
  }),
  computed: {
    ...mapState(["categorie"]),
  },
  methods: {
    ...mapActions(["getCategorie"]),
    getSousCategorie(event){
      this.sousCategorie = event;
    },
    addPhoto(categ,sousCateg,file){
      this.$store.dispatch('addPhoto',{categ,sousCateg,file})
    }
  },
  beforeMount() {
    this.getCategorie();
  },
};


</script>

<style>

.champ-form{
  padding: 20px;
}

</style>
