// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyChf7oSC5DB0AUI4lQEbd2LUF4dyBOzAek",
  authDomain: "danismanlik-sistemi.firebaseapp.com",
  projectId: "danismanlik-sistemi",
  storageBucket: "danismanlik-sistemi.appspot.com",
  messagingSenderId: "466057505526",
  appId: "1:466057505526:web:449815577b1dd44e415ad7",
  measurementId: "G-SQ6PXV0GDE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;