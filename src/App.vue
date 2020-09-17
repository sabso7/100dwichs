<template>
  <v-app id="appBody">
    <v-container>
      <menus></menus>
    </v-container>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-container id="footer">
       <v-footer color="grey" absolute>
         <span class="white--text">Sabso &copy; {{ new Date().getFullYear() }}</span>
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

 

</style>
