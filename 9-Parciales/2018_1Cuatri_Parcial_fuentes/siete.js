/*
	
	NOMBRE		SEXO		EDAD
	jose 		m 			25
	maria 		f 			16
	jesus		m 	   	 	33
	fer 		f 			81
*/

// Siempre que tenemos cantidad , ejecutar contador. 

function mostrar()
{

	var contador=0;
	var nombre;
	var sexo;
	var edad;
	var cantidaddeMujeres=0;
	var cantidaddeHombres=0;
	var cantidaddeMayores=0;
	var cantidaddeMenores=0;
	var edadMaxima=0;
	var edadMinima=0;
	var promedioedadMujeres;
	var promedioedadHombre;
	var promedioedadTotal;
	var totalPersonas;
	var edadTotal=0;
	var masViejo;
	


	while (contador<2) {

		contador=contador+1;


		nombre= prompt("Ingrese nombre");

		sexo = prompt ("Ingrese sexo");

		while (sexo!= 'F' && sexo!='M') {

			sexo = prompt ("Ingrese sexo");
		}

		edad= prompt ("Ingrese edad");
		edad=parseInt (edad);

		while ( isNaN(edad) || edad<0 || edad>100) {

			edad= prompt ("Ingrese edad");
			edad=parseInt (edad);

		}


		if (sexo=='F') {

			cantidaddeMujeres=cantidaddeMujeres+1;
		}
		else {

			cantidaddeHombres=cantidaddeHombres+1;
		}

		if (edad>18) {

			cantidaddeMayores=cantidaddeMayores+1;
		}
		else {

			cantidaddeMenores=cantidaddeMenores+1;
		}
		if (contador==1) {

			edadMinima=edad;
			edadMaxima=edad;
		}
		else {

			if (edad>edadMaxima) {

				edadMaxima=edad;
			}
			if (edad<edadMinima) {

				edadMinima=edad;
			}
		}
		if (sexo=='F') {

			promedioedadMujeres= edad / cantidaddeMujeres;
		}
		else {

			promedioedadHombre=edad/cantidaddeHombres;
		}

		if (cantidaddeHombres>=0 && cantidaddeMujeres>=0) {

			edadTotal=edadTotal+edad;
			totalPersonas=cantidaddeMujeres+cantidaddeHombres;
			promedioedadTotal=edadTotal/ totalPersonas;
		}
	


	}






	document.write ( " Los nombres son: " + nombre + "<br>");
	document.write ( " La cantidad de hombre es: " + cantidaddeHombres + "<br>");
	document.write ( " La cantidad de mujeres es: " + cantidaddeMujeres + "<br>");
	document.write ( " La cantidad de mayores es: " + cantidaddeMayores + "<br>");
	document.write ( " La cantidad de menores es: " + cantidaddeMenores + "<br>");
	document.write ( " La edad minima es: " + edadMinima + "<br>");
	document.write ( " La edad maxima es: " + edadMaxima + "<br>");
	document.write ( " La edad promedio mujeres es: " + promedioedadMujeres + "<br>");
	document.write ( " La edad promedio hombre es: " + promedioedadHombre + "<br>");
	document.write ( " La edad promedio total es: " + promedioedadTotal + "<br>");
	document.write ( " El nombre del mas viejo es: " + masViejo + "<br>");


}


