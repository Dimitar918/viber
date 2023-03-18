import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, addDoc, setDoc, getDoc, collection, setDoc} from "firebase/firestore";
import { getUser } from "./storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvUh93dOLAlZ-bSPkuHfGHMAJdNlfVUwo",
  authDomain: "viber-app-b3f35.firebaseapp.com",
  projectId: "viber-app-b3f35",
  storageBucket: "viber-app-b3f35.appspot.com",
  messagingSenderId: "243889158310",
  appId: "1:243889158310:web:fcea9024a00eb1d2c49c67",
  measurementId: "G-L825WFC81W"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export async function getUserName(user){
  try{
    const usersMainDoc= doc(db, "users", user.uid);
    const users = await getDoc(usersMainDoc);

    return users.data().name;
  }
  catch(err){
    alert(err.message);
  }

}


export async function setUser(uid, id){
  try{
    const userDoc = doc(db, "users", uid);
    const user = await getDoc(userDoc);
  
    user.chats.push(id);
  
    await setDoc(userDoc, user);
  }
  catch(err){
    alert(err.message);
  }
}

export async function addUser(user, name){
    try{
      const userDoc = doc(db, "users", user.uid);
      await setDoc(userDoc, {
        name: name,
        chats: [],
      })
    }
    catch(err){
      alert(err.message);
    }
}

export async function createChat(documentData){
  const coll = collection(db, "/chats");
  const createdDocument = await addDoc(coll, documentData);

  return createdDocument.id;

}





