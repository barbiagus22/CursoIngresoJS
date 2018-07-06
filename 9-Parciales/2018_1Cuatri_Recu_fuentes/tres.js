function mostrar()
{
	var precio;
	var descuento;
	var preciofinal;
	var iva;

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el descuento");

	descuento=(precio*descuento)/100;
	alert("El descuento es: " + descuento);

	precio=precio-descuento;
	alert("El precio con el descuento: " + precio);

	iva=(precio*0.21)+(descuento*0.21);
	alert("El iva es : "+ iva);

	preciofinal=precio+iva;

	document.getElementById('elPrecioFinal').value=preciofinal;









	//document.getElementById('descuento').value=descuento;


	//descuento=pasertIn(descuento);
	//precio= precio-descuento;
	//preciofinal= (precio*0.21);

	//document.getElementById('elPrecioFinal').value=preciofinal;



}
