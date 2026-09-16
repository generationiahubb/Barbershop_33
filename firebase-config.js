// Cole aqui as chaves do SEU projeto Firebase.
// Onde encontrar: Firebase Console > Configurações do projeto > Seus apps > SDK setup and configuration.
const firebaseConfig = {
  apiKey: "AIzaSyB_n2O7pr97rRTui2GEGs2m8GPaH2RG4C0",
  authDomain: "status-barbearia.firebaseapp.com",
  projectId: "status-barbearia",
  storageBucket: "status-barbearia.firebasestorage.app",
  messagingSenderId: "727632278522",
  appId: "1:727632278522:web:384a59d5c70f522f40aa43"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Nome do documento onde o status fica salvo. Não precisa mudar.
const STATUS_DOC = db.collection("status").doc("barbearia");
