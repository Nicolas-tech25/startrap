import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBB9SjS8cX1hR6NuDxAgpBCh4VScbEkJ1c",
    authDomain: "startrap-e38fa.firebaseapp.com",
    projectId: "startrap-e38fa",
    storageBucket: "startrap-e38fa.appspot.com",
    messagingSenderId: "193593167983",
    appId: "1:193593167983:web:0139adb1b1253f58673d9a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
