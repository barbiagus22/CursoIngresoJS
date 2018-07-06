function mostrar()
{
	var precio;
	var descuento;
	var preciofinal;


	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el descuento");

	descuento=precio-descuento;
	alert("El descuento es: " + descuento);

	precio=precio-descuento;
	alert("El precio con el descuento: " + precio);

	//document.getElementById('descuento').value=descuento;


	//descuento=pasertIn(descuento);
	//precio= precio-descuento;
	//preciofinal= (precio*0.21);

	//document.getElementById('elPrecioFinal').value=preciofinal;



}
