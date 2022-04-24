const btnEnviar = document.getElementById('btn-enviar');



const validate = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre');
  const areaTexto = document.getElementById('areaTexto');

  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre de usuario usando 50 caracteres de maximo.");
    nombre.focus();
    return false;
  }
  
  if (areaTexto.value === "") {
    alert("Por favor, escribe tu mensaje");
    areaTexto.focus();
    return false;
  }
  
  return true;
  
}



btnEnviar.addEventListener('click', validate);



/*
  document.getElementById ("botones-formulario").reset();
}
*/