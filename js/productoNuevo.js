const btnAgregar = document.getElementById('boton-agregar');

const validateAgrega = (e) => {
    e.preventDefault();
    const nombreP = document.getElementById('nombre-producto');
    const precioP = document.getElementById('precio-producto');
    const descripcionP = document.getElementById('descripcion-producto');

    if (nombreP.value === "") {
        alert("Por favor, escriba el nombre del producto.");
        nombreP.focus();
        return false;
      }
      
      if (precioP.value === "") {
        alert("Por favor, escriba el precio del producto");
        precioP.focus();
        return false;
      }
      
      if (descripcionP.value === "") {
        alert("Por favor, escriba la descripcion del producto");
        descripcionP.focus();
        return false;
      }
      
      return true;
}



console.log (btnAgregar);

btnAgregar.addEventListener('click', validateAgrega);