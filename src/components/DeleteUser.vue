<template>
<v-btn title="Supprimer l'utilisateur" aria-label="delete-button" color="error" icon rounded small v-if="isAuth" v-on:click="clickDeleteUser(idUser)">
    <v-icon class="icon">mdi-close-circle-outline</v-icon>
</v-btn>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";

export default {
    props: ['idUser'],
    computed: {
        ...mapState(["isAuth"]),
    },
    methods: {
        ...mapActions(["deleteUser"]),
        clickDeleteUser: function (idUser) {
            console.log(idUser)
            this.deleteUser({idUser});
        }
    },
};
</script>