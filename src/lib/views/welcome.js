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
    <div class= "logoContainer">
        <img class= "logoImagen" src="./images/tutipWithSubtitle.png">  
    </div>
    <div class= "loginButtonContainer">
        <button class= "loginButton">Iniciar Sesión</button>
        <p>¿No tienes cuenta? <a href="#/signUp">Registrate aqui</a></p>
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
