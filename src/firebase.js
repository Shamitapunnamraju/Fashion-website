import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs8JhEeDyD25Ko1vYjA1w8RnPZ8u82HWY",
  authDomain: "fashion-recommender-syst-90cbe.firebaseapp.com",
  projectId: "fashion-recommender-syst-90cbe",
  storageBucket: "fashion-recommender-syst-90cbe.appspot.com",
  messagingSenderId: "319882661225",
  appId: "1:319882661225:web:4928042c1bd1ae716a41f8",
  measurementId: "G-7F5EC5L84T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
