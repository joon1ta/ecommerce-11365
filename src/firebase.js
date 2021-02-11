import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCjR82wqXGMKnEMHeMQ_wzC0adBF_fmeLY",
    authDomain: "ecommerce-11365.firebaseapp.com",
    projectId: "ecommerce-11365",
    storageBucket: "ecommerce-11365.appspot.com",
    messagingSenderId: "792354990528",
    appId: "1:792354990528:web:cb4df0f51677e916648025"
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