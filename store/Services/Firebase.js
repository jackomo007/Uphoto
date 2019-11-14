import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBTZIr2JyfCOnIxiRt_kuoT9Bn3t8HHXdg",
    authDomain: "photou-8407c.firebaseapp.com",
    databaseURL: "https://photou-8407c.firebaseio.com",
    projectId: "photou-8407c",
    storageBucket: "photou-8407c.appspot.com",
    messagingSenderId: "968513665633",
    appId: "1:968513665633:web:e72c11e80877d0373b4820",
    measurementId: "G-90MDFRKLRH"
  };
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const dB = firebase.database();