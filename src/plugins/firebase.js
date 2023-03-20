import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, child, get, update } from "firebase/database";
import {v4 as uuid} from 'uuid';


const firebaseConfig = {
  apiKey: "AIzaSyDvUh93dOLAlZ-bSPkuHfGHMAJdNlfVUwo",
  authDomain: "viber-app-b3f35.firebaseapp.com",
  databaseURL: "https://viber-app-b3f35-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "viber-app-b3f35",
  storageBucket: "viber-app-b3f35.appspot.com",
  messagingSenderId: "243889158310",
  appId: "1:243889158310:web:fcea9024a00eb1d2c49c67",
  measurementId: "G-L825WFC81W"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getDatabase(app);

export async function createUser(user, name) {
  await set(ref(db, 'users/' + user.uid), {
    username: name
  });
}

export async function getName(user) {
  const dbRef = ref(db);
  const res =  await get(child(dbRef, `users/` + user.uid));
  return await res.val();

}

export async function sendChatRequest(uid, chatId, chatName, role) {
  const dbRef = ref(db);

  const updates = {};
  updates[chatId] = {
    role: role,
    name: chatName,
  };

  await update(child(dbRef, `users/${uid}/chats/`), updates);

}

export async function createChat(name) {
  const chatId = uuid();
  await set(ref(db, 'groups/' + chatId), {
    groupName: name,
    messages: {}
  });

  return chatId;
}

export async function getChats(user) {
   const chats = await get(ref(db, 'users/' + user.createdUser.uid + "/chats/"));
   const data = await chats.val();
   return data;
}









