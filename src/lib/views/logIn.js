console.log('login');


export const logInView = () => {
  const divForm = document.createElement('div');
  divForm.setAttribute('id', 'formContainer');
  divForm.className = 'formContainer';
  const logIn = `
    <div class= "logoContainer">
    <img class= "logoImagen" src="./images/tutipLogo.png">  
</div>
 <div class="wrapper">
 <div class="moldalForm"> 
<div class= "buttonsContainer">
        <button class= "actionButton logInButton">Iniciar sesión</button>
        <button class= "actionButton signUpButton">Registrate</button>
        <button class= "moveButton">Iniciar sesión</button>
</div> 
<div class="userForm"> 
<form action= "" class="form">
<div class="inputGroup">
       <input type= "email" placeholder="Correo">
       <input type= "password" placeholder="Contraseña">
       </div>
       <button type="submit" class="submitButton">Iniciar sesión</button>
       </form>
       <p>¿Aún no tienes cuenta? <a href="#/signUp">Registrate aquí</a></p>
</div>
</div>
    <footer class= "footer">
       <p>©Copyright 2022</p>
    </footer>
</div>
    
    `;

  return logIn;
};

//no cambia la clase dentro de la interpolacion *right butto//

window.addEventListener('toggleButton', () => {

  const signUpButton = logIn.querySelector(".signUpButton");
  const logInButton = logIn.querySelector(".logInButton");
  const moveButton = logIn.querySelector(".moveButton");
  
  signUpButton.addEventListener("click", ()=>{
    moveButton.classList.add("rightButton");
  });
  
  logInButton.addEventListener("click", ()=>{
    moveButton.classList.remove("rightButton");
  })
  }); 
