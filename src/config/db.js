import * as firebase from "firebase/app";
const config = {
  apiKey: "AIzaSyA060qd9WWud3l2o3EtAPfRX-zEwTYqDaQ",
  authDomain: "myhealth-bfff0.firebaseapp.com",
  databaseURL:
    "https://myhealth-bfff0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myhealth-bfff0",
  storageBucket: "myhealth-bfff0.appspot.com",
  messagingSenderId: "346169846585",
  appId: "1:346169846585:web:bb49ea8c7973ab11bf96e8",
  measurementId: "G-CEWNBV6W8X",
};

firebase.initializeApp(config);
export default firebase;
