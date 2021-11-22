<template>
<v-main>
    <v-row>
    <div id="compteur" ref="compteur">100</div> <p>Recettes</p>
    </v-row>
</v-main>
</template>

<script>
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
    mounted() {
        const obj = document.getElementById("compteur");
        console.log(this.$refs.compteur)
        this.animateCompteur(obj, 0, 100, 10000);
    },
};
</script>

<style>
#compteur {
    font: 800 40px system-ui;
}
</style>
