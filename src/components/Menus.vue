<template>
<v-container fluid>
  <v-toolbar dense flat light >
    <v-row>
      <router-link to="/">
        <v-img v-bind="size" id="logo-navbar" lazy-src="@/assets/logos/logo-1.png" src="@/assets/logos/logo-1.png">
        </v-img>
      </router-link>
    </v-row>
    <v-progress-circular v-if="isLoading == true"  indeterminate color="blue"></v-progress-circular>
    <div class="linkMenu" v-for="cat in categorie" v-bind:key="cat.nomCategorie">
      <v-menu v-if="cat.sousCategories.length" open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text color="dark" v-bind="size" v-on="on">{{cat.nomCategorie}}</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(sscat, index) in cat.sousCategories" :key="index">
            <v-list-item-title class="align-content-center">
              <v-btn
                text
                small
                color="dark"
                :to="{ path: '/galerie/' + sscat.nomSouscategorie + '/' + sscat.id }"
              >{{ sscat.nomSouscategorie }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-btn v-bind="size" text color="dark" to="/about">à propos</v-btn>
    <v-btn v-bind="size" text color="dark" to="/contact">contact</v-btn>
    <v-avatar :key="iconbarKey" v-if="isAuth" @click="logout" color="primary" size="56"><v-icon dark>
        mdi-account-circle
      </v-icon></v-avatar>
  </v-toolbar>
</v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data () {
    return {
      iconbarKey: 0,
    };
  },
  computed: {
    ...mapState(["categorie", "isLoading", "isAuth", "token"]),
    size() {
      const size = { xs: "x-small", sm: "small", lg: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
  },
  methods: {
    ...mapActions(["getCategorie"]),
    logout() {
        this.$store.dispatch("logout")
    }
  },
  beforeMount() {
    this.getCategorie();
  },
};
</script>

<style lang="scss">
#logo-navbar {
  max-width: 100px;
  max-height: 50px;
}
</style>
