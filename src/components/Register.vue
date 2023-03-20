<template>
<div class = "center">
    <div class = "card">
        <v-text-field
         label="Username"
         v-model="username"
          hide-details="auto"
          variant="underlined"
          clearable
          class = " ma-4 pa-2"
        >
        </v-text-field>
        <v-text-field
         label="Email"
         v-model="email"
          hide-details="auto"
          variant="underlined"
          clearable
          class = " ma-4 pa-2"
        >
        </v-text-field>
        <v-text-field
         label="Password"
         v-model="password"
         type="password"
          hide-details="auto"
          variant="underlined"
          clearable
          class = " ma-4 pa-2"
        >
        </v-text-field>

        <v-btn @click="registerUser" variant="text" class = "ma-4">
            Register
        </v-btn>
        
    </div>

</div>
</template>

<style scoped>
.center{
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
}
.card{
    border: 1px solid black;
    background-color: #162130;
    color: white;
    width: 400px;
}
</style>

<script>

import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, createUser} from "@/plugins/firebase.js";
import {setUser} from "@/plugins/storage.js"; 
import router from "@/router";

export default {

    data() {
        return  {
            username: null,
            email: null,
            password: null,
        }
    },
    methods:{
        async registerUser(){
            const user = {
                email: this.email,
                username: this.username,
                password: this.password,
            }

            try{
                const res = await createUserWithEmailAndPassword(auth, user.email, user.password);

                const createdUser =  res.user; 
                setUser({createdUser, username: user.username});

                await createUser(createdUser, user.username);  

                router.push("/");

            }catch(err){
                alert(err.message);
            }
        }
    }
}
</script>