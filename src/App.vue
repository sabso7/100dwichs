<template>
  <v-app id="app-body">
    <v-container>
      <menus :key="menuKey"></menus>
    </v-container>
    <v-container id="block-gallery">
      <router-view :key="$route.fullPath"></router-view>
    </v-container>
    
    <v-container id="footer">
       <v-footer color="grey" absolute>
         <span class="white--text">Sabso &copy; {{ new Date().getFullYear() }}</span>
         <v-spacer></v-spacer>
         <router-link to="/backoffice"><v-icon>mdi-lock</v-icon></router-link>
       </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import Menus from "./components/Menus.vue";
export default {
  data () {
    return {
      menuKey: 0,
    };
  },
  name: "App",
  components: { Menus },
  beforeMount() {
    this.menuKey += 1
  },
};
</script>

<style>

.block-gallery {
  position: absolute;
  top: 80px;
  bottom: 0;
  width: 100%;
  left: 0;
}

  #footer{
      padding-top: 10%;
  }

  ::-webkit-scrollbar {display:none;};

  @media screen {
    
  }
</style>
