// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyB5d1u_xQNTncUqrM-5Dyr35Z7atGhNuW8",
  authDomain: "cashpoint-d47ee.firebaseapp.com",
  databaseURL: "https://cashpoint-d47ee-default-rtdb.firebaseio.com",
  projectId: "cashpoint-d47ee",
  storageBucket: "cashpoint-d47ee.firebasestorage.app",
  messagingSenderId: "770354738288",
  appId: "1:770354738288:web:c3db5520f82a7fe9ccb0b5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
