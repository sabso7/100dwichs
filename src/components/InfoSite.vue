<template>
<v-container class="home-block" fluid>
   <v-row justify="center">
       <p class="mb-9">Inscrivez-vous et postez vos recettes</p>
   </v-row>
   <v-row justify="center">
       <create-user></create-user>
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
