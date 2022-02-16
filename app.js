(function () {
  'use strict';

  // Déclaration du formulaire
  let form = document.getElementById('myForm');

  // Ecoute de l'action submit, et lancement de la fonction
  form.addEventListener('submit', function(event) {
    Array.from(form.elements).forEach(input => {
      if (input.type !== 'submit') {
        if (!validateFields(input)) {
          event.preventDefault();
          event.stopPropagation();

          input.classList.remove('is-valid');
          input.classList.add('is-invalid');
          input.nextElementSibling.style.display = 'block';
        } else {
          input.nextElementSibling.style.display = 'none';
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
        }
      }
    });
  }, false);

})();

// Validation d'un champ REQUIRED
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}

// Validation du nombres de caractères: MIN & MAX
function validateLength(input, minLength, maxLength) {
  return !(input.value.length < minLength || input.value.length > maxLength);
}

// Validation des caractères: LATIN & LETTRES
function validateText(input) {
  return input.value.match("^[A-Za-z]+$");
}

// Validation d'un email
function validateEmail(input) {
  let email = input.value;
  let position_at = email.indexOf('@');
  let position_dot = email.lastIndexOf(".");

  return !(position_at < 1 || (position_dot - position_at < 2));
}