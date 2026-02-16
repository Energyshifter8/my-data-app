import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Энд өөрийнхөө Config-ийг хуулна
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
