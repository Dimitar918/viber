<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" location = "left">
      <!--  -->
      <v-card v-for="n in chats" :key="n" outlined tile class = "pa-2 ma-2">
        <div>
          <p>{{ n }}</p>
        </div>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar color = "main">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Viber</v-toolbar-title>
    </v-app-bar>

    <v-main>

      <v-card class="overflow-y-auto" max-height="575px">
        <v-card v-for="n in messages" :key="n" outlined tile class = "pa-2 ma-2">
          <div>
            <p>{{ n }}</p>
            <h3> Message {{ n }}</h3>
          </div>
        </v-card>
      </v-card>
    

      <v-card class = "sticky">
        <v-text-field v-on:keyup.enter = "addMessage" label = "Write a message!" class = "justify-start align-content-end" hide-details="auto">
        </v-text-field>
      </v-card>
      
    </v-main>
  </v-app>
</template>

<style scoped>
  .sticky{
    z-index: 1;
    position: fixed;
    top: 100%;
    transform: translate(0%, -100%);
    width:100%;
  }
</style>

<script>
  import { getChats } from '@/plugins/firebase.js';
  import { getUser } from '../plugins/storage.js';

  export default {
    data: () => ({ drawer: null, messages: [], chats: [] }),
    created() {
      this.generateChats();
    },
    methods: {
        async generateChats(){
          const res = await getChats(getUser());
          const keys = Array.from(Object.keys(res));
          keys.forEach(key => {
            this.chats.push(res[key].name);
          })
        },
        addMessage(val){
          this.messages.push(val.target.value);
        }
    }
  }
</script>
