<template>
  <v-toolbar dense flat light collapse-on-scroll>

    <v-row>
      <router-link to="/">
        <v-img id="logo-navbar" src="@/assets/logos/logo-1.png"></v-img>
      </router-link>
    </v-row>
    
    <div class='linkMenu' v-for="cat in categorie" v-bind:key="cat.nomCategorie">
      <v-menu v-if="cat.sousCategories.length" open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on">{{cat.nomCategorie}}</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(sscat, index) in cat.sousCategories" :key="index">
            <v-list-item-title>
              <v-btn :to="{ path: '/galerie/' + sscat.nomSouscategorie }">{{ sscat.nomSouscategorie }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["categorie"]),
  },
  methods: {
    ...mapActions(["getCategorie"]),
  },
  beforeMount() {
    this.getCategorie();
  },
};
</script>

<style lang="scss">

.linkMenu {
  padding: 1%;
}

#logo-navbar {
  max-width: 100px;
  max-height: 50px;
}
</style>
