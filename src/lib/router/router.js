import { welcomeView } from '../views/welcome.js';

export const changeRoute = (hash) => {
  const root = document.getElementById('root');
  switch (hash) {
    case '#/':
      root.appendChild(welcomeView());
      //se debe importar el logo y el boton para iniciar sesion desde welcome.js
      break;
  }
};
