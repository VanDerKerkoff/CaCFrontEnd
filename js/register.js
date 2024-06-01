document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#registerForm");
    const errorMessage = document.querySelector("#errorMessage");
  
    form.addEventListener("submit", (evento) => {
      evento.preventDefault();
  
      const nombre = form.nombre.value;
      const apellido = form.apellido.value;
      const celular = form.celular.value;
      const email = form.email.value;
      const password = form.password.value;
      const password2=form.password2.value;
  
      if (nombre === "" || apellido ==="" || celular==="" || email==="" || password ==="" || password2==="") {
        errorMessage.textContent = "Todos los campos son obligatorios";
        return;
      }
      
      if (!(/^[^@]+@[^@\.]+\.[^@]+$/.test(email)))
    {
      errorMessage.textContent = "Por favor, ingrese un email válido";
      return;
    }

      if (password.length < 6) {
        errorMessage.textContent = "El password debe tener al menos seis digitos";
        return;
      }

      if (password!=password2){
        errorMessage.textContent = "Las password no coinciden";
        return;
      }
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((user) => user.email === email);
  
      if (existingUser) {
        errorMessage.textContent =
          "El usuario ya se encuentra registrado";
        return;
      }
  
      const newUser = {
        nombre,
        apellido,
        celular,
        email,
        password
      };
  
      users.push(newUser);
  
      localStorage.setItem("users", JSON.stringify(users));
  
      window.location.href = "login.html";
    });
  });

  