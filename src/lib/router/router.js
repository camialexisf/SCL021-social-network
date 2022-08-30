import { welcomeView } from "../views/welcome.js"
import { logInView } from "../views/logIn.js";
//console.log(welcomeView);
export const changeRoute = (hash) => {
    const root = document.getElementById('root');
    switch (hash) {
        case '#/':
            root.innerHTML = welcomeView();
            //root.appendChild(welcomeView());
            //root.appendChild(divWelcome);
            //se debe importar el logo y el boton para iniciar sesion desde welcome.js
            break;
        case '#/viewSignUp':
            root.innerHTML = logInView();

    }

};