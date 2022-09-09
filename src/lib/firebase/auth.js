import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

import { app } from './firebase.js';

const auth = getAuth();
const provider = new GoogleAuthProvider();

const registerEmailPassword = (email, password, confirmPassword) => {
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

const logInWithGoogle = () => {
  console.log('ejecutando Login con Google');
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('exito!', result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      return credential;
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return errorCode;
    });
};

// export function logIn(email, password) {
//   const auth = getAuth();
//    return signInWithEmailAndPassword(auth, email, password);
// }
// export function loginGoogle() {
//   const auth = getAuth();
//    return signInWithPopup(auth, provider);
//  }

// export { app, auth, registerEmailPassword, logInWithGoogle };
