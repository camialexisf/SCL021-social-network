// export default () => /*html*/`
//     <img src=/src/images/tutip logo.png>
//     <h2>hay que compartip</h2>
// `;

console.log('aparezco');

export const welcomeView = () => {
  // const divWelcome = document.createElement('div');
  // divWelcome.className = 'welcomeContainer';
  // divWelcome.setAttribute('id','welcomeContainer');
  // const divLogo = document.createElement('div');
  // divLogo.className = 'logoContainer';
  // const divLoginButton = document.createElement('div');
  // divLoginButton.className = 'loginButtonContainer';
  const welcomePage = ` 
    <div class= "welcomeLogoContainer">
        <img class= "welcomeLogoImagen" src="./images/tutipWithSubtitle.png">  
    </div>
    <div class= "welcomeLoginButtonContainer">
        <button class= "welcomeLoginButton">Iniciar Sesión</button>
        <p>¿No tienes cuenta? <a href="#/signUp">Registrate aquí</a></p>
    </div> 
    <footer class= "footer">
       <p>©Copyright 2022</p>
    </footer>
    `;
  //divWelcome.innerHTML = welcomePage;
  //document.getElementById('welcomeContainer').innerHTML += welcomePage;
  //divWelcome.appendChild(welcomePage);
  return welcomePage;
};
