import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { userStore } from "sveltefire";
import { writable } from "svelte/store";

const firebaseConfig = {
  apiKey: "AIzaSyAfWQESssUfuYFYO6-rItnbh6mtxGva9Js",
  authDomain: "svelte-tree-2bfdb.firebaseapp.com",
  projectId: "svelte-tree-2bfdb",
  storageBucket: "svelte-tree-2bfdb.appspot.com",
  messagingSenderId: "601679625706",
  appId: "1:601679625706:web:577733b8ddee2c5fae4693",
  measurementId: "G-PPG7WL3GLR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

export const user = userStore(auth);

export const userData = writable<any>(null);

user.subscribe((user) => {
  if (user) {
    const docRef = doc(db, `users/${user.uid}`);
    onSnapshot(docRef, (snapshot) => {
      userData.set(snapshot.data());
    });
  }
});
