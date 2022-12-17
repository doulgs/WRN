import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyDFmug9s1UksyjDTN0tAfSdx6A5efThmhg',
  authDomain: 'w-rn-3048d.firebaseapp.com',
  databaseURL: 'https://w-rn-3048d-default-rtdb.firebaseio.com',
  projectId: 'w-rn-3048d',
  storageBucket: 'w-rn-3048d.appspot.com',
  messagingSenderId: '96923877762',
  appId: '1:96923877762:web:0b6b4217c7c0ce60664f9b',
  measurementId: 'G-M1DLL3NHDH',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
