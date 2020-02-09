<template>
  <div id="app">
    <navbar/>
    <announcement/>
    <content-block/>
    <foot/>
  </div>
</template>

<script>
import navbar from "./components/layouts/navbar.vue";
import announcement from "./components/modules/announcement.vue";
import contentBlock from "./components/modules/content-block.vue";
import foot from "./components/layouts/footer.vue";

export default {
  name: 'app',
  components: {
    navbar,
    announcement,
    contentBlock,
    foot
  },
  /* data () {
    return {
      num: 3,
      data: [],
      isPending: falsenpm
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
