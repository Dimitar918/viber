<template>
    <v-toolbar dark color="#162130" style="height:7.5vh;">
        <v-toolbar-items v-if="isLogged">
        <router-link to = "/" color="white" class = "el">Chats</router-link>
        <router-link to = "/create" flat color="white" class = "el">Create Chat</router-link>
        <router-link to = "/register" flat color="white" class = "el">Requests</router-link>
        <router-link to = "/logout" flat color="white" class = "el logout">Log out</router-link>
      </v-toolbar-items>

      <v-toolbar-items v-else>
        <router-link to = "/" color="white" class = "el">Home</router-link>
        <router-link to = "/login" flat color="white" class = "el">Login</router-link>
        <router-link to = "/register" flat color="white" class = "el">Register</router-link>
      </v-toolbar-items>
    </v-toolbar>
 </template>
  
 <style scoped>

    .el{
        text-decoration: none;
        color: white;
        margin: 2.5vh;
    }

    .logout {
      position: fixed;
      right: 0;
    }
 </style>

  <script> 
    import {getUser} from "@/plugins/storage.js";

    export default {
      data() {
        return {
          isLogged: false
        }
      },
      created() {
        if(getUser() !== null){
          this.isLogged = true;
        }
        else{
          this.isLogged = false;
        }
      }
    }
  </script>