import firebase from 'firebase/app'

import 'firebase/auth'

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCDtmTUh6oHbYD_567bTlQhi0YqSFwbtf0",
  authDomain: "yt-clone-rajes.firebaseapp.com",
  projectId: "yt-clone-rajes",
  storageBucket: "yt-clone-rajes.appspot.com",
  messagingSenderId: "59193996273",
  appId: "1:59193996273:web:1f0e55624216391e088a50"
};


  firebase.initializeApp(firebaseConfig) 

  export default firebase.auth()
  // export default app

  // export 'default' (imported as 'firebase') was not found in 'firebase/app'