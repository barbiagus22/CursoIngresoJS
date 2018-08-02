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

	var contador;
	var nombre;
	var sexo;
	var edad;
	var cantidaddeMujeres=0;
	var cantidaddeHombres=0;


	while (contador<4) {

		contador=contador+1;


		nombre= prompt("Ingrese nombre");

		sexo = prompt ("Ingrese sexo");

		while (sexo!= 'F' && sexo!='M') {

			sexo = prompt ("Ingrese sexo");
		}

		if (sexo=='F') {

			cantidaddeMujeres=cantidaddeMujeres+1;
		}
		else {

			cantidaddeHombres=cantidaddeHombres+1;
		}


	}
