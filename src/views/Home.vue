<template>
  <v-main>
    <div v-for="cat in categorie"  v-bind:key="cat.nomCategorie">
      <p>{{cat.nomCategorie}}</p>
    </div>
    <v-btn @click="getCategorie">Increment</v-btn>
  </v-main>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['categorie'])
    },
    methods: {
        ...mapActions(['getCategorie'])
    },
    beforeMount(){
        this.getCategorie()
    },
}


</script>
