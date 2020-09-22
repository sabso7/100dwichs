<template>
  <v-app id="app-body">
    <v-container>
      <menus></menus>
    </v-container>
   
      <router-view></router-view>
    
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
  name: "App",
  components: { Menus }
};
</script>

<style>

  #footer{
      padding-top: 10%;
  }

  ::-webkit-scrollbar {display:none;};

  @media screen {
    
  }
</style>
