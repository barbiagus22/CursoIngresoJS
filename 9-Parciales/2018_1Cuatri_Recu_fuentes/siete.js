
/*
Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de
las notas (validar entre 0 y 10),la edad y 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
 informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
d) La edad y la nota de la primera mujer ingresada
 o informar si no hubo ninguna mujer.

*/

function mostrar()
{
	var nota;
	var edad;
	var sexo;
	var contador=0;
	var acumuladornotas=0;
	var promediodenotas;
	var notamasBaja;
	var sexodelanotaBaja;
	var cantidaddeVarones=0;
	var primeraMujer;
	var edadprimeraMujer;
	var notaprimeraMujer;
	var contadorMujeres=0;
	
	while (contador<5)
	{
		contador=contador+1

		nota= prompt("Ingrese la nota");
		nota= parseInt (nota);

		acumuladornotas=acumuladornotas+nota;

		while (nota<0 || nota>10) {

			nota= prompt("Error reingrese la nota");
			nota= parseInt (nota);
		}

		edad=prompt("Ingrese la edad");
		edad= parseInt (edad);

		while (edad<0 || edad>100) {

			edad=prompt("Error! riengrese la edad");
			edad= parseInt (edad);
		}


		sexo = prompt("Ingrese sexo “f” o “m”");
		

		while (sexo !='f' && sexo != 'm')	{

			sexo = prompt("Error!! reingrese sexo “f” o “m”");

		}

		if (contador==1 || nota< notamasBaja  ) {

			notamasBaja=nota;
			sexodelanotaBaja=sexo;
		}
		if (sexo== 'm' && edad>18 && nota>=6) {

			cantidaddeVarones=cantidaddeVarones+1;

		}
		if (sexo== 'f' && contadorMujeres==0 )
		{	
			contadorMujeres=contadorMujeres+1;
			primeraMujer=sexo;
			notaprimeraMujer=nota;
			edadprimeraMujer=edad;
		}
	
	}

	promediodenotas=acumuladornotas/contador;

	if (contadorMujeres==0) {

		alert ("No hay mujeres");
	}

	
		

	alert( " El promedio de notas es " + promediodenotas );
	alert( " La notas mas baja es  " + notamasBaja + " Y sexo de esa persona es " + sexodelanotaBaja );
	alert ( " La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6 " +  cantidaddeVarones );
	alert( " La nota de la primera mujer es " + notaprimeraMujer + " y la edad " + edadprimeraMujer  );




}