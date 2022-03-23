<template>
<v-main>
    <v-alert dense outlined type="error" v-if="error !== null">
        {{error}}
    </v-alert>
    <v-row justify="center">
        <v-btn color="blue" dark @click.stop="dialog = true">
            <v-icon class="icon">mdi-image-plus</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="headline"></v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="
                addPhoto($route.params.id,file)
              ">
                        <v-container class="champ-form">
                            <v-file-input v-model="file" label="File input" accept="image/*" filled prepend-icon="mdi-camera"></v-file-input>
                            <br>
                            <v-textarea v-model="descriptionPhoto" label="descriptionPhoto" required></v-textarea>
                        </v-container>
                        <v-card-actions>
                            <v-row align="center" justify="center">
                                <v-btn color="#80AA5E" dark class="mr-4" type="submit" @click="dialog = false">Ajouter</v-btn>
                            </v-row>
                        </v-card-actions>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</v-main>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";
export default {
    data: () => ({
        select: null,
        selectSouscategorie: null,
        selectCategorie: null,
        sousCategorie: null,
        file: null,
        dialog: null,
        descriptionPhoto: '',
        photoLoader: null
    }),
    computed: {
        ...mapState(["categorie", "error"]),
    },
    methods: {
        ...mapActions(["getCategorie", "getPhotos"]),
        addPhoto(sousCateg, file) {
            let description = this.descriptionPhoto;
            this.$store.dispatch("addPhoto", {
                sousCateg,
                file,
                description
            });
        }
    },
    beforeMount() {
        this.getCategorie();
    },
};
</script>

<style>
.champ-form {
    padding: 20px;
}
</style>
