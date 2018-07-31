/*
	jose 	m 25
	maria 	f 16
	jesus	m 33
	fer 	f 81


*/

function mostrar()
{

	var nombre;
	var sexo;
	var edad; 
	var contador=0;
	var contadordeMujeres=0;
	var contadordeHombres=0;
	var	cantidadMayores=0;
	var cantidadMenores=0;

	
	while (contador<4) {

	contador=contador+1;

	nombre= prompt ("Ingrese nombre");

	sexo=prompt("Ingrese sexo")
	while (sexo!= 'f' && sexo!= 'm') {

		sexo=prompt("Ingrese sexo");
	}

	edad= prompt ("Ingrese edad");
	edad=parseInt (edad);
	while (isNaN(edad) || edad<0 || edad>100) {

		 edad= prompt ("Ingrese edad");
		 edad=parseInt (edad);
 	}

  	if (sexo=='m') {

 		contadordeHombres=contadordeHombres+1;
 	}
 	else {

 		contadordeMujeres=contadordeMujeres+1;
  	}

	if (edad>=18) {

 		cantidadMayores=cantidadMayores+1;
 	}
 	else {

 		cantidadMenores=cantidadMenores+1;
  	}
  	





	}
	///FUERA DEL WHILEEEEEEEEEEEEE
	document.write ("La cantidad de mujeres es: " + contadordeMujeres+ "<br>");
  	document.write ("La cantidad de hombres es: " + contadordeHombres+ "<br>");
  	document.write ("La cantidad de menores es: " + cantidadMenores+ "<br>");
  	document.write ("La cantidad de menores es: " + cantidadMayores +"<br>" );
	
}
