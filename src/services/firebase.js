// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCodv0g8p2tlmv6xlRT_fTORwJBVcsd0Hk",
	authDomain: "quizaspectos.firebaseapp.com",
	projectId: "quizaspectos",
	storageBucket: "quizaspectos.appspot.com",
	messagingSenderId: "725893360119",
	appId: "1:725893360119:web:d8783057e8b2b7456866f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
