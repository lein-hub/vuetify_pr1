<template>
  <v-app>
    <default-bar />
    <default-drawer />
    <v-fade-transition>
      <default-view />
    </v-fade-transition>
  </v-app>
</template>

<script>
import DefaultBar from './AppBar.vue'
import DefaultDrawer from './NavDrawer.vue'
import DefaultView from './View.vue'

export default {
  name: 'DefaultLayout',
  components: {
    DefaultBar: () => import(/* webpackChunkName: "views-default" */'./AppBar.vue'),
    DefaultDrawer: () => import(/* webpackChunkName: "views-default" */'./NavDrawer.vue'),
    DefaultView: () => import(/* webpackChunkName: "views-default" */'./View.vue')
  },
  data () {
    return {

    }
  },
}
</script>

<style lang="">

</style>
