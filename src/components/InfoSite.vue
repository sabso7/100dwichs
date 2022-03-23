<template>
<v-container class="home-block" fluid>
   <v-row justify="center">
       <p class="mb-9">Partagez vos meilleures recettes de sandwichs</p>
   </v-row>
   <v-row justify="center">
       <create-user></create-user>
        <v-btn rounded aria-label="create-button" class="ml-8" color="#A48D79" dark to="/login">
               se connecter
        </v-btn>
   </v-row>
</v-container>
</template>

<script>

import CreateUser from './CreateUser.vue';
export default {
    components: {
        CreateUser
    },
}
</script>
