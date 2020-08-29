import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCub0C4HqmhGzn5JCV_zE5pzadpU9cfznY",
  authDomain: "facebook-bharath-4e64a.firebaseapp.com",
  databaseURL: "https://facebook-bharath-4e64a.firebaseio.com",
  projectId: "facebook-bharath-4e64a",
  storageBucket: "facebook-bharath-4e64a.appspot.com",
  messagingSenderId: "54479746887",
  appId: "1:54479746887:web:f17c4f00c12394601abe62",
  measurementId: "G-JE5SHHECM0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
