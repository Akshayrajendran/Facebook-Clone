import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3-dN0svWQshhUM1ok4nmAPEs0bmCT8OE",
  authDomain: "fb-clone-51ddd.firebaseapp.com",
  databaseURL: "https://fb-clone-51ddd.firebaseio.com",
  projectId: "fb-clone-51ddd",
  storageBucket: "fb-clone-51ddd.appspot.com",
  messagingSenderId: "338158549495",
  appId: "1:338158549495:web:9eab4ac6bc67001b1cd6f2",
  measurementId: "G-VBSLJG78HS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth=firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};

export default db;
