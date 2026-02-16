// Firebase-ийн үндсэн функцүүдийг дуудаж байна
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore-ийг дуудаж байна

const firebaseConfig = {
  apiKey: "AIzaSyDIQ4myNegnjPOJT967HKahv2_J9LIVAJw",
  authDomain: "my-data-app-90e00.firebaseapp.com",
  projectId: "my-data-app-90e00",
  storageBucket: "my-data-app-90e00.firebasestorage.app",
  messagingSenderId: "751473474619",
  appId: "1:751473474619:web:8f10f35ad5b85ca27d301e",
  measurementId: "G-MXE7D5DZ88",
};

// Firebase-ийг ажиллуулж байна
const app = initializeApp(firebaseConfig);

// Өгөгдлийн санг (Firestore) бусад файлдаа ашиглахын тулд гаргаж (export) байна
export const db = getFirestore(app);
