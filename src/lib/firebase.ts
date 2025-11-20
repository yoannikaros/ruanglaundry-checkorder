// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZD0C9D-kJzIDqMuFW-cCadP2AwKZwrQU",
  authDomain: "ruanglaundripekanbaru.firebaseapp.com",
  projectId: "ruanglaundripekanbaru",
  storageBucket: "ruanglaundripekanbaru.firebasestorage.app",
  messagingSenderId: "966790682685",
  appId: "1:966790682685:web:c7a5901c195e69a82eb254",
  measurementId: "G-30VSMH8K0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics only on client side and when supported
let analytics: ReturnType<typeof getAnalytics> | null = null;

// Function to initialize analytics on client side
export const initializeAnalytics = async () => {
  if (typeof window !== 'undefined' && !analytics) {
    const supported = await isSupported();
    if (supported) {
      analytics = getAnalytics(app);
    }
  }
  return analytics;
};

// Export the Firebase app instance
export { app };

// Export other Firebase services as needed
// For example:
// import { getAuth } from "firebase/auth";
// export const auth = getAuth(app);
