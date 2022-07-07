import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {
    apiKey: "AIzaSyB21q72oLZof1dzk0dfnPdaYlmEIWXDoiw",
    authDomain: "ut-medium.firebaseapp.com",
    projectId: "ut-medium",
    storageBucket: "ut-medium.appspot.com",
    messagingSenderId: "170541109363",
    appId: "1:170541109363:web:4115f1f97bd8efd6165a06",
    measurementId: "G-73FKKLNXVQ"
  };


if (!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();


