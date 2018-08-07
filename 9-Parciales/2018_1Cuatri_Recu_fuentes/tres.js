function mostrar()
{

	var precio;
	var descuento;
	var precioFinal;
	var precioconDecuento;
	var iva;

	precio=prompt("INgrese precio");
	precio= parseInt (precio);

	descuento=prompt("Ingrese descuento");
	descuento= parseInt (descuento);
	
	descuento=(precio * descuento)/100;
	alert ("El descuento es " + descuento);

	precioconDecuento= precio-descuento;
	alert ("El precio con descuento es" + precioconDecuento);

	iva=precioconDecuento*0.21;

	alert (" El iva es " + iva);

	document.getElementById('elPrecioFinal').value=precioconDecuento;



}
