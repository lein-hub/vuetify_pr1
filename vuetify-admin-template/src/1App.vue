<template>
  <v-app>
    <v-app-bar
      v-if="$vuetify.breakpoint.xsOnly"
      app
    />
    <v-navigation-drawer app />
    <v-main>
      <v-container fluid>
        컨텐츠영역
      </v-container>
    </v-main>

    <v-footer app />
  </v-app>
</template>

<script>
export default {

}
</script>
