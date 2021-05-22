<template>
  <v-main>
    <gallerie :key="refresh"></gallerie>
  </v-main>
</template>

<script>
import Gallerie from "../components/Gallerie.vue";
import { mapState} from "vuex";
export default {
  computed: {
    ...mapState(["isAuth", "token", "refresh", "isLoading"])
  },
  data() {
    return {
      dialog: false,
    };
  },
  components: { Gallerie }, 
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
