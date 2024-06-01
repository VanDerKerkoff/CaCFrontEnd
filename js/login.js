document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#loginForm");
    const errorMessage = document.querySelector("#errorMessage");
  
    form.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const email = form.email.value;
      const password = form.password.value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((user) => user.email === email);
  
      if (email==="" || password ==="") {
        errorMessage.textContent = "Todos los campos son obligatorios";
        return;
      }

      if (!user) {
        errorMessage.textContent =
          "El usuario no existe";
        return;
      }
  
      if (user.password!=password) {
        errorMessage.textContent =
          "El usuario o la constraseña son incorrectos";
        return;
      }
  
      window.location.href = "welcome.html";
    });
  });
  