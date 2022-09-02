import welcomeView from '../views/welcome.js';
import logInView from '../views/logIn.js';
import toggleButton from '../components/buttons.js';

export const changeRoute = (hash) => {
  const root = document.getElementById('root');
  switch (hash) {
    case '#/':
       root.appendChild(welcomeView());
      break;
    case '#/logIn':
      root.appendChild(logInView());
      root.appendChild(toggleButton());
      break;
    default:
    console.log("404"); 
    //root.innerHTML = error404();
  }
};
