import welcomeView from '../views/welcome.js';
import logInView from '../views/logIn.js';
import signUpView from '../views/signUp.js';
import error404 from '../views/error404.js';
// import toggleButton from '../components/buttons.js';

// history push es api jeje

export const changeRoute = (hash) => {
  const root = document.getElementById('root');
  switch (hash) {
    case '#/':
      root.appendChild(welcomeView());
      break;
    case '#/logIn':
      root.appendChild(logInView());
      // root.appendChild(toggleButton());
      break;
    case '#/signUp':
      root.appendChild(signUpView());
      break;
    default:
      // console.log('404');
      root.appendChild(error404());
  }
};
