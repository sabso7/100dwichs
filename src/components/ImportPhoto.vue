<template>
  <v-main>
    <v-form @submit.prevent>
      <v-select
      class="champ-form"
        v-model="select"
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
      <v-file-input  label="File input" filled prepend-icon="mdi-camera"></v-file-input>
      </v-container>
      <v-btn @click="importPhoto">click</v-btn>
    </v-form>
  </v-main>
</template>

<script>

import { mapActions, mapState } from "vuex";
export default {
  data: () =>({
    select: null,
    selectSouscategorie: null,
    sousCategorie: null
  }),
  computed: {
    ...mapState(["categorie"]),
  },
  methods: {
    ...mapActions(["getCategorie", "importPhoto"]),
    getSousCategorie(event){
      this.sousCategorie = event;
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
