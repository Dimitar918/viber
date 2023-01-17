<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" location = "left">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar color = "main">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Viber</v-toolbar-title>
    </v-app-bar>

    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>
