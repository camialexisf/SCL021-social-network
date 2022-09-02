// Este es el punto de entrada de tu aplicacion
import { welcomeView } from './lib/views/welcome.js';
import { changeRoute } from './lib/router/router.js';
import { logInView } from './lib/views/logIn.js';
// import { myFunction } from './lib/index.js';

// myFunction();
// console.log(welcomeView);
const init = () => {
 // window.location.href = 'http://localhost:3000/#/';
  const root = document.getElementById('root');
  root.innerHTML = welcomeView();
  window.addEventListener('hashchange', () => {
    // console.log('hash', window.location.hash);
    root.innerHTML = '';
    changeRoute(window.location.hash);
  });
};
window.addEventListener('load', init);


/*const toggleButton = () => {

  const signUpButton = document.querySelector(".signUpButton");
  const logInButton = document.querySelector(".logInButton");
  const moveButton = document.querySelector(".moveButton");
  console.log(logInButton);
  logInButton.addEventListener("click", ()=>{
    moveButton.classList.add("rightButton");
  });
  
  signUpButton.addEventListener("click", ()=>{
    moveButton.classList.remove("rightButton");
  }); 
}
window.addEventListener('load', logInView, toggleButton);*/

