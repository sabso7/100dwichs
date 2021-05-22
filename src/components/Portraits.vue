<template>
  <v-main>
    <v-container class="home-block">
      <v-row>
        <v-col cols="12" md="8">
          <div class="blocktext">
            <h2>Portraits</h2>
            <blockquote
              class="blockquote"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
            </blockquote>
            <v-row justify="center"><v-btn class="btn-galerie" color="dark">Galerie</v-btn></v-row>
          </div>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="d-inline-block mx-auto">
                <v-img contain class="img-carousel" src="@/assets/img/thailand-1.jpg"></v-img>
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