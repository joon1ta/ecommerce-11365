import firebase from 'firebase/app'
import 'firebase/firestore'


const APIKEY = process.env.REACT_APP_FIREBASE_APIKEY;

const firebaseConfig = {
  apiKey: APIKEY,
    authDomain: "ecommerce-11365-dbd0c.firebaseapp.com",
    projectId: "ecommerce-11365-dbd0c",
    storageBucket: "ecommerce-11365-dbd0c.appspot.com",
    messagingSenderId: "259861373927",
    appId: "1:259861373927:web:98ebc13058db84e4561342",
    measurementId: "G-EDEDPS27GC"
}

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}


/* rules_version = '2';
service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write, update: if true
      }
    }
  }
*/