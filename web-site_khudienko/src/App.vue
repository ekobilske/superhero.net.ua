<template>
  <div id="app">
    <!--header-->
    <navbar/>
    <!--anoncment-->
    <announcement/>
    <!--description-->
  </div>
</template>

<script>
import navbar from "./components/layouts/navbar.vue";
import announcement from "./components/modules/announcement.vue";
/* import footer from "./components/layouts/footer.vue"; */

export default {
  name: 'app',
  components: {
    navbar,
    announcement
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

<style  scoped lang="scss">
  @import "src/scss/app.scss";
</style>
