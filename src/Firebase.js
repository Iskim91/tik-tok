import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtMzJpJPcS7hHeBBCVNdo7xCqI5kt3ewM",
  authDomain: "tic-toc-clone-fb0b1.firebaseapp.com",
  databaseURL: "https://tic-toc-clone-fb0b1.firebaseio.com",
  projectId: "tic-toc-clone-fb0b1",
  storageBucket: "tic-toc-clone-fb0b1.appspot.com",
  messagingSenderId: "1053680401381",
  appId: "1:1053680401381:web:7a80bc9182b8bcd7e64d0c",
  measurementId: "G-YE4VW2LWTQ"
};

const firebaseApp =
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);

export default db;