function mostrar()
{

	var precio;
	var descuento;
	var preciofinal;

	precio= prompt("INgrese precio");
	precio= parseInt (precio);

	descuento= prompt("INgrese descuento");
	descuento= parseInt (descuento);

	preciofinal = precio-descuento;

	document.getElementById('elPrecioFinal').value=preciofinal;




}
