const btnLogin = document.getElementById('boton-login');

const validateLogin = (e) => {
    e.preventDefault();
    const mail = document.getElementById('mail');
    const pass = document.getElementById('pass');

    if (mail.value === "") {
        alert("Por favor, escriba su e-mail.");
        mail.focus();
        return false;
      }

      if (mail.value !== "paarruvito@hotmail.com"){
        alert ("Por favor, escriba su e-mail correctamente usando @")
        mail.focus();
        return false;
      }
      
      if (pass.value === "") {
        alert("Por favor, escriba su contraseña");
        pass.focus();
        return false;
      }

      if (mail.value !== "paarruvito@hotmail.com" || pass.value !== 12345) {
        alert("El mail o la contraseñan son inválidas")
        mail.focus();
        return false;
      }

      return true;
    
}



console.log (btnLogin);

btnLogin.addEventListener('click', validateLogin);
