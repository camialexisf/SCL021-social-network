// Este es el punto de entrada de tu aplicacion
import { changeRoute } from './lib/router/router.js';
import { welcomeView } from './lib/views/welcome.js';
//import { myFunction } from './lib/index.js';

//myFunction();

const init = () => {
  //window.location.href = 'http://127.0.0.1:5500/src/index.html';
  const root = document.getElementById('root');
  root.innerHTML = welcomeView();
  window.addEventListener('hashchange', () => {
    console.log('hash', window.location.hash);
    root.innerHTML = '';
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);
