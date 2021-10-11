<template>
<v-btn title="Supprimer la catégorie" aria-label="delete-button" color="error" rounded v-if="isAuth" v-on:click="clickDeleteCateg(idCateg)">
    <v-icon class="icon">mdi-close-circle-outline</v-icon>Supprimer cette catégorie
</v-btn>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";

export default {
    props: ['idCateg'],
    computed: {
        ...mapState(["isAuth"]),
    },
    methods: {
        ...mapActions(["deleteCateg"]),
        clickDeleteCateg: function (idCateg) {
            this.deleteCateg({idCateg});
        }
    },
};
</script>