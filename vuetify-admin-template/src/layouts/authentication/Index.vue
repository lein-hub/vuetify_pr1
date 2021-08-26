<template>
  <v-app>
    <v-fade-transition>
      <authentication-view />
    </v-fade-transition>
  </v-app>
</template>

<script>
import AuthenticationView from './View.vue'

export default {
  name: 'AuthenticationLayout',
  components: {
    AuthenticationView: () => import(/* webpackChunkName: "views-authentication" */'./View.vue')
  }
}
</script>

<style lang="">

</style>
