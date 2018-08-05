/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso 
por prompt de las notas (validar entre 0 y 10),la edad y 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor
 o igual a 6. 
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar si no hubo
 ninguna mujer.

 13.16hs

*/

function mostrar()
{

	var nota;
	var edad;
	var sexo;
	var contador=0;
	var acumuladornotasTotales=0; 
	var promedionotasTotales; 
	var notaMinima;
	var notaMaxima; 
	var sexodenotaMinima; 
	var sexodenotaMaxima;
	var cantidadVarones=0;
	var acumuladorcantidadVarones=0;
	var edaddelmasJoven;
	var sexodelmasJoven;
	var notadelmasJoven;
	var primeraMujer;
	var edadprimeraMujer;
	var notaprimeraMujer;

	while(contador<2)
	 {
		nota = prompt ("Ingrese nota");
		nota = parseInt (nota);
		sexo=  prompt ("Ingrese sexo");
		edad = prompt ("Ingrese edad");

		acumuladornotasTotales=acumuladornotasTotales+nota;

		while (isNaN (nota)  || nota<0 || nota>10  ) 
		{
			nota = prompt (" Error ! reingrese nota de 0 a 10");
			nota = parseInt (nota);
		}
		while (sexo!= 'f'  && sexo!= 'm')
		{
			sexo=  prompt ("Error ! reingrese sexo f o m ");
		}
/*B*/

		if (contador==0  || nota< notaMinima ) 
		{
			notaMinima=nota;
			sexodenotaMinima=sexo;
		}
		if (contador==0  || nota> notaMaxima ) 
		{
			notaMaxima=nota;
			sexodenotaMaxima=sexo;
		}
/*C*/	
		if (edad>18 && nota>=6 && sexo== 'm') {

			cantidadVarones=cantidadVarones+1;
			acumuladorcantidadVarones=acumuladorcantidadVarones+edad;
		}	
/*D*/
		if (contador==0 ||  edad < edaddelmasjoven) 
		{
			edaddelmasjoven=edad;
			sexodelmasJoven=sexo;
			notadelmasJoven=nota;
			
		}
/*F*/			
		if (sexo== 'f' && contador==0 || sexo< primeraMujer)
		{	
			primeraMujer=sexo;
			notaprimeraMujer=nota;
			edadprimeraMujer=edad;
		}
		else 
		{
			alert ("no hubo mujer");
		}

		///pedir que corrija el ultimo punto



		contador=contador+1;
	}

/*A*/	promedionotasTotales=acumuladornotasTotales/contador;
		alert ("El promedio de notas totales es  " + promedionotasTotales );

		alert ("La nota mas baja es  " + notaMinima + " y el sexo es " + sexodenotaMinima );
		alert ("La nota mas alta es  " + notaMaxima + " y el sexo es " + sexodenotaMaxima );
		alert ("La cantidad de varones con edad mayor a 18 años y notas mayores o iguales a 6 son " + cantidadVarones );
		alert ("La edad de mas joven es  " + edaddelmasjoven + " de sexo " + sexodelmasJoven + " Y la nota fue de " + notadelmasJoven);
		alert ("La primer mujer tiene" + edadprimeraMujer + " años " + " y su nota fue de " + notaprimeraMujer + "puntos");




}
