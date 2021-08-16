import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDfTJlgWT27fwVzyh5f9JjZ1Ee2X7l3frc",
    authDomain: "crwn-db-fd996.firebaseapp.com",
    projectId: "crwn-db-fd996",
    storageBucket: "crwn-db-fd996.appspot.com",
    messagingSenderId: "982641956782",
    appId: "1:982641956782:web:a7b8e7e2efd66d8c091a3f"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;