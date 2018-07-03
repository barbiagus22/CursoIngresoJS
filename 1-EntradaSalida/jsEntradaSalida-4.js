/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre=prompt("ingrese su nombre");
	document.getElementById('elNombre').value=nombre;

	// si ingreso igual antes de document.get (=documnet.get.... )significa que tomo un dato del elemento,
	//si lo ingreso despues signifi que me va a mostrar el valor que se encuentra en el documento.
	// siempre ingresa . value para asignar el valor. 
	// readonly solo texto para no poder escribir en el mismo solo para que me muestre el resultado.
	




}

