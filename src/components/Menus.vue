<template>
<v-container fluid>
    <v-app-bar id="block_menu" flat color="white" fixed>
        <router-link v-bind="size" to="/">
            <v-img transition="slide-x-transition" id="logo-navbar" src="@/assets/logos/logo-1.png">
            </v-img>
        </router-link>
        <v-spacer></v-spacer>
        <v-progress-circular v-if="isLoading == true" indeterminate color="blue"></v-progress-circular>
        <div class="linkMenu" v-for="cat in categorie" v-bind:key="cat.nomCategorie">
            <v-menu transition="slide-x-reverse-transition" v-if="cat.sousCategories.length" open-on-hover offset-y>
                <template v-slot:activator="{ on }">
                    <router-link to="/">
                        <v-btn @click="scroll(cat.nomCategorie)" text color="dark" v-bind="size" v-on="on">{{cat.nomCategorie}}</v-btn>
                    </router-link>
                </template>
            </v-menu>
        </div>
        <router-link to="/">
            <v-btn @click="scroll('content_about')" v-bind="size" text color="dark">à propos</v-btn>
        </router-link>
        <router-link to="/">
            <v-btn @click="scroll('content_contact')" v-bind="size" text color="dark">contact</v-btn>
        </router-link>
        <v-spacer></v-spacer>
    </v-app-bar>
</v-container>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";
export default {
    data() {
        return {
            iconbarKey: 0,
            collapseOnScroll: true,
            drawer: true,
            mini: true,
        };
    },
    computed: {
        ...mapState(["categorie", "isLoading", "isAuth", "token"]),
        size() {
            const size = {
                xs: "x-small",
                sm: "small",
                lg: "large",
                xl: "x-large"
            } [
                this.$vuetify.breakpoint.name
            ];
            return size ? {
                [size]: true
            } : {};
        },
    },
    methods: {
        ...mapActions(["getCategorie"]),
        scroll: function (id) {
            if (this.$route.name === 'Home') {
                setTimeout(document.getElementById(id).scrollIntoView({
                    behavior: "smooth",
                }), 1000);
            }
        }
    },
    beforeMount() {
        this.getCategorie();
    },
};
</script>

<style lang="scss">
#logo-navbar {
    max-width: 100px;
    max-height: 50px;
}

.v-toolbar__content {
    margin-top: 5px;
}

.v-toolbar__content {
    padding-bottom: 400px;
}
</style>
