<template>
  <v-main>
      <h1 class="text-center">BackOffice</h1>
          <v-row>
              <v-col offset-sm="4" md="4" sm="4">
                  <import-photo></import-photo>
              </v-col>
          </v-row>
  </v-main>
</template>

<script>
import ImportPhoto from "../components/ImportPhoto.vue";
export default {

  components: { ImportPhoto },
};
</script>

<style>

</style>