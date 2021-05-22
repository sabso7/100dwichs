<template>
  <v-main>
    <v-container class="home-block">
      <v-row>
        <v-col cols="12" md="8">
          <div class="blocktext">
            <h2>À Propos</h2>
            <blockquote class="blockquote">
            Originaire d'Annecy, j'étudie la photographie à Lyon.
Mon diplôme en poche, je décide de partir à l'aventure, seule, avec comme objectif d'allier mes 3 passions :
 <b>photographie</b>, <b>voyage</b> et <b>agriculture</b>.
J'expérimente pour la première fois le Wwoofing, volontariat dans des fermes biologiques. Cette façon de voyager devient rapidement un hobby.
Je multiplie les rencontres et les expériences en parcourant : <b>Russie</b>, <b>Chine</b>, <b>Thaïlande</b>, <b>Népal</b>, <b>Nouvelle Zélande</b>, <b>Inde</b>, <b>Japon</b> et <b>Amérique centrale</b>.
En 2015, je pose mes valises à Paris et travaille en tant que retoucheuse photo aux Éditions Jalou (Jalouse, l'Officiel de la Mode...).
Les voyages m'ont <b>ouvert l'esprit</b> et m'ont permis aujourd'hui de lancer mon entreprise avec mes valeurs qui sont : le <b>partage</b>, <b>l'expérience</b> et la <b>créativité</b>.
C'est dans cette démarche simple et humaine que je souhaite créer de nouvelles rencontres et de belles images avec vous.
            </blockquote>
          </div>
        </v-col>
        <v-col cols="6" md="4">
          <v-hover
            v-slot="{ hover }"
            open-delay="50"
          >
          <v-card id="carousel-card" class="d-inline-block mx-auto photo_about" :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }">
                 <v-img src="@/assets/img/elodie_photo.jpeg"></v-img>
          </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style>

a{
  text-decoration: none;
}

.photo_about{
  margin-top: 100px;
}


</style>