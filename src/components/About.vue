<template>
  <v-main>
    <v-container class="home-block">
      <v-row>
        <v-col cols="12" md="8">
          <div class="blocktext">
            <h2>A Propos</h2>
            <blockquote class="blockquote">
            Originaire d'Annecy, j'étudie la photographie à Lyon.<br><br>
Mon diplôme en poche, je décide de partir à l'aventure, seule, avec comme objectif d'allier mes 3 passions :<br>
la photographie, le voyage et l'agriculture.<br>
J'expérimente pour la première fois le Wwoofing, volontariat dans des fermes biologiques. Cette façon de voyager devient rapidement un hobby.
Je multiplie les rencontres et les expériences en parcourant la Russie, Chine, Thaïlande, Népal, Nouvelle Zélande, Inde, Japon et Amérique centrale.
En 2015, je pose mes valises à Paris et travaille en tant que retoucheuse photo aux Éditions Jalou (Jalouse, l'Officiel de la Mode...).
Les voyages m'ont ouvert l'esprit et m'ont permis aujourd'hui de lancer mon entreprise avec mes valeurs qui sont : le partage, l'expérience et la créativité.
C'est dans cette démarche simple et humaine que je souhaite créer de nouvelles rencontres et de belles images avec vous.
            
            
            </blockquote>
          </div>
        </v-col>
        <v-col cols="6" md="4">
          <v-card id="carousel-card" class="d-inline-block mx-auto">
            <v-carousel hide-delimiters show-arrows-on-hover show-arrows="true" cycle>
              <v-carousel-item>
                <v-img contain class="img-carousel" src="@/assets/img/thailand-1.jpg"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style>
</style>