import { sendChatRequest } from '../plugins/firebase';
<template>
    <div class = "center">
        <div class = "form">
            <v-text-field 
            v-model="name"
            label="Chat name"
            hide-details="auto"
            variant="underlined"
            clearable
            class = " ma-4 pa-2"
            >

            </v-text-field>


            <div class = "d-flex align-center">
            <v-text-field 
            v-model="person"
            label="Add By Id"
            hide-details="auto"
              variant="underlined"
              clearable
              class = " ma-4 pa-2"
            >

            </v-text-field>
            <v-btn @click="addPerson">Add</v-btn>
        </div>

            <p class = "ml-4">Chat List:</p>
            <div>
                <v-card class="overflow-y-auto scroller ma-4"  max-height="150px" >
                    <v-card v-for="UserName in people" :key="UserName" class = "block ma-1" >
                        <div class = "d-flex align-center">
                            <p class = "pa-1">{{ UserName }}</p>
                            <button @click="Delete">X</button>
                        </div>
                    </v-card>
                </v-card>

                
            </div>
            <div>
                <v-btn @click="CreateChat">Create</v-btn>
            </div>

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

    .form{
        border: 1px solid black;
        background-color: #162130;
        color: white;
        width: 400px;
    }

    .scroller {
        width: min-content;
    }

    .block {
        border: 1px solid black;
        border-radius: 5%;
        width: min-content;
    }

    .center-btns {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
         margin: 10px;
    }

</style>

<script>
    import { getUser } from '@/plugins/storage.js';
    import { sendChatRequest, createChat } from '@/plugins/firebase.js';

    export default {
        data() {
            return {
                name: null,
                person: null,
                people: []
            }
        },
        methods: {
            addPerson(){
                this.people.push(this.person);
            },
            Delete(event) {
                const el = event.target.parentNode.children[0].textConten;
                this.people.splice(this.people.indexOf(el), 1);
            },

            async CreateChat(){
                const chatId = await createChat(this.name);

                await sendChatRequest(getUser().createdUser.uid, chatId, this.name,  "admin");

                for(let person of this.people) {
                    await sendChatRequest(person, chatId , this.name, "member");
                }
            }
        }
    }
</script>