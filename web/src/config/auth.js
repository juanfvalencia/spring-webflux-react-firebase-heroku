import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyDZp-1WGvD5x1c0g_dAo2z_RNkuLUKE21g",
    authDomain: "questions-answers-sofka.firebaseapp.com",
    projectId: "questions-answers-sofka",
    storageBucket: "questions-answers-sofka.appspot.com",
    messagingSenderId: "821910269983",
    appId: "1:821910269983:web:b749313b9866acc780652a"
  });

  const auth = firebase.auth();

  export function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

export function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function logoutu() {
    return auth.signOut();
}

export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
};