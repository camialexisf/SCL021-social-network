// import welcomeView from '../views/welcome.js';

export const toggleVissibility = () => {
  window.onload = function viewPassword() {
    const eyeContainer = document.getElementById('eyeContainer');
    console.log(eyeContainer);
    eyeContainer.addEventListener('click', () => {
      const inputPassword = document.getElementById('hiddenPasword');
      const openEye = document.getElementById('openEye');
      const closedEye = document.getElementById('closedEye');
      if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
        openEye.style.display = 'block';
        closedEye.style.display = 'none';
      } else {
        inputPassword.type = 'text';
        openEye.style.display = 'none';
        closedEye.style.display = 'block';
      }
    });
  };
};

// export const toggleButton = () => {
//     window.addEventListener('load', () => {
//     const signUpButton = logInView.querySelectorAll('.signUpButton');
//     const logInButton = logInView.querySelectorAll('.logInButton');
//     const moveButton = logInView.querySelectorAll('.moveButton');
// console.log(random);
//     signUpButton.addEventListener('click', () => {
//       moveButton.classList.add('rightButton');
//     });
//     logInButton.addEventListener('click', () => {
//       moveButton.classList.remove('rightButton');
//     });
//   });
// };
