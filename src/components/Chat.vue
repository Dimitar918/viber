<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" location = "left">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar color = "main">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Viber</v-toolbar-title>
    </v-app-bar>

    <v-main class = "d-flex flex-column ">

      <div class = "flex-grow-1">
        <v-card v-for="n in 4" :key="n" outlined tile class = "pa-2 ma-2">
          <div>
            <p>{{ n }}</p>
            <h3> Message {{ n }}</h3>
          </div>
        </v-card>
      </div>
    

      <div class = "flex-grow: 0">
        <v-text-field v-on:keyup.enter = "addMessage" label = "Write a message!" class = "justify-start align-content-end" hide-details="auto">
        </v-text-field>
      </div>
      
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
    methods: {
        addMessage(val){
          alert(val.target.value)
        }
    }
  }
</script>
