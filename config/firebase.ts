import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQhY_n7RilKkvBmw5mM09-qE7Gl-reg_E",
  authDomain: "see-rex.firebaseapp.com",
  projectId: "see-rex",
  storageBucket: "see-rex.appspot.com",
  messagingSenderId: "865484220059",
  appId: "1:865484220059:web:3b870026f2d42a03c5883e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// FIREBASE_API_KEY="AIzaSyDQhY_n7RilKkvBmw5mM09-qE7Gl-reg_E"
// FIREBASE_AUTH_DOMAIN="see-rex.firebaseapp.com"
// FIREBASE_PROJECT_ID="see-rex"
// FIREBASE_API_STORAGE_BUCKET="see-rex.appspot.com"
// FIREBASE_API_MESSAGING_SENDER_ID="865484220059"
// FIREBASE_APP_ID="1:865484220059:web:3b870026f2d42a03c5883e"
