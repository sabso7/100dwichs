<template>
<div v-if="$mq == 'sm'">
    <v-container class="littlenav">
        <v-row no-gutters>
            <v-col cols="3" id="icon_drawer" align="center">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </v-col>
            <v-col>
                <router-link aria-label="go to home page" to="/">
                   Home
                </router-link>
            </v-col>
        </v-row>
        <v-row>
            <v-col id="dividerSmallBar">
                <v-divider></v-divider>
            </v-col>
        </v-row>
    </v-container>
    <v-navigation-drawer id="navDrawer" v-model="drawer" app fixed>
        <v-list id="listDrawer">
            <v-list-item-group v-model="group">
                <v-list-item>
                    <v-list-item-title>
                        <v-progress-circular v-if="isLoading == true" indeterminate color="blue"></v-progress-circular>
                    </v-list-item-title>
                </v-list-item>
                <div class="linkMenu" v-for="cat in categorie" v-bind:key="cat.nomCategorie">
                    <v-list-item>
                        <v-list-item-title>
                            <router-link to="/">
                                <v-btn @click="scroll(cat.nomCategorie)" text color="dark" v-bind="size">{{cat.nomCategorie}}</v-btn>
                            </router-link>
                        </v-list-item-title>
                    </v-list-item>
                </div>
                <v-list-item>
                    <v-list-item-title>
                        <router-link to="/">
                            <v-btn @click="scroll('content_about')" v-bind="size" text color="dark">à propos</v-btn>
                        </router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <router-link to="/">
                            <v-btn @click="scroll('content_contact')" v-bind="size" text color="dark">contact</v-btn>
                        </router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <create-categ></create-categ>
                    </v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</div>
<v-app-bar v-else id="block_menu" fixed flat dense color="rgba(0, 0, 0, 0)">
    <router-link aria-label="go to home page" to="/">
        <span class="span_logo"></span>
    </router-link>
    <v-spacer></v-spacer>
    <v-progress-circular v-if="isLoading == true" indeterminate color="blue"></v-progress-circular>
    <div class="linkMenu" v-for="cat in categorie" v-bind:key="cat.nomCategorie">
        <router-link to="/">
            <v-btn @click="scroll(cat.nomCategorie)" text color="dark" v-bind="size">{{cat.nomCategorie}}</v-btn>
        </router-link>
    </div>
    <router-link to="/">
        <v-btn @click="scroll('content_contact')" v-bind="size" text color="dark">contact</v-btn>
    </router-link>
    <v-spacer></v-spacer>
</v-app-bar>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";

export default {
    data() {
        return {
            drawer: false,
            group: null,
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
    watch: {
        group() {
            this.drawer = false
        },
    },
};
</script>

<style lang="scss">
#logoNavbar {
    max-width: 100px;
    max-height: 50px;
}

#logoNavBarSmall {
    max-width: 200px !important;
    max-height: 200px !important;
    padding: 0px !important;
}

#dividerSmallBar {
    padding: 0px !important;
}

.v-toolbar__content {
    margin-top: 5px;
}

#navDrawer {
    max-width: 130px;
    padding-top: 80px;
    position: absolute;
}

.littlenav {
    position: absolute;
    position: fixed;
    z-index: 1000;
    background-color: white;
    top: 0px;
    padding: 0px !important;
}

#icon_drawer{
    padding-top: 30px ;
}

</style>
