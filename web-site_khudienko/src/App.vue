<template>
  <div id="app">
    <!--header-->
    <navbar/>
    <!--slider title-->
    <!--anoncment-->
    <!--description-->
  </div>
</template>

<script>
import navbar from "./components/layouts/navbar.vue";
/* import footer from "./components/layouts/footer.vue"; */

export default {
  name: 'app',
  components: {
    navbar
    /* footer */
  },
  /* data () {
    return {
      num: 3,
      data: [],
      isPending: false
    }
  },
  methods: {
    allowRoute(){
      this.$router.push({
        name: 'Home'
      });
    }
  }, */
}
</script>

<style lang="scss" scoped>
  @import "src/scss/app.scss";
  *{
    margin: 0;
  }
</style>
