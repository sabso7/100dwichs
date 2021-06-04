<template>
<v-container v-if="show">
    <v-navigation-drawer class="scrollMenu" style="background-color: transparent;" fixed floating permanent width="120">
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
    </v-navigation-drawer>
</v-container>
</template>

<script>
import {
    mapState,
} from "vuex";
export default {
    data() {
        return {
            show: false,
        }
    },
    computed: {
        ...mapState(["categorie", "isLoading"]),
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
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        scroll: function (id) {
            setTimeout(document.getElementById(id).scrollIntoView({
                behavior: "smooth",
                block: "start"
            }), 1000);
        },
        onScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition > 0) {
                this.show = true;
            } else {
                this.show = false;
            }
        }
    },
};
</script>
<style scoped>

.scrollMenu{
   padding-top: 160px;
}

</style>
