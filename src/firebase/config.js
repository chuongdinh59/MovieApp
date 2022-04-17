import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyB_tR3b92mwmwOp6O3NOCdNnG4pfFdCnKQ',
  authDomain: 'movie-app-auth-7fbfc.firebaseapp.com',
  projectId: 'movie-app-auth-7fbfc',
  storageBucket: 'movie-app-auth-7fbfc.appspot.com',
  messagingSenderId: '873261003373',
  appId: '1:873261003373:web:87a521c14cf04f52938564',
  measurementId: 'G-J68DGZFWW7',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
