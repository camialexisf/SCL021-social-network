const error404 = () => {
  const errorText = document.createElement('p');
  errorText.innerText = 'Ups aqui no hay nada aun';

  return errorText;
};
export default error404;
