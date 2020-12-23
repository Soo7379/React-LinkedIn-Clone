import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA0DEjqBa_EY8Pp7l4L9kTope-PySfhL1A',
  authDomain: 'react-linkedin-clone-391cf.firebaseapp.com',
  projectId: 'react-linkedin-clone-391cf',
  storageBucket: 'react-linkedin-clone-391cf.appspot.com',
  messagingSenderId: '982365311680',
  appId: '1:982365311680:web:a4ff51af351ff861d39325',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
