
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACXO549xbSYn9P1Wo_eU4rf0CIW2TjWGU",
  authDomain: "prueba1-93e58.firebaseapp.com",
  projectId: "prueba1-93e58",
  storageBucket: "prueba1-93e58.firebasestorage.app",
  messagingSenderId: "568709784551",
  appId: "1:568709784551:web:d7ab01d48a86d87f2e5342",
  measurementId: "G-QSYNQL226P"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


// 1) Una referencia a la aplicacion/plataforma de firebase (es la constante "app")
// 2) Una referencia a la base de datos de firebase (Se hace con la funcion getFirestore de firebase)