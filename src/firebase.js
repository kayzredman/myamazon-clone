import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC37OVS_nTJGObGng1TS2n9LFfdnLxg8A4",
  authDomain: "clone-c2803.firebaseapp.com",
  databaseURL: "https://clone-c2803.firebaseio.com",
  projectId: "clone-c2803",
  storageBucket: "clone-c2803.appspot.com",
  messagingSenderId: "876525241753",
  appId: "1:876525241753:web:d4520319d3abde295dff08",
  measurementId: "G-TBL2943WEQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
