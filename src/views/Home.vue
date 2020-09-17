<template>
  <v-main id="home">
    <v-container>
      <v-carousel hide-delimiters :show-arrows="false" height="1000" cycle>
        <v-carousel-item><v-img id="home-img" src="@/assets/logos/chine-1.jpg"></v-img></v-carousel-item>
        <v-carousel-item><v-img id="home-img" src="@/assets/logos/chine-2.jpg"></v-img></v-carousel-item>
        <v-carousel-item><v-img id="home-img" src="@/assets/logos/chine-3.jpg"></v-img></v-carousel-item>
        <v-carousel-item><v-img id="home-img" src="@/assets/logos/chine-4.jpg"></v-img></v-carousel-item>
      </v-carousel>
    </v-container>
  </v-main>
</template>

<script>
</script>

<style lang="scss">
#home {
  margin-top: 2%;
}
</style>
