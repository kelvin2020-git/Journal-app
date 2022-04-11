import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC97gikQKSAxY4NAxOjzQPEBaJTimbtwWM",
  authDomain: "react-journal-e6936.firebaseapp.com",
  projectId: "react-journal-e6936",
  storageBucket: "react-journal-e6936.appspot.com",
  messagingSenderId: "655955064431",
  appId: "1:655955064431:web:61798abdb9080771f0bf9a"
};
  
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}