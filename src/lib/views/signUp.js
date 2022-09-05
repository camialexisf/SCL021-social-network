const signUpView = () => {
  // contenedor de la vista completa
  const signUpViewContainer = document.createElement('div');
  const divForm = document.createElement('div');
  divForm.setAttribute('id', 'formContainer');
  divForm.className = 'formContainer';
  // contenedor del logo 
  const logoContainer = document.createElement('div');
  logoContainer.className = 'logoContainer';
  const logoImagen = document.createElement('img');
  logoImagen.className = 'logoImagen';
  logoImagen.src = './images/tutipLogo.png';
  logoContainer.appendChild(logoImagen);
  // contenedor del form
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  const modalForm = document.createElement('div');
  modalForm.className = 'modalForm';
  const buttonsContainer = document.createElement('div');
  //contenedor de botones superiores
  buttonsContainer.className = 'buttonsContainer';
  modalForm.appendChild(buttonsContainer);
  // boton superior para acceder a la vista de inicio de sesion
  const logInButtonLink = document.createElement('a');
  logInButtonLink.href = '#/logIn';
  logInButtonLink.className = 'buttonLink';
  const logInButton = document.createElement('button');
  logInButton.className = 'actionButton';
  logInButton.classList.add('logInButton');
  logInButton.innerText = 'Iniciar Sesión';
  logInButtonLink.appendChild(logInButton);
  buttonsContainer.appendChild(logInButtonLink);
  // boton superior registrarse
  const signUpButton = document.createElement('button');
  signUpButton.className = 'actionButton';
  signUpButton.innerText = 'Registrate';
  signUpButton.classList.add('signUpButton');
  buttonsContainer.appendChild(signUpButton);
  // boton que se mueve **es el de color lavanda**
  const moveButton = document.createElement('button');
  moveButton.className = 'moveButton';
  moveButton.classList.add('rightButton');
  moveButton.innerText = 'Registrate';
  buttonsContainer.appendChild(moveButton);
  // form que contiene los input para iniciar sesion
  const userForm = document.createElement('div');
  userForm.className = 'userForm';
  const form = document.createElement('form');
  form.className = 'form';
  const inputGroup = document.createElement('div');
  inputGroup.className = 'inputGroup';
  const nameUser = document.createElement('input');
  nameUser.setAttribute('type', 'name');
  nameUser.setAttribute('placeholder', 'Ingresa tu nombre');
  const directionMail = document.createElement('input');
  directionMail.setAttribute('type', 'email');
  directionMail.setAttribute('placeholder', 'Correo');
  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');
  const passwordConfirm = document.createElement('input');
  passwordConfirm.setAttribute('type', 'password');
  passwordConfirm.setAttribute('placeholder', 'Confirma tu contraseña');
  const submitButton = document.createElement('button');
  // boton para iniciar sesion
  submitButton.className = 'submitButton';
  submitButton.innerText = 'Registrate';

  

  inputGroup.appendChild(nameUser);
  inputGroup.appendChild(directionMail);
  inputGroup.appendChild(password);
  inputGroup.appendChild(passwordConfirm);
  form.appendChild(inputGroup);
  form.appendChild(submitButton);
  userForm.appendChild(form);

  const logInText = document.createElement('p');
  logInText.innerText = '¿Ya tienes cuenta?';
  const logInLink = document.createElement('a');
  logInLink.innerText = 'Ingresa aquí';
  logInLink.href = '#/logIn';
  logInText.appendChild(logInLink);

  const footer = document.createElement('p');
  footer.innerText = '©Copyright 2022';
  footer.className = 'footerView';
  wrapper.appendChild(modalForm);
  wrapper.appendChild(footer);
  modalForm.appendChild(userForm);
  signUpViewContainer.appendChild(logoContainer);
  signUpViewContainer.appendChild(wrapper);
  return signUpViewContainer;
};
export default signUpView;