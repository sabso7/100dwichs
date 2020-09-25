<template>
  <v-main>

    <v-row justify="center" class="title">
      <h1 class="font-weight-light">{{ $route.params.name }}</h1>
    </v-row>

    <v-divider inset></v-divider>

    <description></description>

    <v-container>
     <import-photo></import-photo>
    </v-container>
    <gallerie></gallerie>
    
  </v-main>
</template>

<script>
import Description from "../components/DescriptionGallerie.vue";
import ImportPhoto from "../components/ImportPhoto.vue";
import Gallerie from "../components/Gallerie.vue";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: { Description, ImportPhoto, Gallerie },
  methods: {
    
  }
  
};
</script>

<style>
.title {
  padding-top: 5%;
}
</style>
