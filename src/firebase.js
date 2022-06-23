import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDZ57T6bXrdEJ74uZTnQMsn9kRg3B6SZjs",
  authDomain: "backend-30dca.firebaseapp.com",
  projectId: "backend-30dca",
  storageBucket: "backend-30dca.appspot.com",
  messagingSenderId: "44788249567",
  appId: "1:44788249567:web:f671314d09c97798bc0a6a",
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
