import { initializeApp } from "firebase/app";
import "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCZD0C9D-kJzIDqMuFW-cCadP2AwKZwrQU",
  authDomain: "ruanglaundripekanbaru.firebaseapp.com",
  projectId: "ruanglaundripekanbaru",
  storageBucket: "ruanglaundripekanbaru.firebasestorage.app",
  messagingSenderId: "966790682685",
  appId: "1:966790682685:web:c7a5901c195e69a82eb254",
  measurementId: "G-30VSMH8K0X"
};
const app = initializeApp(firebaseConfig);
getFirestore(app);
