
function mostrar()
{

	var ancho;
	var largo;
	var perimetro;

	ancho= prompt("INgrese ancho");
	ancho= parseInt (ancho);

	largo=prompt("INgrese largo");
	largo= parseInt (largo);

	perimetro= ancho*2 + largo*2;

	alert ( "El perimetro es " + perimetro);

}
