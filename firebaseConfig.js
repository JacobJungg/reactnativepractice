import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm5lWMwNpmMJkT5SqOBb7Es-Cb-x_DeGI",
  authDomain: "photo-app-d592d.firebaseapp.com",
  projectId: "photo-app-d592d",
  storageBucket: "photo-app-d592d.appspot.com",
  messagingSenderId: "91104308340",
  appId: "1:91104308340:web:b1354a7c964e13868d7521"
};

// Initialize Firebase, passing app as parameter
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);