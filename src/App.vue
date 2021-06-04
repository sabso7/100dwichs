<template>
<v-app id="app-body">
    <v-container>
        <menus :key="menuKey"></menus>
    </v-container>
    <v-container id="block-gallery">
        <router-view :key="$route.fullPath"></router-view>
    </v-container>
    <v-container id="footer">
        <v-container id="logos-footer">
            <v-row justify="center">
                <span class="logo-footer">
                    <v-btn icon href="https://www.instagram.com/elodiebolatto/?hl=fr" target="_blank">
                        <v-icon x-large class="icon">mdi-instagram</v-icon>
                    </v-btn>
                </span>
                <span class="logo-footer">
                    <v-btn icon href="https://www.facebook.com/elodiebolattophotographie" target="_blank">
                        <v-icon x-large class="icon">mdi-facebook</v-icon>
                    </v-btn>
                </span>
            </v-row>
        </v-container>
        <v-footer color="grey" absolute>
            <span class="white--text">Sabso &copy; {{ new Date().getFullYear() }}</span>
            <v-spacer></v-spacer>
            <router-link to="/">
                <v-avatar v-if="isAuth" @click="logout" color="grey">
                    <v-icon dark>
                        mdi-account-circle
                    </v-icon>
                </v-avatar>
            </router-link>
            <router-link to="/backoffice">
                <v-icon>mdi-lock</v-icon>
            </router-link>
        </v-footer>
    </v-container>
</v-app>
</template>

<script>
import Menus from "./components/Menus.vue";
import {
    mapState
} from "vuex";
export default {
    computed: {
        ...mapState(["isAuth"]),
    },
    name: "App",
    components: {
        Menus,
    },
    methods: {
        logout() {
            this.$store.dispatch("logout")
        },
    },
    beforeMount() {
        this.menuKey += 1
    },
};
</script>

<style>
.block-gallery {
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    left: 0;
}

#footer {
    padding-top: 5%;
}

#logos-footer {
    margin-bottom: 5%;
    justify-content: space-between;
}

.logo-footer {
    padding: 20px;
}

::-webkit-scrollbar {
    display: none;
}

.scrollMenu{
    top: 80px;
}

.text-home-page{
    text-align: justify;
}

@media screen {}
</style>
