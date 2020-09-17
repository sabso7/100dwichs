<template>
  <v-main>
       <v-container class="home-block">
      <v-row>
        <v-col cols="6" md="4">
          <v-card id="carousel-card" class="d-inline-block mx-auto">
            <v-carousel hide-delimiters show-arrows-on-hover>
              <v-carousel-item>
                <v-img contain class="img-carousel" src="@/assets/img/canada-2.jpg"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img contain class="img-carousel" src="@/assets/img/canada-3.jpg"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img contain class="img-carousel" src="@/assets/img/canada-4.jpg"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img contain class="img-carousel" src="@/assets/img/canada-5.jpg"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img contain class="img-carousel" src="@/assets/img/canada-6.jpg"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <div class="blocktext">
            <h2>Reportages</h2>
            <blockquote class="blockquote">
Mes photos reflètent mes expériences vécues, à la rencontre des locaux.
En m’imprégnant des cultures et modes de vie, je capte les détails, l'atmosphère et les émotions.
Je souhaite faire partager et témoigner de ces expériences uniques avec vous.
            </blockquote>
            <v-row justify="center"><v-btn class="btn-galerie" color="dark">Galerie</v-btn></v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>