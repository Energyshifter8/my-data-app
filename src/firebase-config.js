import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIQ4myNegnjPOJT967HKahv2_J9LIVAJw",
  authDomain: "my-data-app-90e00.firebaseapp.com",
  projectId: "my-data-app-90e00",
  storageBucket: "my-data-app-90e00.firebasestorage.app",
  messagingSenderId: "751473474619",
  appId: "1:751473474619:web:8f10f35ad5b85ca27d301e",
  measurementId: "G-MXE7D5DZ88",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const facebookProvider = new FacebookAuthProvider();
