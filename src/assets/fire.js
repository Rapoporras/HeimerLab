import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDSeWOyMbOEMgiLxUgMK651TZCRxU7t1-Q",
  authDomain: "heimerlab-9138a.firebaseapp.com",
  databaseURL: "https://heimerlab-9138a.firebaseio.com",
  projectId: "heimerlab-9138a",
  storageBucket: "heimerlab-9138a.appspot.com",
  messagingSenderId: "753168456494",
  appId: "1:753168456494:web:b9af3c1908cb68f788b8bf",
  measurementId: "G-H5C77CHX73"
};
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
