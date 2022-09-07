import { app } from './firebase.js';
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup, } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';


export function signIn (name, email, password, confirmPassword){
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, name, email, password, confirmPassword);
} 

export function logIn(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
}

export function loginGoogle() {
    const auth = getAuth();
    return signInWithPopup(auth, provider);
  }