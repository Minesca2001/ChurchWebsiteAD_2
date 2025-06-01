  // Mostrar modal al cargar la página
  window.onload = function () {
    document.getElementById('loginModal').style.display = 'flex';
  };

  // Cerrar modal (puedes agregar validación aquí)
  function cerrarModal() {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    // Validación simple
    if (usuario && clave) {
      document.getElementById('loginModal').style.display = 'none';
    } else {
      alert("Por favor completa todos los campos.");
    }
  }