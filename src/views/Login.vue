<template>
<v-main>
    <v-container id="blockAuth">
        <v-card outlined>
        <v-row>
            <v-col class="pt-10" offset-md="1" md="4" sm="8">
                <h1 class="text-center">Login</h1>
                <form-auth></form-auth>
            </v-col>
            <v-col offset-md="1" md="6" sm="8">
                <v-img class="ma-5" rounded src="@/assets/banner/dwichauth.jpg" style="max-height:600px"></v-img>
            </v-col>
        </v-row>
        </v-card>
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
