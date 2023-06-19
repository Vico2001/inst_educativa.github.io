// Validación del formulario de contacto
window.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        // Si el formulario es válido, puedes enviar los datos al servidor o realizar alguna otra acción aquí
        form.reset();
      }
    });
  
    function validateForm() {
      var nombre = document.getElementById('nombre');
      var email = document.getElementById('email');
      var telefono = document.getElementById('telefono');
      var asunto = document.getElementById('asunto');
      var mensaje = document.getElementById('mensaje');
  
      // Restablecer advertencias previas
      resetWarnings();
  
      // Validar campos requeridos
      var isValid = true;
      if (!nombre.value) {
        showWarning(nombre, 'Por favor, ingrese su nombre.');
        isValid = false;
      }
  
      if (!email.value) {
        showWarning(email, 'Por favor, ingrese su correo electrónico.');
        isValid = false;
      } else if (!validateEmail(email.value)) {
        showWarning(email, 'Por favor, ingrese un correo electrónico válido.');
        isValid = false;
      }
  
      if (!asunto.value) {
        showWarning(asunto, 'Por favor, seleccione un asunto.');
        isValid = false;
      }

      if (!pais.value) {
        showWarning(pais, 'Por favor, seleccione un País.');
        isValid = false;
      }

      if (!intereses.value) {
        showWarning(intereses, 'Por favor, seleccione un Interes.');
        isValid = false;
      }
  
      if (!mensaje.value) {
        showWarning(mensaje, 'Por favor, ingrese un mensaje.');
        isValid = false;
      }
  
      // Validar formato de teléfono (opcional)
      if (telefono.value && !validatePhone(telefono.value)) {
        showWarning(telefono, 'Por favor, ingrese un número de teléfono válido.');
        isValid = false;
      }
  
      return isValid;
    }

    function displayWarning(inputElement, message) {
        const warningElement = inputElement.nextElementSibling;
        warningElement.textContent = message;
        warningElement.style.display = 'block';
      }
    
      function hideWarning(inputElement) {
        const warningElement = inputElement.nextElementSibling;
        warningElement.textContent = '';
        warningElement.style.display = 'none';
      }
  
    function showWarning(field, message) {
      var warning = field.parentNode.querySelector('.warning');
      warning.textContent = message;
      warning.style.display = 'block';
    }
  
    function resetWarnings() {
      var warnings = document.querySelectorAll('.warning');
      warnings.forEach(function(warning) {
        warning.textContent = '';
        warning.style.display = 'none';
      });
    }
  
    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function validatePhone(phone) {
      var phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    }

    function showWarning(field, message) {
        var warning = document.getElementById(field.id + 'Warning');
        warning.textContent = message;
        warning.style.display = 'block';
      }
      
  });
  