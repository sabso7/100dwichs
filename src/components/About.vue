<template>
<v-main>
    <v-container class="home-block" fluid>
        <v-row justify="center">
            <div style="padding:20px" class="overline text-h5 text-sm-h5 mb-4">À Propos</div>
        </v-row>
        <v-container v-if="$mq == 'lg'" fluid>
            <v-row>
                <v-col cols="6" md="4" offset-md="1">
                    <v-img src="@/assets/img/singe_thailand.jpg"></v-img>
                </v-col>
                <v-col cols="5" md="5" offset-md="1">
                    <section id="paragraphs">
                        <v-row>
                            <p class="font-weight-light home_block_text text-home-page"> Originaire d'Annecy, j'étudie la photographie à Lyon.
                                Mon diplôme en poche, je décide de partir à l'aventure, seule, avec comme objectif d'allier mes 3 passions :
                                <b>photographie</b>, <b>voyage</b> et <b>agriculture</b>.
                                J'expérimente pour la première fois le Wwoofing, volontariat dans des fermes biologiques. Cette façon de voyager devient rapidement un hobby.
                                Je multiplie les rencontres et les expériences en parcourant : <b>Russie</b>, <b>Chine</b>, <b>Thaïlande</b>, <b>Népal</b>, <b>Nouvelle Zélande</b>, <b>Inde</b>, <b>Japon</b> et <b>Amérique centrale</b>.
                                En 2015, je pose mes valises à Paris et travaille en tant que retoucheuse photo aux Éditions Jalou (Jalouse, l'Officiel de la Mode...).
                                Les voyages m'ont <b>ouvert l'esprit</b> et m'ont permis aujourd'hui de lancer mon entreprise avec mes valeurs qui sont : le <b>partage</b>, <b>l'expérience</b> et la <b>créativité</b>.
                                C'est dans cette démarche simple et humaine que je souhaite créer de nouvelles rencontres et de belles images avec vous.
                            </p>
                        </v-row>
                    </section>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-else  fluid>
                <v-row justify="center">
                    <v-img src="@/assets/img/singe_thailand.jpg"></v-img>
                </v-row>
                <div>
                    <section id="paragraphs">
                        <v-row>
                            <p class="font-weight-light home_block_text text-home-page"> Originaire d'Annecy, j'étudie la photographie à Lyon.
                                Mon diplôme en poche, je décide de partir à l'aventure, seule, avec comme objectif d'allier mes 3 passions :
                                <b>photographie</b>, <b>voyage</b> et <b>agriculture</b>.
                                J'expérimente pour la première fois le Wwoofing, volontariat dans des fermes biologiques. Cette façon de voyager devient rapidement un hobby.
                                Je multiplie les rencontres et les expériences en parcourant : <b>Russie</b>, <b>Chine</b>, <b>Thaïlande</b>, <b>Népal</b>, <b>Nouvelle Zélande</b>, <b>Inde</b>, <b>Japon</b> et <b>Amérique centrale</b>.
                                En 2015, je pose mes valises à Paris et travaille en tant que retoucheuse photo aux Éditions Jalou (Jalouse, l'Officiel de la Mode...).
                                Les voyages m'ont <b>ouvert l'esprit</b> et m'ont permis aujourd'hui de lancer mon entreprise avec mes valeurs qui sont : le <b>partage</b>, <b>l'expérience</b> et la <b>créativité</b>.
                                C'est dans cette démarche simple et humaine que je souhaite créer de nouvelles rencontres et de belles images avec vous.
                            </p>
                        </v-row>
                    </section>
                </div>
        </v-container>
    </v-container>
</v-main>
</template>

<script>
export default {};
</script>

<style>
.home_block_text {
    text-align: justify;
    text-justify: inter-word;
    margin-right: 20px ;
    margin-top: 50px;
}
</style>
