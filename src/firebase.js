import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyADJvyF5bOukFaOh0mnRHYBbO2EDfvo8XY",
    authDomain: "react-todo-app-c83d0.firebaseapp.com",
    projectId: "react-todo-app-c83d0",
    storageBucket: "react-todo-app-c83d0.appspot.com",
    messagingSenderId: "943437345067",
    appId: "1:943437345067:web:9137de4dd60b3f2d9b556e"
  })

  const db = firebaseApp.firestore();
 
  export default db;