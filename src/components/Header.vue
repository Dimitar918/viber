<template>
    <v-toolbar dark color="#162130" style="height:7.5vh;">
        <v-toolbar-items v-if="isLogged">
        <div class = "el">
          <p>{{this.name.username}}</p>
          <p style = "font-size: 12px">{{this.uid}}</p>
        </div>
        <router-link to = "/chats" color="white" class = "el">Chats</router-link>
        <router-link to = "/create" flat color="white" class = "el">Create Chat</router-link>
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
          isLogged: false,
          name: null,
          uid: null
        }
      },
      created() {
        const user = getUser();

        if(user !== null){
          this.name = user.username;
          this.uid = user.createdUser.uid;
          this.isLogged = true;
        }
        else{
          this.isLogged = false;
        }
      }
    }
  </script>