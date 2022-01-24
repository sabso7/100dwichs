<template>
<v-main>
    <v-row align="center" justify="center">
        <p class="font-comfortaa ma-8" style="font-size:1.5em;"><span style="font: 400 30px system-ui;">100'dwich</span> est le premier réseau social tourné vers le sandwich </p>
    </v-row>
    <v-row align="center" justify="center">
        <p class="font-comfortaa" style="font-size:1.5em;">Ici vous pouvez trouver des idées 100% originales et partager vos meilleures recettes</p>
    </v-row>
    <v-row>
        <v-col cols="6">
            <v-row align="center" justify="center">
                <span class="compteur" id="compteurCateg" ref="compteurCateg">{{counterCateg}}</span>
            </v-row>
            <br>
            <v-row align="center" justify="center">
                <p class="font-comfortaa"> recettes postées</p>
            </v-row>
        </v-col>
        <v-col cols="6">
            <v-row align="center" justify="center">
                <span class="compteur" id="compteurUser" ref="compteurUser">{{counterUser}}</span>
            </v-row>
            <br>
            <v-row align="center" justify="center">
                <p class="font-comfortaa">'dwicheurs inscrits</p>
            </v-row>
        </v-col>
    </v-row>
</v-main>
</template>

<script>
import {
    mapState,
} from "vuex";
export default {
    methods: {
        animateCompteur: function (obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    },
    computed: {
        ...mapState(["counterCateg","counterUser"]),
    },
    watch: {
        counterCateg: function () {
            const obj = document.getElementById("compteurCateg");
            this.animateCompteur(obj, 0, this.counterCateg, 2000);
        },
        counterUser: function () {
            const obj = document.getElementById("compteurUser");
            this.animateCompteur(obj, 0, this.counterUser, 2000);
        },
    },
};
</script>

<style>
.compteur {
    font: 800 40px system-ui;
}
</style>
