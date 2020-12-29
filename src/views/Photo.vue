<template>
  <v-main>

    <import-photo v-if="isAuth"></import-photo>
    <gallerie></gallerie>
   
    
  </v-main>
</template>

<script>
import ImportPhoto from "../components/ImportPhoto.vue";
import Gallerie from "../components/Gallerie.vue";
import { mapState} from "vuex";
export default {
  computed: {
    ...mapState(["isAuth", "token"])
  },
  data() {
    return {
      dialog: false,
    };
  },
  components: { ImportPhoto, Gallerie },
  methods: {
    
  }
  
};
</script>

<style>
.title {
  padding-top: 5%;
}
.block-gallery {
  position: absolute;
  top: 80px;
  bottom: 0;
  width: 100%;
}
</style>
