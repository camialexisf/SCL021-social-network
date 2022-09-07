import { app } from './firebase.js';
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup, } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';


// export const signUp = async () => {
// /*const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     const confirmPassword = document.getElementById('confirmPassword');*/
//     //traer el id boton
//     //ponerle el addeventlistener
//     //hacer prevent default
//     //hacer console log
// const submitButton = document.getElementById('submitButton');
// //const submitButton = document.querySelector('#submitButton');
// //submitButton.addEventListener('click', (e) => {
//    submitButton.preventDefault();
//    console.log(submitButton);

//};

const registerEmailPassword = (email, password, confirmPassword) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, confirmPassword)
      .then((userCredential) => {
        window.location.hash = '#/error404';
        // Signed in
        const user = userCredential.user;
        emailVerification(auth);
        //  const userId = user.uid;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(user);
        return errorCode;
      });
  };
  

/*export function logIn(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
}

export function loginGoogle() {
    const auth = getAuth();
    return signInWithPopup(auth, provider);
  }*/

export {
    registerEmailPassword
};