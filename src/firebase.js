// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase/app"
import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDtEjLBhp4HtNSCi3CNoHHNwfjZW9sLoIk",
    authDomain: "airbnb-bed77.firebaseapp.com",
    projectId: "airbnb-bed77",
    storageBucket: "airbnb-bed77.appspot.com",
    messagingSenderId: "34574457059",
    appId: "1:34574457059:web:576319f0eacc87ab40cdd6",
    measurementId: "G-T6MWPYMS9D"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider()
  export {auth,provider}
  export default db