<template>
  <v-app>
    <page-bar />
    <page-view />
  </v-app>
</template>

<script>
import PageBar from './AppBar.vue'
import PageView from './View.vue'

export default {
  name: 'PageLayout',
  components: {
    PageBar: () => import(/* webpackChunkName: "views-page" */'./AppBar.vue'),
    PageView: () => import(/* webpackChunkName: "views-page" */'./View.vue')
  }
}
</script>

<style lang="">

</style>
