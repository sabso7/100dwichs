<template>
  <v-app id="appBody">
    <v-container>
      <menus></menus>
    </v-container>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="grey" app>
      <span class="white--text">Sabso &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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

  ::-webkit-scrollbar {display:none;};

</style>
