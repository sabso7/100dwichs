<template>
  <v-main>
      <h1 class="text-center">BackOffice</h1>
          <v-row>
              <v-col offset-sm="4" md="4" sm="4">
                  <form-auth></form-auth>
              </v-col>
          </v-row>
  </v-main>
</template>

<script>

import FormAuth from "../components/Auth.vue";
export default {

  components: { FormAuth },
};
</script>

<style>

</style>