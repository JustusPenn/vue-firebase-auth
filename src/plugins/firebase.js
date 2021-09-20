// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOUv_Txi9J7RrtGiSaQsuUT0bFqMb-B-I",
  authDomain: "fire5-52ffc.firebaseapp.com",
  databaseURL: "https://fire5-52ffc.firebaseio.com",
  projectId: "fire5-52ffc",
  storageBucket: "fire5-52ffc.appspot.com",
  messagingSenderId: "178640839467",
  appId: "1:178640839467:web:824c1b1a40e05759065b6e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;