<template>
  <v-navigation-drawer
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

export default {
  name: 'DefaultDrawer',
  components: {
    DefaultDrawerHeader: () => import(/* webpackChunkName: "views-default" */'./NavHeader.vue'),
    DefaultDrawerList: () => import(/* webpackChunkName: "views-default" */'./NavList.vue'),
  },
  data() {
    return {
      gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to:'/' },
        { title: 'Pages', icon: 'mdi-menu', items: [
          { title: 'Authentication', icon: 'mdi-login', items: [
            { title: 'SignIn', icon: 'mdi-login', to:'/authentication/sign-in' },
            { title: 'SignUp', icon: 'mdi-logout', to:'/authentication/sign-up' },
          ] },
          { title: 'ProductList', icon: 'mdi-reproduction', to:'/page/product-list' },
        ] },
        { title: 'Grid System', icon: 'mdi-grid', to:'/grid-system' },
        { title: 'Grid List Page', icon: 'mdi-view-list-outline', to:'/grid-list-page' },
        { title: 'Breakpoints', icon: 'mdi-responsive', to:'/breakpoints' },
        { title: 'Typography', icon: 'mdi-format-text-variant-outline', to:'/typography' },
        { title: 'Tables', icon: 'mdi-table', items: [
          { title: 'Basic Table', icon: 'mdi-login', to:'/tables/basic-table' },
          { title: 'App Table', icon: 'mdi-logout', to:'/tables/app-table' },
        ] },
        { title: 'Forms', icon: 'mdi-book-information-variant', items: [
          { title: 'Validation Form', icon: 'mdi-login', to:'/forms/validation-form' },
          { title: 'App Form', icon: 'mdi-logout', to:'/forms/app-form' },
        ] },
        { title: 'Buttons', icon: 'mdi-gesture-tap-button', to:'/buttons' },
        { title: 'Icons', icon: 'mdi-emoticon-wink-outline', to:'/icons' },
      ],
    }
  },
}
</script>
