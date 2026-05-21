import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCrc9WgN_9GD7baU4Ih-FokBvEJaqKBdqI",
    authDomain: "meusistemadelogin.firebaseapp.com",
    projectId: "meusistemadelogin",
    storageBucket: "meusistemadelogin.firebasestorage.app",
    messagingSenderId: "245655955087",
    appId: "1:245655955087:web:f667da7b75e3cac04d72fa",
    measurementId: "G-KBW5RD6YD8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);