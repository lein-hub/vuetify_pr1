<template>
  <v-navigation-drawer
    v-model="drawer"
    v-bind="$attrs"
    app
    dark
    :src="require('@/assets/sidebar.jpg')"
  >
    <template
      #img="props"
    >
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>

    <default-drawer-header />

    <v-divider />

    <default-drawer-list :items="items" />
  </v-navigation-drawer>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'DefaultDrawer',
  components: {
    DefaultDrawerHeader: () => import(/* webpackChunkName: "views-default" */'./NavHeader.vue'),
    DefaultDrawerList: () => import(/* webpackChunkName: "views-default" */'./NavList.vue'),
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState('app', ['gradient', 'items']),
    drawer: {
      get() {
        return this.$store.getters['app/getDrawer']
      },
      set(value) {
        return this.$store.dispatch('app/toggleDrawer', value)
      }
    }
  },
}
</script>
