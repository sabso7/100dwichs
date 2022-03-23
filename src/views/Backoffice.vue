<template>
<v-main>
    <v-container id="blockAuth">
        <h1 class="text-center">BackOffice</h1>
        <v-row justify="center">
                <list-user></list-user>
        </v-row>
    </v-container>
</v-main>
</template>

<script>
import listUser from "../components/listUser.vue";
export default {
    components: {
        listUser
    },
};
</script>

<style>
</style>
