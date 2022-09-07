// import { toggleButton } from '../components/buttons.js';
// console.log('login');

// esta es la pantalla para iniciar sesion
const logInView = () => {
  // contenedor de la vista completa
  const logInViewContainer = document.createElement('div');

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
  // contenedor de botones superiores
  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttonsContainer';
  modalForm.appendChild(buttonsContainer);
  // boton superior inicio sesion
  const logInButton = document.createElement('button');
  logInButton.className = 'actionButton';
  logInButton.classList.add('logInButton');
  logInButton.innerText = 'Iniciar Sesión';
  buttonsContainer.appendChild(logInButton);
  // boton superior para acceder a vista de registro
  const signUpButtonLink = document.createElement('a');
  signUpButtonLink.href = '#/signUp';
  signUpButtonLink.className = 'buttonLink';
  const signUpButton = document.createElement('button');
  signUpButton.className = 'actionButton';
  signUpButton.innerText = 'Registrate';
  signUpButton.classList.add('signUpButton');
  signUpButtonLink.appendChild(signUpButton);
  buttonsContainer.appendChild(signUpButtonLink);
  // boton que se mueve **es el de color lavanda**
  const moveButton = document.createElement('button');
  moveButton.className = 'moveButton';
  moveButton.innerText = 'Iniciar Sesión';
  buttonsContainer.appendChild(moveButton);
  // form que contiene los input para iniciar sesion
  const userForm = document.createElement('div');
  userForm.className = 'userForm';
  const form = document.createElement('form');
  form.className = 'form';
  const inputGroup = document.createElement('div');
  inputGroup.className = 'inputGroup';
  const directionMail = document.createElement('input');
  directionMail.setAttribute('type', 'email');
  directionMail.setAttribute('placeholder', 'Correo');
  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');
  // boton para iniciar sesion
  const submitButton = document.createElement('button');
  submitButton.className = 'submitButton';
  submitButton.innerText = 'Iniciar Sesión';
  inputGroup.appendChild(directionMail);
  inputGroup.appendChild(password);
  form.appendChild(inputGroup);
  form.appendChild(submitButton);
  userForm.appendChild(form);

  // boton inicio sesion google
  const googleContainer = document.createElement('div');
  googleContainer.className = 'googleContainer';
  const googleLogo = document.createElement('div');
  googleLogo.className = 'googleLogo';
  const googleImage = document.createElement('img');
  googleImage.src = './images/google.png';
  const googleButton = document.createElement('button');
  googleButton.className = 'googleButton';
  googleButton.innerText = 'Continúa con google';
  googleContainer.appendChild(googleLogo);
  googleContainer.appendChild(googleButton);

  const signUpText = document.createElement('p');
  signUpText.innerText = '¿No tienes cuenta?';
  const signUpLink = document.createElement('a');
  signUpLink.innerText = 'Registrate aquí';
  signUpLink.href = '#/signUp';
  signUpText.appendChild(signUpLink);

  const footer = document.createElement('p');
  footer.innerText = '©Copyright 2022';
  footer.className = 'footerView';
  wrapper.appendChild(modalForm);
  wrapper.appendChild(footer);
  modalForm.appendChild(userForm);
  logInViewContainer.appendChild(logoContainer);
  logInViewContainer.appendChild(wrapper);
  logInViewContainer.appendChild(googleContainer);

  return logInViewContainer;
};

export default logInView;
