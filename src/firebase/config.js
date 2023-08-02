import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCPU62aia7aw6-OnPFcLJ12DGLB-TwIKjE",
    authDomain: "fir-59434.firebaseapp.com",
    projectId: "fir-59434",
    storageBucket: "fir-59434.appspot.com",
    messagingSenderId: "739432528436",
    appId: "1:739432528436:web:56b30d480e88707599a861",
    measurementId: "G-G48NF6CD76"
  };

export default firebase.initializeApp(firebaseConfig)