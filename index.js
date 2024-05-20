document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("contactForm");
    const campoNombre = document.getElementById("nombre");
    const errorNombre = document.getElementById("nombreError");
    const campoEmail = document.getElementById("email");
    const errorEmail = document.getElementById("emailError");
    const campoTelefono = document.getElementById("telefono");
    const errorTelefono = document.getElementById("telefonoError");
    const campoMensaje = document.getElementById("mensaje");
    const errorMensaje = document.getElementById("mensajeError");
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navbar nav ul');
  
    // Verificar que los elementos del menú existen antes de agregar event listeners
    if (menuToggle && navLinks) {
      menuToggle.('click', function(event) {
        event.stopPropagation();
        navLinks.classList.toggle('active');
        menuToggle.style.display = navLinks.classList.contains('active') ? 'none' : '';
      });
  
      document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
          navLinks.classList.remove('active');
          menuToggle.style.display = '';
        }
      });
    }
  
    // Verificar que los elementos del formulario existen antes de agregar event listeners
    if (formulario && campoNombre && errorNombre && campoEmail && errorEmail && campoTelefono && errorTelefono && campoMensaje && errorMensaje) {
      formulario.addEventListener("submit", (event) => {
        event.preventDefault();
  
        // Validar campos
        const nombreValor = campoNombre.value.trim();
        const emailValor = campoEmail.value.trim();
        const telefonoValor = campoTelefono.value.trim();
        const mensajeValor = campoMensaje.value.trim();
        
        const nombreValido = validarNombre(nombreValor);
        const emailValido = validarEmail(emailValor);
        const telefonoValido = validarTelefono(telefonoValor);
        const mensajeValido = validarMensaje(mensajeValor);
  
        let formularioValido = true;
  
        if (!nombreValido) {
          errorNombre.style.display = "block";
          formularioValido = false;
        } else {
          errorNombre.style.display = "none";
        }
  
        if (!emailValido) {
          errorEmail.style.display = "block";
          formularioValido = false;
        } else {
          errorEmail.style.display = "none";
        }
  
        if (!telefonoValido) {
          errorTelefono.style.display = "block";
          formularioValido = false;
        } else {
          errorTelefono.style.display = "none";
        }
  
        if (!mensajeValido) {
          errorMensaje.style.display = "block";
          formularioValido = false;
        } else {
          errorMensaje.style.display = "none";
        }
  
        if (formularioValido) {
          alert("Formulario enviado correctamente");
        }
      });
    }
  });
  
  function validarNombre(nombre) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(nombre);
  }
  
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function validarTelefono(telefono) {
    const regex = /^\d{10}$/;
    return regex.test(telefono);
  }
  
  function validarMensaje(mensaje) {
    return mensaje.length > 0;
  }
  