console.log('login');
export const logInView = () => {
  const divForm = document.createElement('div');
  divForm.setAttribute('id', 'formContainer');
  divForm.classNnpmame = 'formContainer';
  const logIn = `
    <div class= "logoContainer">
    <img class= "logoImagen" src="./images/tutipLogo.png">  
</div>
 <div class="wrapper">
 <div class="moldalForm"> 
<div class= "buttonsContainer">
        <button class= "actionButton signUpButton">Registrate</button>
        <button class= "actionButton logInButton">Inicio sesión</button>
        <button class= "moveButton">Registrate</button>
</div> 
<div class="userForm"> 
<form action= "" class="form">
<div class="inputGroup"<
       <input type= "email" placeholder="Correo">
       <input type= "text" placeholder="Nombre y apellido">
       <input type= "password" placeholder="Contraseña">
       <input type= "password" placeholder="Confirma tu contraseña">
       </div>
       <button type="submit" class="submitButton">Registrarse</button>
       </form>
       <p>¿Ya tienes cuenta? <a href="#/signUp">Ingresa aquí</a></p>
</div>
</div>
    <footer class= "footer">
       <p>©Copyright 2022</p>
    </footer>
</div>
    
    `;
  return logIn;
};
