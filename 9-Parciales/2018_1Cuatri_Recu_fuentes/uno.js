function mostrar()
{

	var base;
	var altura;
	var superficie;
	var perimetro;

	base= prompt ("Ingrese base del rectangulo");
	base= parseInt (base);

	altura=prompt ("Ingrese altura del rectangulo");
	altura= parseInt (altura);

	superficie= (base*altura)/2;
	perimetro=  base*3;

	alert ("El perimetro es" + perimetro + " y la superficie es "+ superficie);



}

