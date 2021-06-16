<template>
<v-btn aria-label="delete-button" color="error" icon rounded small v-if="isAuth" v-on:click="clickDeleteSousCateg(idSousCateg)">
    <v-icon class="icon">mdi-close-circle-outline</v-icon>
</v-btn>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";

export default {
    props: ['idSousCateg'],
    computed: {
        ...mapState(["isAuth"]),
    },
    methods: {
        ...mapActions(["deleteSousCateg"]),
        clickDeleteSousCateg: function (idSousCateg) {
            this.deleteSousCateg({idSousCateg});
        }
    },
};
</script>
