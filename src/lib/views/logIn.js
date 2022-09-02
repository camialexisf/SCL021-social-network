import { toggleButton } from '../components/buttons.js';
//console.log("login");

const logInView = () => {
  const logInViewContainer = document.createElement("div");
  const divForm = document.createElement("div");
    divForm.setAttribute("id", "formContainer");
    divForm.className = "formContainer";
 const logoContainer = document.createElement("div");
    logoContainer.className = "logoContainer";
  const logoImagen = document.createElement("img");
    logoImagen.className = "logoImagen";
    logoImagen.src = "./images/tutipLogo.png";
  logoContainer.appendChild(logoImagen);

  const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
  const modalForm = document.createElement("div");
    modalForm.className = "modalForm";
  const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttonsContainer";
  modalForm.appendChild(buttonsContainer);
  const logInButton = document.createElement("button");
    logInButton.className = "actionButton";
    logInButton.classList.add("logInButton");
    logInButton.innerText = "Iniciar Sesión";
    buttonsContainer.appendChild(logInButton);
  const signUpButton = document.createElement("button");
    signUpButton.className = "actionButton";
    signUpButton.innerText = "Registrate";
    signUpButton.classList.add("signUpButton");
  buttonsContainer.appendChild(signUpButton);

  const moveButton = document.createElement("button");
    moveButton.className = "moveButton";
    moveButton.innerText = "Iniciar Sesión";
  buttonsContainer.appendChild(moveButton);

  const userForm = document.createElement("div");
    userForm.className = "userForm";
  const form = document.createElement("form");
    form.className = "form";
  const inputGroup = document.createElement("div");
    inputGroup.className = "inputGroup";
  const directionMail = document.createElement("input");
    directionMail.setAttribute("type", "email");
    directionMail.setAttribute("placeholder", "correo");
  const password = document.createElement("input");
    password.setAttribute("type", "password"); 
    password.setAttribute("placeholder", "contraseña");
  const submitButton = document.createElement("button");
    submitButton.className = "submitButton";
    submitButton.innerText = "Iniciar Sesión";
   inputGroup.appendChild(directionMail);
   inputGroup.appendChild(password);
   form.appendChild(inputGroup);
   form.appendChild(submitButton);
   userForm.appendChild(form);
  const signUpText = document.createElement("p");
    signUpText.innerText = "¿No tienes cuenta?";
  const signUpLink = document.createElement("a");
    signUpLink.innerText = "Registrate aquí";
    signUpLink.href = "#/signUp";
    signUpText.appendChild(signUpLink);

  const footer = document.createElement("p");
    footer.innerText = "©Copyright 2022";
    wrapper.appendChild(modalForm);
    wrapper.appendChild(footer);
    modalForm.appendChild(userForm);
    logInViewContainer.appendChild(logoContainer);
    logInViewContainer.appendChild(wrapper);
    return logInViewContainer;
};

export default logInView;