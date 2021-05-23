import firebase from 'firebase';

// below is the config to login with firebase authenthication
const firebaseConfig = {
    apiKey: "AIzaSyBuf1GVg4BBw4X4ludbpnMBZmTXZrbLWRo",
    authDomain: "netflix-clone-318e7.firebaseapp.com",
    projectId: "netflix-clone-318e7",
    storageBucket: "netflix-clone-318e7.appspot.com",
    messagingSenderId: "309087761768",
    appId: "1:309087761768:web:d6d17f585f1458bbe412dd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }; // this can be many explicit exports
  export default db; // this default export can only be one 

