<template>
<v-main>
    <v-container id="blockAuth">
        <h1 class="text-center">Login</h1>
        <v-row>
            <v-col offset-sm="2" offset-md="4" md="4" sm="8">
                <form-auth></form-auth>
            </v-col>
        </v-row>
    </v-container>
</v-main>
</template>

<script>
import FormAuth from "../components/Auth.vue";
export default {

    components: {
        FormAuth
    },
};
</script>

<style>
#blockAuth {
    padding: 80px;
}
</style>
