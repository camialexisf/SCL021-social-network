// import welcomeView from '../views/welcome.js';
import logInView from '../views/logIn.js';

export const toggleButton = () => {
  window.addEventListener('load', () => {
    const signUpButton = logInView.querySelectorAll('.signUpButton');
    const logInButton = logInView.querySelectorAll('.logInButton');
    const moveButton = logInView.querySelectorAll('.moveButton');
    console.log(random);
    signUpButton.addEventListener('click', () => {
      moveButton.classList.add('rightButton');
    });

    logInButton.addEventListener('click', () => {
      moveButton.classList.remove('rightButton');
    });
  });
};
