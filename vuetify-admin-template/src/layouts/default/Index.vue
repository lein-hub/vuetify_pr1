<template>
  <v-app>
    <default-bar @drawer="drawer = !drawer" />
    <default-drawer v-model="drawer" />
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
    DefaultBar,
    DefaultDrawer,
    DefaultView
  },
  data () {
    return {
      drawer: false,
    }
  },
}
</script>

<style lang="">

</style>
