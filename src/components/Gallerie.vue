<template>
<v-main>
    <v-main id="block">
        <v-row justify="center">
            <h1 class="font-weight-light" id="title-gallery">{{ $route.params.name }}</h1>
        </v-row>
        <v-divider inset></v-divider>
    </v-main>
    <v-container>
        <import-photo v-if="isAuth"></import-photo>
        <v-row justify="center">
            <v-progress-circular v-if="isLoading == true" indeterminate color="blue"></v-progress-circular>
        </v-row>
        <masonry :gutter="{ default: '10px', 700: '10px' }" :cols="{ default: 2, 700: 2, 500: 2, 300: 1 }">
            <v-card v-for="item in JSON.parse(JSON.stringify(imgsArr))" :key="item.id" class="mt-2 mb-2" outlined color="transparent">
                <v-main>
                    <v-row justify="center">
                        <v-btn id="delete-btn" v-if="isAuth" v-on:click="clickDeletePhoto(item.id)">
                            <v-icon class="icon">mdi-delete</v-icon>
                        </v-btn>
                    </v-row>
                </v-main>
                <v-img :src="item.src" lazy-src="https://picsum.photos/id/11/100/60">
                    <template v-slot:placeholder>
                        <v-row align="center" justify="center">
                            <v-progress-circular indeterminate color="black"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-card>
        </masonry>
    </v-container>
</v-main>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";
import ImportPhoto from "../components/ImportPhoto.vue";

export default {
    components: {
        ImportPhoto
    },
    computed: {
        ...mapState(["isAuth", "photos", "isLoading", "imgsArr"]),
    },
    methods: {
        ...mapActions(["getPhotos", "deletePhoto"]),
        clickDeletePhoto: function (idPhoto) {
            this.deletePhoto(idPhoto);
        }
    },
    created() {
        this.getPhotos(this.$route.params.id);
        this.imgsArr.splice(0);
    },
};
</script>

<style>
.block {
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
}

#delete-btn {
    margin: 5%;
}

#title-gallery {
    text-transform: capitalize;
    padding-top: 50px;
}
</style>
